'use client';

import { ChevronRight, ChevronDown, User, CheckCircle2, Circle } from 'lucide-react';
import { useState, useMemo } from 'react';
import { useProjectStore } from '@/lib/stores/project-store';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ParticipantView() {
  // Select each piece separately to avoid object reference issues
  const participants = useProjectStore((state) => state.participants);
  const questions = useProjectStore((state) => state.questions);
  const answers = useProjectStore((state) => state.answers);
  const navigationState = useProjectStore((state) => state.navigationState);
  const selectAnswer = useProjectStore((state) => state.selectAnswer);

  const [expandedParticipants, setExpandedParticipants] = useState<Set<string>>(
    new Set([participants[0]?.id])
  );

  // Memoize coded status - check if content has <mark> tags
  const codedStatus = useMemo(() => {
    const status: Record<string, boolean> = {};
    answers.forEach((answer) => {
      const key = `${answer.participantId}-${answer.questionId}`;
      // Check if content contains <mark> tags (highlights)
      status[key] = answer.content.includes('<mark');
    });
    return status;
  }, [answers]);

  const toggleParticipant = (participantId: string) => {
    setExpandedParticipants((prev) => {
      const next = new Set(prev);
      if (next.has(participantId)) {
        next.delete(participantId);
      } else {
        next.add(participantId);
      }
      return next;
    });
  };

  const handleQuestionClick = (participantId: string, questionId: string) => {
    selectAnswer(participantId, questionId);
  };

  return (
    <div className="space-y-1">
      {participants.map((participant) => {
        const isExpanded = expandedParticipants.has(participant.id);
        const progress = participant.totalAnswersCount
          ? Math.round((participant.codedCount! / participant.totalAnswersCount) * 100)
          : 0;

        return (
          <div key={participant.id}>
            {/* Participant Header */}
            <Button
              variant="ghost"
              className="w-full justify-start px-2 h-9 font-normal"
              onClick={() => toggleParticipant(participant.id)}
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4 mr-1.5 shrink-0" />
              ) : (
                <ChevronRight className="h-4 w-4 mr-1.5 shrink-0" />
              )}
              <User className="h-4 w-4 mr-2 shrink-0 text-muted-foreground" />
              <span className="truncate flex-1 text-left">{participant.name}</span>
              <span className="text-xs text-muted-foreground ml-2">
                {participant.codedCount}/{participant.totalAnswersCount}
              </span>
            </Button>

            {/* Progress bar */}
            {isExpanded && (
              <div className="mx-2 mb-1 h-1 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}

            {/* Questions List */}
            {isExpanded && (
              <div className="ml-4 space-y-0.5 mb-2">
                {questions.map((question) => {
                  const isSelected =
                    navigationState.selectedParticipantId === participant.id &&
                    navigationState.selectedQuestionId === question.id;
                  const isCoded = codedStatus[`${participant.id}-${question.id}`] || false;

                  return (
                    <Button
                      key={question.id}
                      variant="ghost"
                      className={cn(
                        'w-full justify-start px-2 h-8 font-normal text-xs',
                        isSelected && 'bg-accent'
                      )}
                      onClick={() => handleQuestionClick(participant.id, question.id)}
                    >
                      {isCoded ? (
                        <CheckCircle2 className="h-3.5 w-3.5 mr-2 shrink-0 text-green-600" />
                      ) : (
                        <Circle className="h-3.5 w-3.5 mr-2 shrink-0 text-muted-foreground" />
                      )}
                      <span className="truncate text-left">
                        Q{question.order}: {question.text}
                      </span>
                    </Button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
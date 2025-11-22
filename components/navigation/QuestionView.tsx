'use client';

import { ChevronRight, ChevronDown, ClipboardList, User, CheckCircle2, Circle } from 'lucide-react';
import { useState, useMemo } from 'react';
import { useProjectStore } from '@/lib/stores/project-store';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function QuestionView() {
  // Select each piece separately to avoid object reference issues
  const questions = useProjectStore((state) => state.questions);
  const participants = useProjectStore((state) => state.participants);
  const answers = useProjectStore((state) => state.answers);
  const navigationState = useProjectStore((state) => state.navigationState);
  const selectAnswer = useProjectStore((state) => state.selectAnswer);

  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(
    new Set([questions[0]?.id])
  );

  // Memoize coded status
  const codedStatus = useMemo(() => {
    const status: Record<string, boolean> = {};
    answers.forEach((answer) => {
      const key = `${answer.participantId}-${answer.questionId}`;
      status[key] = answer.highlights.length > 0;
    });
    return status;
  }, [answers]);

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  };

  const handleParticipantClick = (participantId: string, questionId: string) => {
    selectAnswer(participantId, questionId);
  };

  return (
    <div className="space-y-1">
      {questions.map((question) => {
        const isExpanded = expandedQuestions.has(question.id);
        const progress = question.totalParticipantsCount
          ? Math.round((question.codedCount! / question.totalParticipantsCount) * 100)
          : 0;

        return (
          <div key={question.id}>
            {/* Question Header */}
            <Button
              variant="ghost"
              className="w-full justify-start px-2 h-auto py-2 font-normal"
              onClick={() => toggleQuestion(question.id)}
            >
              <div className="flex items-start w-full">
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4 mr-1.5 shrink-0 mt-0.5" />
                ) : (
                  <ChevronRight className="h-4 w-4 mr-1.5 shrink-0 mt-0.5" />
                )}
                <ClipboardList className="h-4 w-4 mr-2 shrink-0 text-muted-foreground mt-0.5" />
                <div className="flex-1 text-left">
                  <div className="text-sm line-clamp-2">
                    Q{question.order}: {question.text}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {question.codedCount}/{question.totalParticipantsCount} coded
                  </div>
                </div>
              </div>
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

            {/* Participants List */}
            {isExpanded && (
              <div className="ml-4 space-y-0.5 mb-2">
                {participants.map((participant) => {
                  const isSelected =
                    navigationState.selectedQuestionId === question.id &&
                    navigationState.selectedParticipantId === participant.id;
                  const isCoded = codedStatus[`${participant.id}-${question.id}`] || false;

                  return (
                    <Button
                      key={participant.id}
                      variant="ghost"
                      className={cn(
                        'w-full justify-start px-2 h-8 font-normal text-xs',
                        isSelected && 'bg-accent'
                      )}
                      onClick={() => handleParticipantClick(participant.id, question.id)}
                    >
                      {isCoded ? (
                        <CheckCircle2 className="h-3.5 w-3.5 mr-2 shrink-0 text-green-600" />
                      ) : (
                        <Circle className="h-3.5 w-3.5 mr-2 shrink-0 text-muted-foreground" />
                      )}
                      <User className="h-3.5 w-3.5 mr-2 shrink-0 text-muted-foreground" />
                      <span className="truncate text-left">{participant.name}</span>
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
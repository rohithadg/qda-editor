'use client';

import AnswerEditor from '@/components/editor/AnswerEditor';
import { useProjectStore } from '@/lib/stores/project-store';

export default function CenterPanel() {
  const navigationState = useProjectStore((state) => state.navigationState);
  const participants = useProjectStore((state) => state.participants);
  const questions = useProjectStore((state) => state.questions);

  const selectedParticipant = participants.find(
    (p) => p.id === navigationState.selectedParticipantId
  );
  const selectedQuestion = questions.find(
    (q) => q.id === navigationState.selectedQuestionId
  );

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Context Header */}
      {selectedParticipant && selectedQuestion && (
        <div className="border-b p-4 space-y-1">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{selectedParticipant.name}</span>
            <span>→</span>
            <span>Question {selectedQuestion.order}</span>
          </div>
          <p className="text-sm font-medium">{selectedQuestion.text}</p>
        </div>
      )}

      {/* Editor */}
      <div className="flex-1 overflow-hidden">
        <AnswerEditor />
      </div>
    </div>
  );
}
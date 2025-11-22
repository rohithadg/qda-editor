'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useProjectStore } from '@/lib/stores/project-store';
import ViewToggle from '@/components/navigation/ViewToggle';
import ParticipantView from '@/components/navigation/ParticipantView';
import QuestionView from '@/components/navigation/QuestionView';

export default function LeftPanel() {
  const viewMode = useProjectStore((state) => state.navigationState.viewMode);

  return (
    <div className="h-full flex flex-col bg-background">
      <div className="p-3 space-y-3">
        <h2 className="font-semibold text-sm">Navigation</h2>
        <ViewToggle />
      </div>
      
      <Separator />
      
      <ScrollArea className="flex-1">
        <div className="p-2">
          {viewMode === 'by-participant' ? <ParticipantView /> : <QuestionView />}
        </div>
      </ScrollArea>
    </div>
  );
}
'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, ClipboardList } from 'lucide-react';
import { useProjectStore } from '@/lib/stores/project-store';

export default function ViewToggle() {
  const viewMode = useProjectStore((state) => state.navigationState.viewMode);
  const setViewMode = useProjectStore((state) => state.setViewMode);

  return (
    <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as 'by-participant' | 'by-question')}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="by-participant" className="text-xs">
          <Users className="h-3.5 w-3.5 mr-1.5" />
          By Participant
        </TabsTrigger>
        <TabsTrigger value="by-question" className="text-xs">
          <ClipboardList className="h-3.5 w-3.5 mr-1.5" />
          By Question
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
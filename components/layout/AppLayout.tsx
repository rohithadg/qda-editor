'use client';

import { useState, useEffect, useRef } from 'react';
import { useProjectStore } from '@/lib/stores/project-store';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Code2 } from 'lucide-react';
import TopBar from './TopBar';
import LeftPanel from './LeftPanel';
import CenterPanel from './CenterPanel';
import RightPanel from './RightPanel';

interface AppLayoutProps {
  projectId: string;
}

export default function AppLayout({ projectId }: AppLayoutProps) {

  const initializeMockData = useProjectStore((state) => state.initializeMockData);

  const [leftSheetOpen, setLeftSheetOpen] = useState(false);
  const [rightSheetOpen, setRightSheetOpen] = useState(false);

  // Initialize mock data only once
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      useProjectStore.getState().initializeMockData();
    }
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      {/* Top Bar */}
      <TopBar projectId={projectId} />

      {/* Mobile Layout - Only visible on small screens */}
      <div className="flex md:hidden flex-1 flex-col min-h-0">
        {/* Mobile Header with Sheet Triggers */}
        <div className="flex items-center justify-between p-2 border-b shrink-0">
          <Sheet open={leftSheetOpen} onOpenChange={setLeftSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">
                <Menu className="h-4 w-4 mr-2" />
                Navigation
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-0">
              <LeftPanel />
            </SheetContent>
          </Sheet>

          <Sheet open={rightSheetOpen} onOpenChange={setRightSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">
                <Code2 className="h-4 w-4 mr-2" />
                Codes
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0">
              <RightPanel />
            </SheetContent>
          </Sheet>
        </div>

        {/* Mobile Center Panel Only */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          <CenterPanel />
        </div>
      </div>

      {/* Desktop Layout - Only visible on medium+ screens */}
      <div className="hidden md:flex flex-1 min-h-0">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
            <LeftPanel />
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={55} minSize={30}>
            <CenterPanel />
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={25} minSize={20} maxSize={35}>
            <RightPanel />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
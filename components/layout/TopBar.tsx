'use client';

import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

interface TopBarProps {
  projectId: string;
}

export default function TopBar({ projectId }: TopBarProps) {
  return (
    <header className="h-14 border-b flex items-center justify-between px-4 bg-background">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold">Qualitative Analysis</h1>
        <span className="text-sm text-muted-foreground">Project: {projectId}</span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs text-muted-foreground">All changes saved</span>
        <Save className="h-4 w-4 text-muted-foreground" />
        <ThemeToggle />
      </div>
    </header>
  );
}
// Core entities

export interface Participant {
  id: string;
  name: string;
  codedCount?: number; // Number of answers coded
  totalAnswersCount?: number; // Total answers
}

export interface Question {
  id: string;
  text: string;
  order: number;
  codedCount?: number; // Number of participants coded
  totalParticipantsCount?: number; // Total participants
}

export interface Answer {
  id: string;
  participantId: string;
  questionId: string;
  text: string; // Raw text or TipTap JSON (stringified)
  highlights: Highlight[];
  lastModified: string;
}

export interface Highlight {
  id: string;
  start: number; // Character position
  end: number;
  codeId: string;
  text: string; // Excerpt text
  createdAt: string;
}

export interface Code {
  id: string;
  name: string;
  color: string; // Hex color
  description?: string;
  category?: string;
  usageCount: number; // Number of highlights using this code
  createdAt: string;
}

// UI state

export type ViewMode = 'by-participant' | 'by-question';

export interface NavigationState {
  viewMode: ViewMode;
  selectedParticipantId: string | null;
  selectedQuestionId: string | null;
}

// Helper types

export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  codedCount?: number;
  totalCount?: number;
  isExpanded?: boolean;
}
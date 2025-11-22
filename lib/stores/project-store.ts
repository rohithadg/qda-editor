import { create } from 'zustand';
import { Participant, Question, Answer, Code, Highlight, ViewMode, NavigationState } from '@/types';
import { mockParticipants, mockQuestions, mockAnswers, mockCodes } from '@/lib/mock-data';

interface ProjectStore {
  // Data
  participants: Participant[];
  questions: Question[];
  answers: Answer[];
  codes: Code[];
  
  // UI State
  navigationState: NavigationState;
  
  // Computed getters
  getSelectedAnswer: () => Answer | null;
  getAnswersByQuestion: (questionId: string) => Answer[];
  getAnswersByParticipant: (participantId: string) => Answer[];
  
  // Navigation actions
  setViewMode: (mode: ViewMode) => void;
  selectParticipant: (participantId: string) => void;
  selectQuestion: (questionId: string) => void;
  selectAnswer: (participantId: string, questionId: string) => void;
  
  // Data actions
  updateAnswerText: (answerId: string, text: string) => void;
  addHighlight: (answerId: string, highlight: Highlight) => void;
  removeHighlight: (answerId: string, highlightId: string) => void;
  addCode: (code: Code) => void;
  updateCode: (codeId: string, updates: Partial<Code>) => void;
  deleteCode: (codeId: string) => void;
  
  // Initialize with mock data
  initializeMockData: () => void;
}

export const useProjectStore = create<ProjectStore>((set, get) => ({
  // Initial state
  participants: [],
  questions: [],
  answers: [],
  codes: [],
  
  navigationState: {
    viewMode: 'by-participant',
    selectedParticipantId: null,
    selectedQuestionId: null,
  },
  
  // Computed getters
  getSelectedAnswer: () => {
    const state = get();
    const { selectedParticipantId, selectedQuestionId } = state.navigationState;
    
    if (!selectedParticipantId || !selectedQuestionId) return null;
    
    return state.answers.find(
      (a) => a.participantId === selectedParticipantId && a.questionId === selectedQuestionId
    ) || null;
  },
  
  getAnswersByQuestion: (questionId: string) => {
    return get().answers.filter((a) => a.questionId === questionId);
  },
  
  getAnswersByParticipant: (participantId: string) => {
    return get().answers.filter((a) => a.participantId === participantId);
  },
  
  // Navigation actions
  setViewMode: (mode: ViewMode) => {
    set((state) => ({
      navigationState: {
        ...state.navigationState,
        viewMode: mode,
      },
    }));
  },
  
  selectParticipant: (participantId: string) => {
    set((state) => ({
      navigationState: {
        ...state.navigationState,
        selectedParticipantId: participantId,
      },
    }));
  },
  
  selectQuestion: (questionId: string) => {
    set((state) => ({
      navigationState: {
        ...state.navigationState,
        selectedQuestionId: questionId,
      },
    }));
  },
  
  selectAnswer: (participantId: string, questionId: string) => {
    set((state) => ({
      navigationState: {
        ...state.navigationState,
        selectedParticipantId: participantId,
        selectedQuestionId: questionId,
      },
    }));
  },
  
  // Data actions
  updateAnswerText: (answerId: string, text: string) => {
    set((state) => ({
      answers: state.answers.map((answer) =>
        answer.id === answerId
          ? { ...answer, text, lastModified: new Date().toISOString() }
          : answer
      ),
    }));
  },
  
  addHighlight: (answerId: string, highlight: Highlight) => {
    set((state) => ({
      answers: state.answers.map((answer) =>
        answer.id === answerId
          ? {
              ...answer,
              highlights: [...answer.highlights, highlight],
              lastModified: new Date().toISOString(),
            }
          : answer
      ),
      codes: state.codes.map((code) =>
        code.id === highlight.codeId
          ? { ...code, usageCount: code.usageCount + 1 }
          : code
      ),
    }));
  },
  
  removeHighlight: (answerId: string, highlightId: string) => {
    set((state) => {
      const answer = state.answers.find((a) => a.id === answerId);
      const highlight = answer?.highlights.find((h) => h.id === highlightId);
      
      return {
        answers: state.answers.map((a) =>
          a.id === answerId
            ? {
                ...a,
                highlights: a.highlights.filter((h) => h.id !== highlightId),
                lastModified: new Date().toISOString(),
              }
            : a
        ),
        codes: highlight
          ? state.codes.map((code) =>
              code.id === highlight.codeId
                ? { ...code, usageCount: Math.max(0, code.usageCount - 1) }
                : code
            )
          : state.codes,
      };
    });
  },
  
  addCode: (code: Code) => {
    set((state) => ({
      codes: [...state.codes, code],
    }));
  },
  
  updateCode: (codeId: string, updates: Partial<Code>) => {
    set((state) => ({
      codes: state.codes.map((code) =>
        code.id === codeId ? { ...code, ...updates } : code
      ),
    }));
  },
  
  deleteCode: (codeId: string) => {
    set((state) => ({
      codes: state.codes.filter((code) => code.id !== codeId),
      // Also remove all highlights using this code
      answers: state.answers.map((answer) => ({
        ...answer,
        highlights: answer.highlights.filter((h) => h.codeId !== codeId),
      })),
    }));
  },
  
  // Initialize mock data
  initializeMockData: () => {
    set({
      participants: mockParticipants,
      questions: mockQuestions,
      answers: mockAnswers,
      codes: mockCodes,
      navigationState: {
        viewMode: 'by-participant',
        selectedParticipantId: mockParticipants[0].id,
        selectedQuestionId: mockQuestions[0].id,
      },
    });
  },
}));
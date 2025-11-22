# Qualitative Data Analysis Tool

A modern web-based application for qualitative researchers to perform thematic analysis on interview transcripts.

## 🎯 Overview

This tool helps researchers:
- Organize interview participants and questions
- Code and highlight text excerpts from transcripts
- Build themes from codes
- Analyze patterns across participants

## 🏗️ Architecture

- **Frontend**: Next.js 15 (App Router), React, TypeScript, TailwindCSS
- **UI Components**: shadcn/ui
- **Editor**: TipTap (ProseMirror-based)
- **State Management**: Zustand
- **Backend**: AWS API Gateway + Lambda + DynamoDB
- **Hosting**: AWS S3 (static site)
- **Theme**: Light/Dark mode support

## 📁 Project Structure
```
├── app/                      # Next.js app router
│   ├── layout.tsx           # Root layout with theme provider
│   └── project/[id]/        # Main app route
├── components/
│   ├── layout/              # App layout components
│   ├── navigation/          # Left panel navigation
│   ├── editor/              # TipTap editor components
│   ├── codes/               # Code management UI
│   ├── ui/                  # shadcn/ui components
│   ├── theme-provider.tsx   # Theme context
│   └── theme-toggle.tsx     # Dark/light mode toggle
├── lib/
│   ├── stores/              # Zustand state management
│   ├── hooks/               # Custom React hooks
│   └── utils.ts             # Utility functions
├── types/
│   └── index.ts             # TypeScript type definitions
└── docs/                    # Documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd qda-editor

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000/project/test-123`

## 📖 Documentation

- [Features Overview](./docs/FEATURES.md)
- [User Workflows](./docs/WORKFLOWS.md)
- [Technical Architecture](./docs/ARCHITECTURE.md)
- [Component Guide](./docs/COMPONENTS.md)
- [State Management](./docs/STATE.md)
- [Backend API](./docs/API.md)

## 🎨 Key Features

### Responsive Layout
- **Desktop**: 3-panel resizable layout (Navigation | Editor | Codes)
- **Mobile**: Single panel with slide-out navigation and codes

### Dual Navigation Views
- **By Participant**: Browse all questions for each participant
- **By Question**: Compare responses across all participants

### Rich Text Editing
- TipTap editor with highlighting capabilities
- Multi-color highlighting for different codes
- Bubble menu for quick coding

### Code Management
- Create, edit, and organize codes
- Color-coded visual system
- Support for 100s-1000s of codes
- Hierarchical categorization

### Auto-save
- All changes automatically saved
- Debounced to prevent excessive API calls
- Visual feedback for save status

## 🔄 Development Status

- [x] Project setup
- [x] Responsive layout
- [x] Theme switching
- [ ] TypeScript types & mock data
- [ ] State management (Zustand)
- [ ] Left panel navigation
- [ ] TipTap editor integration
- [ ] Text highlighting functionality
- [ ] Code management UI
- [ ] Cross-participant view
- [ ] Backend integration
- [ ] Auto-save implementation

## 📝 License

[Your License]

## 👥 Contributors

[Your Team]
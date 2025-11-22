# Features Overview

## Core Functionality

### 1. Interview Data Organization

**Participants**
- Store participant information and metadata
- Track coding progress per participant
- View complete interview narratives

**Questions**
- Organize interview questions in order
- View responses across participants
- Track coding completion per question

**Answers**
- Transcribed interview responses (text)
- Rich text with highlights and codes
- Auto-saved changes

---

### 2. Text Editor

**Input**
- Paste or load interview transcripts
- Plain text with basic formatting support
- Fast loading for large documents

**Selection & Highlighting**
- Select any portion of text
- Apply color-coded highlights
- Multiple highlights on same text (overlapping codes)

**Bubble Menu**
- Appears on text selection
- Quick access to:
  - Existing codes (searchable)
  - Create new code
  - Color picker
  - Remove highlight

---

### 3. Coding System

**Codes**
- Descriptive labels for text excerpts
- Color-coded for visual distinction
- Categorizable into groups
- Support for 100s-1000s of codes

**Code Operations**
- Create: Quick creation from bubble menu
- Edit: Rename, change color, add description
- Organize: Group into categories
- Merge: Combine similar codes
- Delete: Remove with excerpt cleanup

**Excerpts**
- Automatically created when text is highlighted
- Store:
  - Text content
  - Start/end positions
  - Assigned codes
  - Participant & question reference
  - Timestamp

---

### 4. Navigation System

**View Modes**

**By Participant** (Participant-centric analysis)
```
├─ 👤 Participant 1 (8/10 coded)
│  ├─ Q1: Background experience ✓
│  ├─ Q2: Main challenges ✓
│  └─ Q3: Solutions tried (3 codes)
```
- Deep dive into individual narratives
- Understand context across one person's responses
- Track coding progress per participant

**By Question** (Cross-participant comparison)
```
├─ 📋 Q1: Background experience (12/15 coded)
│  ├─ Participant 1 ✓
│  ├─ Participant 2 ✓
│  └─ Participant 3 (2 codes)
```
- Compare responses to same question
- Identify patterns across participants
- Build themes from common codes

---

### 5. Theme Building

**Future Feature** (Separate mode after coding)

- Group related codes into themes
- Visual theme canvas
- Drag-and-drop code organization
- Theme definitions and memos
- Excerpt review per theme

---

### 6. Auto-save System

**Automatic Persistence**
- No manual save button needed
- Changes saved on:
  - Text edits (debounced 800ms)
  - Code creation/edits
  - Highlight application
  - Selection changes

**Visual Feedback**
- "Saving..." indicator during save
- "All changes saved" with timestamp
- Error warnings if save fails
- Retry mechanism

---

### 7. Responsive Design

**Desktop (≥768px)**
- 3-panel resizable layout
- Navigation | Editor | Codes
- Drag to resize panels
- Keyboard shortcuts

**Mobile (<768px)**
- Single editor panel
- Slide-out navigation (left)
- Slide-out codes (right)
- Touch-optimized controls

---

### 8. User Experience Features

**Visual Feedback**
- Color-coded highlights in text
- Code usage counts
- Coding progress indicators
- Active selection state

**Quick Actions**
- Keyboard shortcuts
- Context menus
- Drag & drop
- Search & filter codes

**Performance**
- Fast text rendering
- Debounced saves
- Optimistic UI updates
- Lazy loading for large datasets

---

## Planned Features

### Phase 2
- [ ] AI-assisted coding suggestions
- [ ] Inter-coder reliability tools
- [ ] Export to multiple formats (PDF, Excel, NVivo)
- [ ] Collaboration features
- [ ] Memo/note-taking system

### Phase 3
- [ ] Advanced search & filtering
- [ ] Data visualization
- [ ] Query builder
- [ ] Matrix coding
- [ ] Sentiment analysis integration
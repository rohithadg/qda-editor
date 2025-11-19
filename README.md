# qda-editor

# **Qualitative Analysis Editor – High-Level Requirements**

## **1. Editor Input**
- Users will paste interview transcripts or long-form text into the editor.
- Editor must support plain text and basic formatting.
- Must load fast and behave like a simple text editor.

---

## **2. Text Selection Workflow**
When the user selects any part of the text:

1. A **Bubble Menu** should appear.
2. Bubble Menu must show actions related to qualitative coding.

---

## **3. Bubble Menu Features**
### **3.1 Highlight and Coding**
- Option to highlight selected text using different colors.
# qda-editor

Client-side React + Next.js editor for qualitative data analysis with text highlighting, coding, and excerpt management.

## Features

- ✨ **Rich Text Editor** — powered by Tiptap/ProseMirror
- 🎨 **Text Highlighting** — multiple colors for marking important sections
- 🏷️ **Codes & Tags** — create and apply codes to excerpts
- 📝 **Excerpt Management** — automatically track highlighted sections with metadata
- 💾 **Autosave** — saves to backend every 5 seconds + on blur
- 🔄 **Undo/Redo** — built-in editor history (100-level depth)
- 📱 **Responsive** — clean sidebar layout with excerpt list

## Tech Stack

- **React 19** + **Next.js 15** (latest versions)
- **TypeScript** (strict mode)
- **Tiptap** (rich text editor)
- **Axios** (API client)
- **CSS Modules** (styling, no SSR)

## Setup

Install dependencies:

```bash
npm install
```

## Development

Start the dev server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Environment Variables

Create a `.env.local` file (optional, defaults to `http://localhost:3000/api`):

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Build & Deploy

Build for production:

```bash
npm run build
npm start
```

## Architecture Notes

- **Client-side only** — no server-side rendering (SSR disabled in `next.config.ts`)
- **API-driven** — all data persisted to backend via `lib/api.ts`
- **Component structure**:
  - `app/page.tsx` — entry point
  - `components/EditorPage.tsx` — main editor + state management
  - `components/BubbleMenu.tsx` — context menu for highlighting/coding
  - `components/CodePanel.tsx` — modal for code management
- **State management** — React hooks (no Redux/Zustand needed for MVP)
- **Autosave** — 5-second interval + blur trigger

## API Integration

The editor expects these backend endpoints:

### GET `/codes`
Fetch all available codes
**Response**: `Code[]`

### POST `/codes`
Save/update codes
**Body**: `{ codes: Code[] }`

### GET `/documents/:id`
Fetch document with content and metadata
**Response**: `Document`

### POST `/documents/:id`
Save document with content, codes, excerpts
**Body**: `Document`

See `lib/api.ts` for implementation.

## Future Enhancements

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] User authentication
- [ ] Collaborative editing (WebSockets)
- [ ] Export to PDF/CSV
- [ ] Advanced search/filtering
- [ ] Revision history UI

- Ability to tag an excerpt (text segment) and save it.

### **3.2 Codes**
- Show a list of **existing codes** fetched from backend.
- Allow user to create a **new code immediately** from the bubble menu.
- New code must be saved to backend instantly.

### **3.3 Excerpts**
- When text is highlighted or coded, an excerpt entry must be created.
- Excerpts should store:
  - text content  
  - start position & end position  
  - assigned codes  
  - timestamp  

---

## **4. Backend Integration**
### **4.1 Codes**
- Fetch existing codes from `/codes` endpoint.
- Save newly created codes to backend (`POST /codes`).

### **4.2 Documents**
- Editor content (Tiptap JSON) must be saved to backend:
  - on autosave cycle (every X seconds)
  - on blur
  - or on content change threshold
- Backend stores:
  - Full editor JSON  
  - Codes  
  - Excerpts  
  - Metadata  
  - Revision history  

---

## **5. Autosaving**
- All changes must be automatically saved.
- No manual save button.
- Autosave runs on:
  - interval timer  
  - selection change  
  - code change  
  - focus/blur  

---

## **6. Undo / Redo + Revision History**
- Editor must support basic undo/redo (built-in Tiptap history).
- System must also keep **long-term revision history**:
  - periodic snapshots  
  - or revisions saved on major changes  
- Users should be able to restore older versions eventually.

---

## **7. Additional User Experience Expectations**
- Editor must stay simple and clean.
- Focus on selecting text → applying codes quickly.
- Workflow should feel similar to:
  - NVivo  
  - ATLAS.ti  
  - Notion highlight tools  
- Must work smoothly with large documents.

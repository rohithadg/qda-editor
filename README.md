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
- Ability to apply one or more “codes” to the selection.
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

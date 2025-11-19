'use client';

import { useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import styles from './EditorPage.module.css';

export default function EditorPage() {
  const [isMounted, setIsMounted] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit, Highlight.configure({ multicolor: true })],
    content: '<p>Paste your interview transcript here...</p>',
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: styles.editor,
      },
    },
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !editor) {
    return <div>Loading editor...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>QDA Editor</h1>
      </div>
      <div className={styles.editorWrapper}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

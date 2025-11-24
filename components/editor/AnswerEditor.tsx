'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import { useProjectStore } from '@/lib/stores/project-store';
import HighlightBubbleMenu from './HighlightBubbleMenu'
import { useEffect } from 'react';

export default function AnswerEditor() {
    const selectedAnswer = useProjectStore((state) => state.getSelectedAnswer());
    const updateAnswerContent = useProjectStore((state) => state.updateAnswerContent);

    const editor = useEditor({
        extensions: [
            StarterKit,
            Highlight.configure({
                multicolor: true,
            }),
        ],
        immediatelyRender: false,
        content: selectedAnswer?.content || '<p>Select a question to start coding...</p>',
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-xl focus:outline-none max-w-none',
            },
        },
        onUpdate: ({ editor }) => {
            if (selectedAnswer) {
                const html = editor.getHTML();
                updateAnswerContent(selectedAnswer.id, html);
            }
        },
    });

    // Update editor content when selection changes
    useEffect(() => {
        if (editor && selectedAnswer) {
            editor.commands.setContent(selectedAnswer.content);
        }
    }, [selectedAnswer?.id, editor]);

    if (!selectedAnswer) {
        return (
            <div className="flex items-center justify-center h-full text-muted-foreground">
                <p>Select a participant and question to view the answer</p>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col">
            {/* Editor wrapper */}
            <div className="flex-1 overflow-y-auto p-6">
                { editor && <HighlightBubbleMenu editor={editor} /> }
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}
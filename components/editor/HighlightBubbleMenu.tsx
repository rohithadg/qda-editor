'use client';

import { Editor } from '@tiptap/react';
import { BubbleMenu } from '@tiptap/react/menus'

interface HighlightBubbleMenuProps {
  editor: Editor;
}

// const COLORS = [
//   { name: 'Red', value: '#ef4444' },
//   { name: 'Orange', value: '#f97316' },
//   { name: 'Yellow', value: '#eab308' },
//   { name: 'Green', value: '#22c55e' },
//   { name: 'Cyan', value: '#06b6d4' },
//   { name: 'Blue', value: '#3b82f6' },
//   { name: 'Purple', value: '#8b5cf6' },
//   { name: 'Pink', value: '#ec4899' },
// ];

const COLORS = [
  { name: 'Red', value: '#f87171' },     // red-400
  { name: 'Orange', value: '#fb923c' },  // orange-400
  { name: 'Yellow', value: '#facc15' },  // yellow-400
  { name: 'Green', value: '#4ade80' },   // green-400
  { name: 'Cyan', value: '#22d3ee' },    // cyan-400
  { name: 'Blue', value: '#60a5fa' },    // blue-400
  { name: 'Purple', value: '#a78bfa' },  // purple-400
  { name: 'Pink', value: '#f472b6' },    // pink-400
];

// const COLORS = [
//   { name: 'Red', value: '#ef4444' },     // red-500
//   { name: 'Orange', value: '#f97316' },  // orange-500
//   { name: 'Yellow', value: '#eab308' },  // yellow-500
//   { name: 'Green', value: '#22c55e' },   // green-500
//   { name: 'Cyan', value: '#06b6d4' },    // cyan-500
//   { name: 'Blue', value: '#3b82f6' },    // blue-500
//   { name: 'Purple', value: '#8b5cf6' },  // purple-500
//   { name: 'Pink', value: '#ec4899' },    // pink-500
// ];



export default function HighlightBubbleMenu({ editor }: HighlightBubbleMenuProps) {
  const handleColorClick = (color: string) => {
    editor.chain().focus().setHighlight({ color }).run();
  };

  return (
    <BubbleMenu
      editor={editor}
    //   tippyOptions={{ duration: 100 }}
      className="flex items-center gap-1 p-2 bg-background border rounded-lg shadow-lg"
    >
      {COLORS.map((color) => (
        <button
          key={color.value}
          onClick={() => handleColorClick(color.value)}
          className="w-6 h-6 rounded border-2 border-border hover:border-foreground transition-colors"
          style={{ backgroundColor: color.value }}
          title={color.name}
        />
      ))}
    </BubbleMenu>
  );
}
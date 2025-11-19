'use client';

import { useCallback, useRef, useEffect } from 'react';
import styles from './BubbleMenu.module.css';

interface BubbleMenuProps {
  selectedText: string;
  codes: any[];
  onHighlight: (color: string) => void;
  onApplyCode: (codeId: string) => void;
  onShowCodePanel: () => void;
}

export default function BubbleMenu({
  selectedText,
  codes,
  onHighlight,
  onApplyCode,
  onShowCodePanel,
}: BubbleMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    menuRef.current.style.top = `${rect.top - 60}px`;
    menuRef.current.style.left = `${rect.left + rect.width / 2 - 100}px`;
  }, [selectedText]);

  return (
    <div ref={menuRef} className={styles.menu}>
      <div className={styles.section}>
        <span className={styles.label}>Highlight:</span>
        <div className={styles.colors}>
          {['#ffff00', '#ffcccc', '#ccffcc', '#ccccff'].map((color) => (
            <button
              key={color}
              className={styles.colorBtn}
              style={{ backgroundColor: color }}
              onClick={() => onHighlight(color)}
              title={`Highlight with ${color}`}
            />
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <span className={styles.label}>Codes:</span>
        <div className={styles.codesList}>
          {codes.slice(0, 3).map((code) => (
            <button
              key={code.id}
              className={styles.codeBtn}
              onClick={() => onApplyCode(code.id)}
            >
              {code.name}
            </button>
          ))}
          <button className={styles.addCodeBtn} onClick={onShowCodePanel}>
            + New
          </button>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import styles from './CodePanel.module.css';

interface CodePanelProps {
  codes: any[];
  onCreateCode: (name: string, color: string) => void;
  onClose: () => void;
}

export default function CodePanel({ codes, onCreateCode, onClose }: CodePanelProps) {
  const [codeName, setCodeName] = useState('');
  const [codeColor, setCodeColor] = useState('#ffff00');

  const handleCreate = () => {
    if (codeName.trim()) {
      onCreateCode(codeName, codeColor);
      setCodeName('');
      setCodeColor('#ffff00');
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Manage Codes</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        <div className={styles.createSection}>
          <h3>Create New Code</h3>
          <div className={styles.formGroup}>
            <label htmlFor="codeName">Code Name:</label>
            <input
              id="codeName"
              type="text"
              value={codeName}
              onChange={(e) => setCodeName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleCreate()}
              placeholder="e.g., Theme, Participant, Emotion"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="codeColor">Color:</label>
            <div className={styles.colorPicker}>
              {['#ffff00', '#ffcccc', '#ccffcc', '#ccccff', '#ffcc99', '#ccffff'].map(
                (color) => (
                  <button
                    key={color}
                    className={`${styles.colorOption} ${codeColor === color ? styles.active : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setCodeColor(color)}
                  />
                ),
              )}
            </div>
          </div>

          <button className={styles.createBtn} onClick={handleCreate}>
            Create Code
          </button>
        </div>

        <div className={styles.existingSection}>
          <h3>Existing Codes ({codes.length})</h3>
          <div className={styles.codesList}>
            {codes.map((code) => (
              <div key={code.id} className={styles.codeItem}>
                <div
                  className={styles.colorDot}
                  style={{ backgroundColor: code.color }}
                />
                <span>{code.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

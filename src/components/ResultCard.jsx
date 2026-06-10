import React, { useState } from 'react';

export default function ResultCard({
  title,
  promptText,
  copyLabel,
  copiedLabel,
  isVisible,
  resultRef,
  onCopySuccess
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!promptText) return;
    navigator.clipboard.writeText(promptText)
      .then(() => {
        setCopied(true);
        if (onCopySuccess) {
          onCopySuccess();
        }
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <section 
      ref={resultRef}
      className={`result-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="result-card">
        <div className="result-header">
          <h4 className="result-title">
            <span>⚡</span> {title}
          </h4>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={handleCopy}
            style={{ width: 'auto', padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
          >
            {copied ? '✓ ' + copiedLabel : copyLabel}
          </button>
        </div>
        <textarea
          className="prompt-textarea"
          value={promptText}
          readOnly
          placeholder="..."
        />
      </div>
    </section>
  );
}

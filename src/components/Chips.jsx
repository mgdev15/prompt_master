import React from 'react';

/**
 * Chips — multi or single select chip group.
 *
 * `options` is an object like { key: "Display Label" }.
 * `selected` holds either an array of keys (isMulti=true)
 *   or a single key string (isMulti=false).
 * `onChange` receives the updated key array or single key.
 */
export default function Chips({ label, options, selected, onChange, isMulti = false }) {
  const handleClick = (key) => {
    if (isMulti) {
      const arr = Array.isArray(selected) ? selected : [];
      if (arr.includes(key)) {
        onChange(arr.filter((k) => k !== key));
      } else {
        onChange([...arr, key]);
      }
    } else {
      onChange(key);
    }
  };

  const isActive = (key) => {
    if (isMulti) {
      return Array.isArray(selected) && selected.includes(key);
    }
    return selected === key;
  };

  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <div className="chips-container">
        {Object.entries(options).map(([key, displayVal]) => (
          <button
            key={key}
            type="button"
            className={`chip ${isActive(key) ? 'active' : ''}`}
            onClick={() => handleClick(key)}
          >
            {isMulti && isActive(key) && <span style={{ marginRight: '2px' }}>✓</span>}
            {displayVal}
          </button>
        ))}
      </div>
    </div>
  );
}

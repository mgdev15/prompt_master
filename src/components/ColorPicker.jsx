import React from 'react';

const colorHexMap = {
  blue:      '#3498db',
  green:     '#27ae60',
  orange:    '#e67e22',
  pink:      '#e91e8c',
  purple:    '#9b59b6',
  darkgray:  '#555f6e',
  red:       '#e74c3c',
  lightgray: '#bdc3c7'
};

/**
 * ColorPicker — single selection from a palette of color circles.
 *
 * `options` = { key: "Display Label" }
 * `selected` = the currently selected key string
 * `onChange` = callback receiving the key string
 */
export default function ColorPicker({ label, options, selected, onChange }) {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <div className="color-picker">
        {Object.entries(options).map(([key, displayLabel]) => {
          const hex = colorHexMap[key] || '#bdc3c7';
          const isChecked = selected === key;

          return (
            <label key={key} className="color-option">
              <div className="color-circle-wrapper">
                <input
                  type="radio"
                  name="colorPalette"
                  value={key}
                  checked={isChecked}
                  onChange={() => onChange(key)}
                />
                <div
                  className="color-circle"
                  style={{ backgroundColor: hex }}
                />
              </div>
              <span className="color-label">{displayLabel}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

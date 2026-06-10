import React from 'react';

/**
 * InputField — text input or key-based select dropdown.
 *
 * For select dropdowns, `options` should be { key: "Display Label" }.
 * The select will store the key in formData, but show display labels.
 */
export default function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  isInvalid = false,
  options = null,
  selectPlaceholder = 'Select...'
}) {
  return (
    <div className="input-group">
      <label className="input-label" htmlFor={name}>
        <span>
          {label}
          {required && <span className="label-required"> *</span>}
        </span>
      </label>

      {options ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={isInvalid ? 'invalid' : ''}
        >
          <option value="">{selectPlaceholder}</option>
          {Object.entries(options).map(([key, displayLabel]) => (
            <option key={key} value={key}>
              {displayLabel}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={isInvalid ? 'invalid' : ''}
        />
      )}
    </div>
  );
}

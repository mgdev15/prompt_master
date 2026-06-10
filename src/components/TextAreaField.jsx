import React from 'react';

export default function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  isInvalid = false,
  rows = 3,
  helperText = null
}) {
  return (
    <div className="input-group">
      <label className="input-label" htmlFor={name}>
        <span>
          {label}
          {required && <span className="label-required">*</span>}
        </span>
        {helperText && <span className="label-helper">&mdash; {helperText}</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={isInvalid ? 'invalid' : ''}
      />
    </div>
  );
}

import React from 'react';

export default function StepCard({ stepNumber, title, description, children }) {
  const formattedNumber = String(stepNumber).padStart(2, '0');
  
  return (
    <div className="step-card">
      <div className="step-number">{formattedNumber}</div>
      <div className="step-header">
        <h3 className="step-title">
          <span>{stepNumber} &mdash;</span> {title}
        </h3>
        {description && <p className="step-desc">{description}</p>}
      </div>
      <div className="step-content">
        {children}
      </div>
    </div>
  );
}

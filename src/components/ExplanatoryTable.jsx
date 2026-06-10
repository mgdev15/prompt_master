import React from 'react';

export default function ExplanatoryTable({
  title,
  subtitleText,
  headerVar,
  headerDesc,
  variables
}) {
  return (
    <section className="info-section">
      <h3 className="info-title">{title}</h3>
      <p className="info-text">{subtitleText}</p>
      
      <div className="info-table-wrapper">
        <table className="info-table">
          <thead>
            <tr>
              <th>{headerVar}</th>
              <th>{headerDesc}</th>
            </tr>
          </thead>
          <tbody>
            {variables.map((v, index) => (
              <tr key={index}>
                <td>
                  <span className="var-tag">{v.name}</span>
                </td>
                <td>{v.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

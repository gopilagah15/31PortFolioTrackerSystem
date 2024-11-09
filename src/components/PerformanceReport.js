import React from 'react';

function PerformanceReport({ performance }) {
  return (
    <div>
      <h2>Performance Report</h2>
      <p>Overall Portfolio Performance: ${performance}</p>
    </div>
  );
}

export default PerformanceReport;

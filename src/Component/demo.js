import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/StepContainer.css';

const StepContainer = ({ currentPage }) => {
  const steps = [
    { number: 1, label: 'Step 1' },
    { number: 2, label: 'Step 2' },
    { number: 3, label: 'Step 3' },
    { number: 4, label: 'Step 4' },
    { number: 5, label: 'Step 5' },
    { number: 6, label: 'Step 6' },
  ];

  return (
    <div className="step-container">
      {steps.map((step) => (
        <div
          key={step.number}
          className={`step ${currentPage === step.number ? 'active' : ''}`}
        >
          <span className="step-number">{step.number}</span>
          <span className="step-label">{step.label}</span>
        </div>
      ))}
    </div>
  );
};

StepContainer.propTypes = {
  currentPage: PropTypes.number.isRequired,
};

export default StepContainer;

import React from 'react';
import '../Styles/StepContainer.css';

const StepContainer = ({ currentPage }) => {
  return (
    <div className="steps-container d-flex justify-content-between mx-auto">
      <div className="step">
        <div
          className={`step-container ${
            currentPage === 1 ? 'step-active' : currentPage >= 2 ? 'step-completed' : ''
          }`}
        >
          <label className="number">1</label>
          <div className={`dash ${currentPage >= 2 ? 'dash-completed' : ''}`}></div>
        </div>
        <label className="label">Category</label>
      </div>
      <div className="step">
        <div
          className={`step-container ${
            currentPage === 2 ? 'step-active' : currentPage >= 3 ? 'step-completed' : ''
          }`}
        >
          <label className="number">2</label>
          <div className={`dash ${currentPage >= 3 ? 'dash-completed' : ''}`}></div>
        </div>
        <label className="label">Basic info</label>
      </div>
      <div className="step">
        <div
          className={`step-container ${
            currentPage === 3 ? 'step-active' : currentPage >= 4 ? 'step-completed' : ''
          }`}
        >
          <label className="number">3</label>
          <div className={`dash ${currentPage >= 4 ? 'dash-completed' : ''}`}></div>
        </div>
        <label className="label">Legal Doc</label>
      </div>
      <div className="step">
        <div
          className={`step-container ${
            currentPage === 4 ? 'step-active' : currentPage >= 5 ? 'step-completed' : ''
          }`}
        >
          <label className="number">4</label>
          <div className={`dash ${currentPage >= 5 ? 'dash-completed' : ''}`}></div>
        </div>
        <label className="label">Location Details</label>
      </div>
      <div className="step">
        <div
          className={`step-container ${
            currentPage === 5 ? 'step-active' : currentPage >= 6 ? 'step-completed' : ''
          }`}
        >
          <label className="number">5</label>
          <div className={`dash ${currentPage >= 6 ? 'dash-completed' : ''}`}></div>
        </div>
        <label className="label">Bank Details</label>
      </div>
      <div className="step">
        <div
          className={`step-container ${
            currentPage === 6 ? 'step-active' : currentPage >= 7 ? 'step-completed' : ''
          }`}
        >
          <label className="number">6</label>
          <div className={`dash ${currentPage >= 7 ? 'dash-completed' : ''}`}></div>
        </div>
        <label className="label">E-sign</label>
      </div>
      <div className="step">
        <div className={`step-container ${currentPage === 7 ? 'step-active' : ''}`}>
          <label className="number">7</label>
        </div>
        <label className="label">Commission &amp; Onboarding</label>
      </div>
    </div>
  );
};

export default StepContainer;

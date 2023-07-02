import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { BsCircle } from 'react-icons/bs';
import '../Styles/Decline_form.css';

const DeclineForm = () => {
  const [isDeclined, setIsDeclined] = useState(false);
  const [showCard, setShowCard] = useState(false);

  function handleNextDecline() {
    setShowCard(true);
  }

  function handlePreviousPage() {
    setIsDeclined(true);
  }

  if (isDeclined) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Thank You for Declining!</h1>
            {/* Add any additional content or components */}
          </div>
        </div>
      </div>
    );
  }

  if (showCard) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <Card
              className="card_12378 text-center d-flex justify-content-center align-items-center cod"
              style={{
                border: '1px solid #DEE2E6',
                boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.12), 0px 20px 20px rgba(0, 0, 0, 0.08)',
                borderRadius: '8px',
              }}
            >
              <Card.Body>
                <Card.Title className="card_13 text-center mt-5">Reason for Decline</Card.Title>
                <Card.Text className="card_132 text-center mt-5">
                  <p className="">We are sorry to see you go! Please let us know why you have chosen to decline</p>
                  <p className="p13 d-flex align-items-center">
                    High commission rate <BsCircle className="icon-custom-color" />
                  </p>
                  <p className="p13 d-flex align-items-center">
                    High onboarding fees <BsCircle className="icon-custom-color" />
                  </p>
                  <p className="p14 d-flex align-items-center">
                    Others <BsCircle className="icon-custom-color_1" />
                  </p>
                  <p className="p16 text-start">
                    Please contact partnersupport@CareerManiaa.in for raising any concerns. You can also resume
                    onboarding later after entering Owner Mobile Number.
                  </p>
                </Card.Text>
                <button className="btn7_4">Submit</button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <Card
            className="card_12346 text-center d-flex justify-content-center align-items-center cod"
            style={{
              border: '1px solid #DEE2E6',
              boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.12), 0px 20px 20px rgba(0, 0, 0, 0.08)',
              borderRadius: '8px',
            }}
          >
            <Card.Body>
              <Card.Title className="card_1245 mt-4">Decline Commission and Onboarding</Card.Title>
              <Card.Text className="card_1254 mt-5">
                Are you sure you want to decline? Commission acceptance is mandatory for onboarding.
              </Card.Text>
              <div className="d-flex justify-content-center">
                <button type="button" className="btn7_1" onClick={handleNextDecline}>
                  Yes, Decline
                </button>
                <button type="button" className="btn7_2" onClick={handlePreviousPage}>
                  No, Go Back
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DeclineForm;

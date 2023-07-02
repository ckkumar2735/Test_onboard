import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import '../Styles/Comission_onbording.css';

import Comission_onbording_1 from './Comission_onbording_1';
import Decline_form from './Decline_form';

const Comission_onbording = () => {
  const [toggle, setToggle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [Accept, setAccept] = useState(false);
  const [Decline, setDecline] = useState(false);

  useEffect(() => {
    if (Accept === true) {
      setDecline(false);
      setToggle(!toggle);
      setShowContent(true);
    } else if (Decline === true) {
      setAccept(false);
      setToggle(toggle);
      setShowContent(true);
    }
  }, [Accept, Decline]);

  function Nextpage() {
    setToggle(!toggle);
    setShowContent(true);
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          {!showContent && (
            <Card className="card_123 text-center d-flex justify-content-center align-items-center cod">
              <Card.Body>
                <Card.Title className="card_124 mt-4">Commission & Onboarding Details</Card.Title>
                <Card.Text className="card_125 mt-5">
                  Please note 20% commission and Rs.0 onboarding fees will be applicable to your Class Bookings.
                  Please click 'Accept' to continue.
                </Card.Text>
                <div className="d-flex justify-content-center my-4">
                  {Accept ? (
                    <Button className="efg efgh bg-danger" onClick={() => setAccept(false)}>
                      Accept
                    </Button>
                  ) : (
                    <Button className="efg efgh bg-light" onClick={() => setAccept(true)}>
                      Accept
                    </Button>
                  )}
                  {Decline ? (
                    <Button className="efg bg-danger" onClick={() => setDecline(false)}>
                      Decline
                    </Button>
                  ) : (
                    <Button className="efg bg-light" onClick={() => setDecline(true)}>
                      Decline
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          )}

          {showContent && (toggle ? <Comission_onbording_1 /> : <Decline_form />)}
        </Col>
      </Row>
    </Container>
  );
};

export default Comission_onbording;

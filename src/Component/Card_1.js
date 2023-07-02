// Card.js
import React, { useState } from 'react';
import img2 from "../Images/tutor_logo.png";
import img3 from "../Images/classes.png";
import img4 from "../Images/colleges.png";
import img5 from "../Images/right_arrow.png";

import '../Styles/Card.css';

const Card = ({ handlePageChange }) => {
  const [button1Active, setButton1Active] = useState(true);
  const [button2Active, setButton2Active] = useState(true);
  const [button3Active, setButton3Active] = useState(true);

  const handleButtonClick = (buttonNumber) => {
    switch (buttonNumber) {
      case 1:
        handlePageChange(2); // Navigate to page 2
        break;
      case 2:
        handlePageChange(3); // Navigate to page 3
        break;
      case 3:
        handlePageChange(4); // Navigate to page 4
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-6'>
            {/* <div className={`btn1 ${button1Active ? '' : 'disabled'}`} >
              <img src={img2} alt="" className="img-fluid logo_1" />
              <p className='txt1'>CareerManiaa Partner</p><img src={img5} alt="" className="img-fluid logo_2_1" />
            </div> */}
            <div className={`btn1 mt-4 ${button2Active ? '' : 'disabled'}`} onClick={() => handleButtonClick(1)}>
              <img src={img3} alt="" className="img-fluid logo_1 " />
              <p className='txt1'>classroom</p> <img src={img5} alt="" className="img-fluid logo_2_1" />

            </div>
            {/* <div className={`btn1 my-4 ${button3Active ? '' : 'disabled'}`} >
              <img src={img4} alt="" className="img-fluid logo_1 " />
              <p className='txt1'>Colleges</p><img src={img5} alt="" className="img-fluid logo_2_1" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

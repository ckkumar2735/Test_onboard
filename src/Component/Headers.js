import React, { useState } from 'react';
import global from "../Images/Vector.png";
import img1 from "../Images/logo.png";
import '../Styles/Header.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';

import Stepper_steps from './Stepper_steps';
import LocationForm from './LocationForm ';
import Category from './Category';

import { Card } from '@mui/material';

const Headers = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className=' mt-2'>
            <div className='row'>
              <div className='header'>
                <img src={img1} alt="" className="img-fluid logo" />
                <div>
                  <Button
                    className="bg-danger"
                    style={{ color: "white" }}
                    endIcon={<ExpandMoreIcon />}
                    onClick={handleClick}
                  >
                    <LanguageIcon /> Language
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>English</MenuItem>
                    <MenuItem onClick={handleClose}>Spanish</MenuItem>
                    <MenuItem onClick={handleClose}>French</MenuItem>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headers;

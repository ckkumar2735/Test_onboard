import React, { useState } from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const LocationForm = ({ google }) => {
  const [formData, setFormData] = useState({
    address: '',
    postalCode: '',
    latitude: '',
    longitude: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  return (
    <Container maxWidth="md"  >
      <form >
        <Grid container spacing={2}  alignItems="center">
        <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <TextField
              label="Postal Code"
              name="postalCode"
            
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <TextField
              label="Latitude"
              name="latitude"
             
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <TextField
              label="Longitude"
              name="longitude"
             
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          
         
        </Grid>
      </form>
    </Container>
  );
};

export default LocationForm;
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Basic_Info = () => {
  const [formData, setFormData] = useState({
    city: '',
    classes_name: '',
    message: '',
    phone: '',
    address: '',
    country: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, such as sending it to a server
    console.log(formData);
  };

  return (
    <>
      <Container className=' basic_info_1' maxWidth="lg" >
      <div >
      <form onSubmit={handleSubmit}>
          <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
              <FormControl variant="outlined" fullWidth style={{ marginTop: '10px' }}>
                <InputLabel>City</InputLabel>
                <Select
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                >
                  <MenuItem value="Bangluru">Bangluru</MenuItem>
                  <MenuItem value="Kota">Kota</MenuItem>
                  <MenuItem value="Patna">Patna</MenuItem>
                  <MenuItem value="Kolkata">Kolkata</MenuItem>
                  <MenuItem value="Mumbai">Mumbai</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <FormControl variant="outlined" fullWidth>
              <TextField
                label="Classes Name"
                name="classes_name"
                value={formData.classes_name}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                fullWidth
              />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <FormControl variant="outlined" fullWidth>
              <TextField
                label="Enter Proprietor Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                fullWidth
              />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
              <FormControl variant="outlined" fullWidth >
                <InputLabel>Locality</InputLabel>
                <Select
                  label="Locality"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                >
                  <MenuItem value="NSP">NSP</MenuItem>
                  <MenuItem value="Greater Kailash">Greater Kailash</MenuItem>
                  <MenuItem value="Hauz Khas">Hauz Khas</MenuItem>
                  <MenuItem value="GTB Nagar">GTB Nagar</MenuItem>
                  <MenuItem value="Connaught Place">Connaught Place</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <FormControl variant="outlined" fullWidth>
              <TextField
                label="Years Of Establishment"
                name="message"
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                fullWidth
              />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <FormControl variant="outlined" fullWidth>
              <TextField
                label="Share Your What's app Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                fullWidth
              />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Preferred Language</InputLabel>
                <Select
                  label="Preferred Language"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <MenuItem value="punjabi">punjabi</MenuItem>
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="Bengali">Bengali</MenuItem>
                  <MenuItem value="Tamil">Tamil</MenuItem>
                  <MenuItem value="Telgu">Telgu</MenuItem>
                  <MenuItem value="Kannad">Kannad</MenuItem>
                  <MenuItem value="Oriya">Oriya</MenuItem>

                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Preferred Class Type</InputLabel>
                <Select
                  label="Preferred Class Type"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <MenuItem value="Offline">Offline</MenuItem>
                  <MenuItem value="Online">Online</MenuItem>
                </Select>
              </FormControl>
            </Grid>

          </Grid>
        </form>
      </div>
      
      </Container>
    </>
  );
};

export default Basic_Info;

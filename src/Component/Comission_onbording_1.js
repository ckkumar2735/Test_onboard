import React, { useState } from 'react';
import {
  FormControl,
  TextField,
  Button,
  Container,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  Typography,
  Modal,
} from '@mui/material';
import '../Styles/Comission_onbording_1.css';

const Commission_onboarding_1 = () => {
  const [formData, setFormData] = useState({
    expertiseType: '',
    addExpertise: '',
    ownerName: '',
    socialAccountType: '',
    socialAccountUrl: '',
    ownerEmail: '',
    numBatches: '',
  });

  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const {
      expertiseType,
      addExpertise,
      ownerName,
      socialAccountType,
      socialAccountUrl,
      ownerEmail,
      numBatches,
    } = formData;

    if (
      expertiseType.trim() === '' ||
      addExpertise.trim() === '' ||
      ownerName.trim() === '' ||
      socialAccountType.trim() === '' ||
      socialAccountUrl.trim() === '' ||
      ownerEmail.trim() === '' ||
      numBatches.trim() === ''
    ) {
      setErrorMessage('Please fill in all fields.');
      setOpenModal(true);
    } else {
      // Handle form submission
      console.log(formData);
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setErrorMessage('');
  };

  return (
    <Container maxWidth="md">
      <div>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={12} md={6}>
              <FormControl variant="outlined" fullWidth style={{ marginTop: '10px' }}>
                <InputLabel>Type of Expertise</InputLabel>
                <Select
                  label="Type of Expertise"
                  labelId="expertiseType-label"
                  id="expertiseType"
                  name="expertiseType"
                  value={formData.expertiseType}
                  onChange={handleInputChange}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                >
                  <MenuItem value="Option 1">Option 1</MenuItem>
                  <MenuItem value="Option 2">Option 2</MenuItem>
                  <MenuItem value="Option 3">Option 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  label="Add Expertise"
                  name="addExpertise"
                  value={formData.addExpertise}
                  onChange={handleInputChange}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  label="Owner Name"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Type of Social Account</InputLabel>
                <Select
                  label="Type of Social Account"
                  labelId="socialAccountType-label"
                  id="socialAccountType"
                  name="socialAccountType"
                  value={formData.socialAccountType}
                  onChange={handleInputChange}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                >
                  <MenuItem value="Option 1">Option 1</MenuItem>
                  <MenuItem value="Option 2">Option 2</MenuItem>
                  <MenuItem value="Option 3">Option 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  label="Share the Url of Social Account"
                  name="socialAccountUrl"
                  value={formData.socialAccountUrl}
                  onChange={handleInputChange}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  label="Owner Email"
                  name="ownerEmail"
                  value={formData.ownerEmail}
                  onChange={handleInputChange}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  label="Number of Batches in your classroom"
                  name="numBatches"
                  value={formData.numBatches}
                  onChange={handleInputChange}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} justifyContent="center">
              <Button type="submit" className='btn2_2' style={{color:"#ffffff"}}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>

      <Modal open={openModal} onClose={handleCloseModal}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
          }}
        >
          <Typography variant="h6" align="center">
            {errorMessage ? errorMessage : 'Thank you for submitting the form!'}
          </Typography>
          {!errorMessage && (
            <Typography variant="body1" align="center">
              We have received your information.
            </Typography>
          )}
          <Button onClick={handleCloseModal} variant="contained" color="primary" style={{ marginTop: '16px' }}>
            Close
          </Button>
        </div>
      </Modal>
    </Container>
  );
};

export default Commission_onboarding_1;

import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputLabel, MenuItem, Select,
} from '@mui/material';

const Esign = () => {
  const [formData, setFormData] = useState({
    declarationForm: '',
    invoicingEmail: '',
    signatureType: '',
    mou: '',
    gstDeclaration: '',
    bankDocument: '',
    signatureImage: null,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, signatureImage: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center">
         

        <Grid item xs={12} sm={12} md={6} justifyContent="center">
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Declaration Form</InputLabel>
                <Select
                  label="Declaration Form"
                  name="declarationForm"
                  value={formData.declarationForm}
              onChange={handleInputChange}
                >
                  <MenuItem value="MOU">MOU</MenuItem>
                  <MenuItem value="GST">GST</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12} md={6} justifyContent="center">
            <TextField
              label="Invoicing Email"
              name="invoicingEmail"
              value={formData.invoicingEmail}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
         

          <Grid item xs={12} sm={12} md={6} justifyContent="center">
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Your Signature Type</InputLabel>
                <Select
                  label="Your Signature Type"
                  name="signatureType"
                  value={formData.signatureType}
              onChange={handleInputChange}
                >
                  <MenuItem value="Image">Image</MenuItem>
                  <MenuItem value="Document">Document</MenuItem>
                </Select>
              </FormControl>
            </Grid>

         
            <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <TextField
              label="Read the MOU"
              name="mou"
              value={formData.mou}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <TextField
              label="Read the GST Declaration"
              name="gstDeclaration"
              value={formData.gstDeclaration}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <TextField
              label="Read the Bank Document"
              name="bankDocument"
              value={formData.bankDocument}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <FormControl>
              <FormLabel>Upload Image for Your Signature</FormLabel>
              <Input
                type="file"
                accept="image/jpeg, image/png, application/pdf"
                onChange={handleImageUpload}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            {formData.signatureImage && (
              <Card>
                <CardContent>
                  <Typography variant="h6">Uploaded Signature Image:</Typography>
                  <Box mt={2}>
                    <img
                      src={URL.createObjectURL(formData.signatureImage)}
                      alt="Uploaded Signature"
                      style={{ maxWidth: '100%', maxHeight: '300px' }}
                    />
                  </Box>
                </CardContent>
              </Card>
            )}
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Esign;

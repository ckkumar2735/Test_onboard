import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileUploadBox = ({ label, onFileChange }) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [fileError, setFileError] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    const allowedFileTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (file && allowedFileTypes.includes(file.type) && file.size <= 5242880) {
      setFileError('');
      onFileChange(file);
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // Set the preview URL for image files
    } else {
      setFileError('Invalid file format or size exceeds 5MB');
    }
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        border: `2px dashed ${isDragActive ? 'rgb(33, 150, 243)' : 'rgb(0, 0, 0, 0.12)'}`,
        borderRadius: '4px',
        padding: '16px',
        textAlign: 'center',
        backgroundColor: '#F5F5F5',
      }}
    >
      <input
        type="file"
        accept="image/jpeg, image/png, application/pdf"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id={`file-upload-${label}`}
      />
      <label htmlFor={`file-upload-${label}`}>
        <CloudUploadIcon style={{ fontSize: '48px', color: 'rgba(0, 0, 0, 0.54)' }} />
        {/* <p>{isDragActive ? 'Drop the file here' : `Drag and drop or browse files to upload

[Max: 5MB]

(jpg/jpeg/png/ only ) (${label})`}</p> */}
        <p>{isDragActive ? 'Drop the file here' : `Drag and drop or browse files to upload

[Max: 5MB]

(jpg/jpeg/png/ only )`}</p>
        <p style={{ color: 'red' }}>{fileError}</p>
      </label>
      {previewUrl && (
        <div style={{ marginTop: '16px' }}>
          {selectedFile.type.startsWith('image') ? (
            <img src={previewUrl} alt="Preview" style={{ width: '100%', maxWidth: '300px' }} />
          ) : (
            <p>Uploaded File: {selectedFile.name}</p>
          )}
          <p>Size: {(selectedFile.size / 1024).toFixed(2)} KB</p>
        </div>
      )}
    </div>
  );
};

const Bank_Details = () => {
  const [formData, setFormData] = useState({
    accountName: '',
    accountNumber: '',
    ifscCode: '',
    bankName: '',
    branchName: '',
    kycDocumentType: '',
    kycImage1: null,
    kycImage2: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    if (name === 'ifscCode') {
      // Fetch bank details using the Razorpay IFSC API
      fetchBankDetails(value);
    }
  };

  const fetchBankDetails = async (ifscCode) => {
    try {
      const response = await fetch(`https://ifsc.razorpay.com/${ifscCode}`);
      if (response.ok) {
        const bankDetails = await response.json();
        setFormData((prevFormData) => ({
          ...prevFormData,
          bankName: bankDetails.BANK,
          branchName: bankDetails.BRANCH,
        }));
      } else {
        // Handle error case when IFSC code is invalid or API request fails
        console.error('Error fetching bank details');
      }
    } catch (error) {
      console.error('Error fetching bank details', error);
    }
  };

  const handleKYCImage1Change = (file) => {
    setFormData((prevFormData) => ({ ...prevFormData, kycImage1: file }));

  };

  const handleKYCImage2Change = (file) => {
    setFormData((prevFormData) => ({ ...prevFormData, kycImage2: file }));

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <Container maxWidth="md" >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <TextField
              label="Enter Account Name"
              name="accountName"
              value={formData.accountName}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <TextField
              label="Enter Account Number"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <TextField
              label="IFSC Code"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <TextField
              label="Bank Name"
              name="bankName"
              value={formData.bankName}
              onChange={handleInputChange}
              fullWidth
              required
              disabled // Disable input field since it is automatically populated
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <TextField
              label="Branch Name"
              name="branchName"
              value={formData.branchName}
              onChange={handleInputChange}
              fullWidth
              required
              disabled // Disable input field since it is automatically populated
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <FormControl fullWidth>
              <InputLabel id="kyc-document-type-label">Upload KYC Document Type</InputLabel>
              <Select
                labelId="kyc-document-type-label"
                id="kyc-document-type"
                name="kycDocumentType"
                value={formData.kycDocumentType}
                onChange={handleInputChange}
                required
              >
                <MenuItem value="Aadhar Card">Aadhar Card</MenuItem>
                <MenuItem value="PAN Card">PAN Card</MenuItem>
                <MenuItem value="Passport">Passport</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <label>Upload Cancelled Cheque/Bank Passbook first page/ Bank Statement with bank details Image *
            </label>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <FileUploadBox label="KYC Image 1" onFileChange={handleKYCImage1Change} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <label>
            Upload KYC Document Aadhar Card, Driving License, Passport in JPG/JPEG/PNG  *            </label>
          </Grid>
          
          <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <FileUploadBox label="KYC Image 2" onFileChange={handleKYCImage2Change} />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Bank_Details;

import React, { useState } from 'react';
import '../Styles/Legal_Doc.css';

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
        <p>{isDragActive ? 'Drop the file here' : `Drag and drop or browse files to upload (${label})`}</p>
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

const BasicInfo = () => {
  const [formData, setFormData] = useState({
    panField: '',
    panDocUploadType: '',
    hasGstin: false,
    panImage: null,
    classroomGstin: '',
    gstCertificateUploadType: '',
    gstCertificateImage: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handlePanImageChange = (file) => {
    setFormData({
      ...formData,
      panImage: file,
    });
  };

  const handleGstCertificateImageChange = (file) => {
    setFormData({
      ...formData,
      gstCertificateImage: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, such as sending it to a server
    console.log(formData);
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <TextField
              label="Enter PAN Field"
              name="panField"
              value={formData.panField}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <FormControl variant="outlined" fullWidth>
              <InputLabel>PAN Doc Upload Type</InputLabel>
              <Select
                label="PAN Doc Upload Type"
                name="panDocUploadType"
                value={formData.panDocUploadType}
                onChange={handleChange}
              >
                <MenuItem value="Option 1">Image</MenuItem>
                <MenuItem value="Option 2">Document</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Do you have a GSTIN?</InputLabel>
              <span className="hkl mt-5">
                <input
                  type="checkbox"
                  id="switcher"
                  name="hasGstin"
                  checked={formData.hasGstin}
                  onChange={handleChange}
                />
                <label htmlFor="switcher"></label>
              </span>
            </FormControl>
          </Grid>
          {formData.hasGstin && (
            <>
            <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
                <TextField
                  label="Your Classroom GSTIN"
                  name="classroomGstin"
                  value={formData.classroomGstin}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
                <FormControl variant="outlined" fullWidth>
                  <InputLabel>GST Certificate Upload Type</InputLabel>
                  <Select
                    label="GST Certificate Upload Type"
                    name="gstCertificateUploadType"
                    value={formData.gstCertificateUploadType}
                    onChange={handleChange}
                  >
                    <MenuItem value="Option 1">Image</MenuItem>
                    <MenuItem value="Option 2">Document</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
                <FileUploadBox
                  label="GST Certificate Image Upload"
                  onFileChange={handleGstCertificateImageChange}
                />
              </Grid>
            </>
          )}
          <Grid item xs={12} sm={12} md={12} lg={6} justifyContent="center">
            <FileUploadBox label="PAN Image Upload" onFileChange={handlePanImageChange} />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default BasicInfo;

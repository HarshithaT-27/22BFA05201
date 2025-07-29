import React from 'react';
import { TextField } from '@mui/material';

const URLForm = ({ index, handleChange }) => (
  <>
    <TextField
      label="Long URL"
      fullWidth
      margin="dense"
      onChange={(e) => handleChange(index, 'long', e.target.value)}
    />
    <TextField
      label="Validity (minutes)"
      type="number"
      fullWidth
      margin="dense"
      onChange={(e) => handleChange(index, 'minutes', e.target.value)}
    />
    <TextField
      label="Custom Shortcode (optional)"
      fullWidth
      margin="dense"
      onChange={(e) => handleChange(index, 'code', e.target.value)}
    />
  </>
);

export default URLForm;

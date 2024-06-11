import React from 'react';
import { Modal, Typography, Box, IconButton, useTheme, Container } from '@mui/material';
import { Close } from '@mui/icons-material';

function CustomModal({ open, handleClose, title, children, fullscreen }) {
  const theme = useTheme();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: fullscreen ? '0' : '3%',
          left: '50%',
          transform: 'translateX(-50%)',
          bgcolor: '#011636',
          boxShadow: 24,
          p: 4,
          borderRadius: 4,
          color: '#DAD097',
          maxWidth: '100%',
          width: fullscreen ? '100vw' : '92vw',
          height: fullscreen ? '100vw' : '92vw',
          maxHeight: '95vh',
          overflowY: 'auto', 
          opacity: '0.90',
          [theme.breakpoints.down('md')]: {
            width: fullscreen ? '100vw' : '80vw',
            top: fullscreen ? '0' : '50%',
            transform: fullscreen ? 'none' : 'translate(-50%, -50%)',
          },
          [theme.breakpoints.down('sm')]: {
            width: '90vw',
          },
        }}
      >
        <Typography variant="h3" id="modal-title" sx={{
          fontSize: { xs: 'h4.fontSize', sm: 'h3.fontSize' },
          textAlign: 'center',
        }}>
          {title}
        </Typography>
        <br />
        <IconButton
          aria-label="close"
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            color: '#DAD097'
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <Container>{children}</Container>
      </Box>
    </Modal>
  );
}

export default CustomModal;

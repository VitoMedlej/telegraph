"use client";
import { Box, Button, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaCopy } from 'react-icons/fa';

const sm = [
  {
    name: 'X',
    shareUrl: (url: string) => `https://twitter.com/intent/tweet?url=${url}`,
    Icon: FaTwitter
  },
  {
    name: 'Facebook',
    shareUrl: (url: string) => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    Icon: FaFacebook
  }
];

const SMicons = ({ sx, color, invert }: { color?: string, sx?: any, invert?: boolean }) => {
  const [open, setOpen] = useState(false); // State for showing the snackbar (popup)
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyUrl = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(currentUrl);
        setOpen(true); // Show the popup alert
      } catch (err) {
        alert("Failed to copy URL.");
      }
    }
  };

  const handleClose = () => {
    setOpen(false); // Close the popup alert
  };

  return (
    <Box className="row flex wrap" sx={{ maxWidth: '250px', ...sx }}>
      {sm.map((item, index) => (
        <a
          key={index}
          className={`${invert ? 'filter' : ''} center flex smIcon pointer align-center gap`}
          href={typeof item.shareUrl === 'function' ? item.shareUrl(currentUrl) : item.shareUrl}
          target='_blank'
          rel="noreferrer"
        >
          <item.Icon color={color || 'white'} size="2em" />
        </a>
      ))}

      {/* Copy URL button */}
      <Box onClick={handleCopyUrl} className="center flex smIcon pointer align-center gap">
        <FaCopy color={color || 'black'} size="2em" />
      </Box>

      {/* Snackbar for "Link copied" popup */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Link copied"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
};

export default SMicons;

"use client";
import { Box, Button } from '@mui/material';
import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaWhatsapp, FaCopy } from 'react-icons/fa';

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
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyUrl = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(currentUrl);
        alert("URL copied to clipboard!");
      } catch (err) {
        alert("Failed to copy URL.");
      }
    }
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
      <Button onClick={handleCopyUrl} className="center flex smIcon pointer align-center gap">
        <FaCopy color={color || 'white'} size="2em" />
      </Button>
    </Box>
  );
};

export default SMicons;
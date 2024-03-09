import { Box } from '@mui/material'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <meta name="google-site-verification" content="77Hycj7z6DYVLMtxlqqTMqwRAH4cfmOL55pOOLgKr7c" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>
<link rel="icon" href="https://ucarecdn.com/f6c61100-9146-483f-af5b-4d3809c48c99/favicon.JPG" />

      
      </Head>
      <body>
        <Main />
        <NextScript />
        <a 
        href='https://wa.me/+96171287235'
        target="_blank"
        rel='nonreferrer'>
        <Box 
        
        sx={{
          cursor: 'pointer',
          width:'50px',position:'fixed',bottom:'5%',right:'3%'}}>
         <img src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/get-logo-whatsapp-png-pictures-1.png" alt="Whatsapp Icon" className="img" />
        </Box>
        </a>
      </body>
    </Html>
  )
}

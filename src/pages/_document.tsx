import { Box } from '@mui/material'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap" rel="stylesheet"/>

      
      </Head>
      <body className='bg2'>
        <Main />
        <NextScript />
        <Box
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  sx={{
    cursor: 'pointer',
    width: '50px',
    position: 'fixed',
    bottom: '5%',
    right: '3%',
  }}>
  <img
    src="https://cdn-icons-png.flaticon.com/128/14020/14020258.png"
    alt="Scroll to Top Icon"
    className="img"
  />
</Box>
      </body>
    </Html>
  )
}

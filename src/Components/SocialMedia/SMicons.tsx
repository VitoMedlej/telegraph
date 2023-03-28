import { Box } from '@mui/material';
import React from 'react'
import {FaFacebook ,FaInstagram,FaWhatsapp} from 'react-icons/fa';
const sm = [
    {
        Icon:FaInstagram,
        href:'https://www.instagram.com/onbeirut/'
    },
    {Icon:FaWhatsapp,href:'https://wa.me/+96171920255'},
    {

    Icon:FaFacebook,   href:'https://www.facebook.com/onbeirut'
}]
const SMicons = () => {
  return (
    <Box className='row flex' sx={{maxWidth:'200px'}}>

    {sm.map((item)=>{
      return <a key={item.href} className='center flex auto rounded smIcon pointer align-center gap white' href={`${item.href}`} target='_blank' rel={'noneferrer'}>

            <item.Icon size='2em'/>
         </a>
    })}
    </Box>
  )
}

export default SMicons
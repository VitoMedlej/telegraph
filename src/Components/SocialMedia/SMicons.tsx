"use client"

import { Box } from '@mui/material';
import React from 'react'
import {FaFacebook ,FaInstagram,FaYoutube,FaTwitter,FaWhatsapp} from 'react-icons/fa';
const sm = [
  {
    name: 'Instagram',
    url: process.env.NEXT_PUBLIC_INSTA,
    Icon: FaInstagram 
  },
  {
    name: 'YouTube',
    url: process.env.NEXT_PUBLIC_YT,
    Icon: FaYoutube 
  },

  {
    name: 'X',
    url: process.env.NEXT_PUBLIC_X,
    Icon: FaTwitter
  },
  {
    name: 'Facebook',
    url: process.env.NEXT_PUBLIC_FB,
    Icon: FaFacebook 
  }
]
const SMicons = ({sx,color, invert}:{color?:string,sx?:any,invert?:boolean}) => {
  return (
    <Box className='row flex wrap' sx={{maxWidth:'200px',...sx}}>

    {sm.map((item)=>{
      return <a key={item.url} className={`${invert ? 'filter' : ''} center flex smIcon pointer align-center gap white`} href={`${item.url}`} target='_blank' rel={'noneferrer'}>

            <item.Icon  color={color || 'white'} size='2em'/>
         </a>
    })}
    </Box>
  )
}

export default SMicons
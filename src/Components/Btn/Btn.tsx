import { Button } from '@mui/material'
import React from 'react'


const styles ={
    borderRadius:0,
    border:'1px solid white',
    background:'transparent',
    color:'white',
    px:'3.5em',
    py:'.6em',
}
const Btn = ({children,blur,sx}:{blur?:boolean,sx?:any,children?:any}) => {
  return (
    <Button 
    className={`${blur ? 'blur' :'' }`}
    sx={{
        ...styles,
        ...sx
    }}>{children}</Button>
  )
}

export default Btn
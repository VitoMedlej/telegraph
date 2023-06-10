import { Button } from '@mui/material'
import React from 'react'


const styles =(dark?:boolean) => {
  let a;
  dark ? a= {
    border:'1px solid black',
    background:'transparent',
    color:'black',
    px:'3.5em',
    py:'.6em',
  }
  :
  a= {
    
    border:'1px solid white',
    background:'transparent',
    color:'white',
    px:'3.5em',
    py:'.6em',
  }
  return a
}
const Btn = ({onClick,className,dark,children,blur,sx}:{onClick?:any,className?:string,dark?:boolean,blur?:boolean,sx?:any,children?:any}) => {
  return (
    <Button 
    type='submit'
    onClick={onClick && onClick}
    className={`${blur ? 'blur' :'' } ${className ? className : ""}`}
    sx={{
     ...styles(dark),
        ...sx
    }}>{children}</Button>
  )
}

export default Btn
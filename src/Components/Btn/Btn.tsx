import { Button } from '@mui/material'
import React from 'react'


const styles =(dark?:boolean) => {
  let a;
  dark ? a= {
    border:'1px solid black',
    borderRadius:0,
    background:'transparent',
    color:'black',
    px:'3.5em',
    py:'.6em',
  }
  :
  a= {
    border:'1px solid white',
    borderRadius:0,

    background:'transparent',
    color:'white',
    px:'3.5em',
    py:'.6em',
  }
  return a
}
const Btn = ({disabled,onClick,className,dark,children,blur,sx}:{disabled?:boolean,onClick?:any,className?:string,dark?:boolean,blur?:boolean,sx?:any,children?:any}) => {
  return (
    <Button 
    disabled={disabled === true ? true : false}
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
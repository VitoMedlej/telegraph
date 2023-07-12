import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import gsap from 'gsap';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import {BiMenuAltRight} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'


import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import Btn from '@/Components/Btn/Btn';

const pages = [{href:'/',title:'Home',isHome:true}, {title:'Services',isHome:false,href:'/services'}, {
  
  isHome:true,title:'Pricing',href:'#pricing'},{isHome:true,title:'Portfolio',href:'#portfolio'},{isHome:false,href:'/blog',title:'Blog'},{isHome:false,href:'/contact',title:'Contact'}];

function ResponsiveAppBar({dark}:{dark?:boolean}) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  // React.useEffect(() => {
  //   if (!hide) {
  //     isHidden(true)
  //   }
  
  //   return () => {
  //     isHidden(true)
  //   }
  // }, [])
  
  const animateNavbar = (reverse?:boolean) => {
    if (reverse) {

      // gsap.to('.logo',{
      //   filter:'none'
      // })
      gsap.to('.lista-item',{opacity:0,top:'0', ease:'power1',stagger:.15})
      gsap.to('.menu',{duration:1,opacity:0.1,top:'-150%',delay:.85})
      gsap.to('.menu2',{duration:1,opacity:0.1,top:'-150%',delay:1})
      // gsap.fromTo('.logo',{filter:'invert(1)'},{
      //   delay:1,
      //   filter:' inherit'
      // })
      // setTimeout(() => {
      gsap.fromTo('.drawer',{display:'flex'},{display:'none',delay:1})
      // }, 2000);
      return 
    }

    gsap.fromTo('.drawer',{display:'none'},{display:'flex',duration:.1})

    gsap.fromTo('.menu',{opacity:0,top:'-150%'},{duration:1,opacity:1,display:'flex',top:0, ease:'cric'})
    gsap.fromTo('.menu2',{opacity:0,top:'-150%'},{delay:.25,duration:1,opacity:1,display:'flex',top:0, ease:'cric'})
    gsap.fromTo('.lista-item',{opacity:0,top:'10px'},{opacity:1,top:0, ease:'cric',stagger:0.2})
    gsap.fromTo('.logo',{filter:'inherit'},{
      delay:1,
      filter:dark ? '' : 'invert(1)'
    })

  }
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    animateNavbar()
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);        
    animateNavbar(true)
  };
  
  const router = useRouter()
const handleRoute = (scrollTo?:string,isHome?:boolean) => {
  
  if (scrollTo && window !== undefined ) {
    router.push(isHome ? `/?scrollTo=${scrollTo}` : scrollTo);
  } 

  
  // ()=>router.push('#portfolio')
}

  
  return (
    <AppBar position="static" sx={{background:'transparent',boxShadow:'none'}}>
      <Container maxWidth="xl" sx={{margin:'0 auto'}}>
        <Toolbar 
        
        sx={{
          maxWidth:"xl",
          py:1,margin:'0 auto'}}
        disableGutters>
          <Link
            className={`logo ${dark ? '' : 'filter' }`}
            href="/"
          >
            
              <img src={  'https://ucarecdn.com/92766691-547c-49fd-812f-0b633857fb06/logoblack_o65q34transformed1.png'
             } 
             className='img' alt="onbeirut logo" />

          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex' },justifyContent:'flex-end',alignItems: 'right'}}>
                <MenuItem sx={{mx:1}}  onClick={()=>router.push('/contact')}>
                  <Typography sx={{color:dark ? 'black':'white'}} textAlign="center">{'Contact'}</Typography>
                </MenuItem>
          <MenuItem    onClick={()=>handleRoute('#portfolio',true)}>
                  <Typography sx={{ fontSize:'.9em',color:dark ? 'black': 'white'}} textAlign="center">{'Our Work'}</Typography>
                </MenuItem>
            <IconButton
              size="large"
              sx={{border:'1px solid #ffffff4d',zIndex:'124124'}}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color='inherit'
              onClick={Boolean(anchorElNav) ? handleCloseNavMenu : handleOpenNavMenu}
            >
            {Boolean(anchorElNav) ?  <IoMdClose color='red'/> : <BiMenuAltRight color={dark ? 'black' : 'white'}/>}
            </IconButton>
          </Box>
          

   
        </Toolbar>
      </Container>
        <Box
        className='drawer'
        sx={{
          background:'transparent',
          width:'100vw',height:'100vh'}}>
            <Box 
            sx={{width:{xs:'100%',sm:'50%'},zIndex:'222'}}
            className={` menu  absolute ${Boolean(anchorElNav) ? 'open' : ''}`}
            >
                <Container
                sx={
                  {width:'50%',
                    margin:'0 auto', flexGrow: 1, display: 'flex',alignItems:'start',px:2,flexDirection:'column',justifyContent:'center' }}
                >
                {pages.map((page) => (
              <Button
              className={`lista-item`}
                key={page.title}
                onClick={()=>{handleCloseNavMenu(); handleRoute(`${page.href}`,page.isHome)}}
                sx={{ my: {xs:1,sm:1.5}, color: 'white', display: 'block' }}
              >
                <Typography sx={{fontSize:{xs:'1.75em',sm:'2.3em'},fontWeight:'bolder'}} component='h4'>
                {page.title}
                </Typography>
              </Button>
            ))}
                </Container>
            </Box>
            <Box
            sx={{width:{xs:'100%',sm:'50%'}}}

            className={`center menu2  absolute ${Boolean(anchorElNav) ? 'open' : ''}`}
            >
          <Container className='center align-center'>
          <Btn 
           onClick={()=>{handleCloseNavMenu(); handleRoute(`/contact`,false)}}
          >
          Contact Us Today
          </Btn>
          </Container>
            </Box>
        </Box>
    </AppBar>
  );
}
export default ResponsiveAppBar;
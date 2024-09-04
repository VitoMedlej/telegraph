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
import { IoMdMenu } from "react-icons/io";
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import Btn from '@/Components/Btn/Btn';

const pages = [{href:'/',title:'Home',isHome:true},
   {title:'Services',isHome:false,href:'/services'}, {
  
  isHome:true,title:'Pricing',href:'#pricing'},
  
  {isHome:true,title:'Portfolio',href:'#portfolio'},
  {isHome:true,title:'Testimonials',href:'#testimonial'},
  {isHome:false,href:'/blog',title:'Blog'},
  {isHome:false,href:'/contact',title:'Contact'}];

  function ResponsiveAppBar({ dark }: { dark?: boolean }) {
    const [menuOpen, setMenuOpen] = React.useState(false);
  
    const handleToggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    const router = useRouter();
    const handleRoute = (scrollTo?: string, isHome?: boolean) => {
      if (scrollTo && typeof window !== 'undefined') {
        router.push(isHome ? `/?scrollTo=${scrollTo}` : scrollTo);
      }
    };
  
    return (
      <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
        <Container maxWidth="xl" sx={{ margin: '0 auto' }}>
          <Toolbar sx={{ maxWidth: 'xl', py: 1, margin: '0 auto' }} disableGutters>
            <Link className={`logo ${dark ? '' : ''}`} href="/">
              <img
                src={'https://ucarecdn.com/f13733f8-fece-4b1c-93d7-20d530da52dc/newslogosmall.JPG'}
                className="img"
                alt="NewsTelegraph logo"
              />
            </Link>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex' }, justifyContent: 'flex-end', alignItems: 'right' }}>
              <MenuItem onClick={() => handleRoute('/fooer', false)}>
                <Typography sx={{ fontSize: '.9em', color: 'black' }} textAlign="center">
                  fasf
                </Typography>
              </MenuItem>
              <IconButton
                size="large"
                sx={{ border: '1px solid transparent', zIndex: '124124' }}
                aria-label="toggle menu"
                aria-haspopup="true"
                color="inherit"
                onClick={handleToggleMenu}
              >
                {menuOpen ? <IoMdClose color="black" /> : <IoMdMenu color={dark ? 'black' : 'black'} />}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
        {menuOpen && (
          <Box
          className='bg'
            sx={{
              width:'100%',
              background: 'transparent',
              height: 'fit-content',
              pb:4,
              pt:8,
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: '999',
            }}
          >
            <Box
              sx={{
                zIndex: '222',
                mt: 4,
                display: 'flex',
                alignItems: 'center',

                px: 2,
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.title}
                  onClick={() => {
                    setMenuOpen(false);
                    handleRoute(`${page.href}`, page.isHome);
                  }}
                  sx={{ my: { xs: 0.25, sm: 0.25 }, color: 'white', display: 'block' }}
                >
                  <Typography sx={{ fontSize: { xs: '.75em', sm: '.9em' }, fontWeight: 'bolder' }} component="h4">
                    {page.title}
                  </Typography>
                </Button>
              ))}
            </Box>
          </Box>
        )}
      </AppBar>
    );
  }
  
  export default ResponsiveAppBar;
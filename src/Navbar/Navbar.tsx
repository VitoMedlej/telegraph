import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import gsap from 'gsap';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import {BiMenuAltRight} from 'react-icons/bi'
import {IoIosClose} from 'react-icons/io'


import { useRouter } from 'next/router';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const animateNavbar = (open?:boolean) => {
    const tl = gsap.timeline()
    if (open) {

    tl.to('.menu',{opacity:1,display:'flex',top:0, ease:'power1'})
  return  
  }
    tl.to('.menu',{opacity:1,display:'flex',top:0, ease:'power1'}).reverse()
    
  }
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    
    setAnchorElNav(event.currentTarget);
    animateNavbar()
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);

    animateNavbar(false)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const router = useRouter()
  // React.useEffect(() => {
   
  // }, [])

  
  return (
    <AppBar position="static" sx={{background:'white',boxShadow:'none'}}>
      <Container maxWidth="xl">
        <Toolbar 
        sx={{my:1}}
        disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Link
            className='logo'
            // variant="h5"
            // noWrap
            // component="a"
            href="/"
         
          >
            <img src={Boolean(anchorElUser) ? 'https://ucarecdn.com/92766691-547c-49fd-812f-0b633857fb06/' : "https://ucarecdn.com/92766691-547c-49fd-812f-0b633857fb06/logoblack_o65q34transformed1.png"} className='img' alt="" />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex' },justifyContent:'flex-end',alignItems: 'right'}}>
          <MenuItem  onClick={()=>router.push('/')}>
                  <Typography sx={{color:'black'}} textAlign="center">{'Projects'}</Typography>
                </MenuItem>
                <MenuItem sx={{mx:1}}  onClick={()=>router.push('/')}>
                  <Typography sx={{color:'black'}} textAlign="center">{'Contact'}</Typography>
                </MenuItem>
            <IconButton
              size="large"
              sx={{zIndex:'23124124'}}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={Boolean(anchorElNav) ? handleCloseNavMenu : handleOpenNavMenu}
              color="inherit"
            >
            {Boolean(anchorElNav) ?  <IoIosClose color='red'/> : <BiMenuAltRight color='black'/>}
            </IconButton>

            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
        
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
     
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box> */}

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <Box
            className={`menu absolute ${Boolean(anchorElNav) ? 'open' : ''}`}
                // sx={{
                //   display : 
                // }}
           //  open={Boolean(anchorElNav)}
                 // onClose={handleCloseNavMenu}
               >
              
                   
   asfasfasf

               </Box>
    </AppBar>
  );
}
export default ResponsiveAppBar;
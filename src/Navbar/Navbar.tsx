import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import {IoMdClose} from 'react-icons/io'
import { IoMdMenu } from "react-icons/io";
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

const pages = [
  { href: '/category/الأخبار', title: 'الأخبار', isHome: false },
  { href: '/category/السكري', title: 'السكري', isHome: false },
  { href: '/category/المرأة', title: 'المرأة', isHome: false },
  { href: '/category/بانوراما', title: 'بانوراما', isHome: false },
  { href: '/category/جونيور', title: 'جونيور', isHome: false },
  { href: '/category/خدمات', title: 'خدمات', isHome: false },
  { href: '/category/رياضة', title: 'رياضة', isHome: false },
  { href: '/category/سينما', title: 'سينما', isHome: false },
  { href: '/category/صحة وبيئة', title: 'صحة وبيئة', isHome: false },
  { href: '/category/فنون', title: 'فنون', isHome: false },
  { href: '/contact', title: 'تواصل', isHome: false },
];

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
      <AppBar className='bg' position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
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
          <Box sx={{display:{xs:'none',md:"flex"}}}>
            {pages.map((item, index) => (
        <MenuItem key={item.title} onClick={() => handleRoute(item.href, false)}>
          <Typography sx={{ fontSize: '.9em', color: 'white' }} textAlign="center">
            {item.title}
          </Typography>
        </MenuItem>
      ))}
            </Box> 

              <IconButton
                size="large"
                sx={{ display:{xs:'flex',md:'none'}, border: '1px solid transparent', zIndex: '124124' }}
                aria-label="toggle menu"
                aria-haspopup="true"
                color="inherit"
                onClick={handleToggleMenu}
              >
                {menuOpen ? <IoMdClose color="black" /> : <IoMdMenu color={dark ? 'white' : 'white'} />}
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
                  sx={{ my: { xs: 0.2, sm: 0.15 }, color: 'white', display: 'block' }}
                >
                  <Typography sx={{ fontSize: { xs: '.95em', sm: '1em' }, fontWeight: 'bolder' }} component="h4">
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
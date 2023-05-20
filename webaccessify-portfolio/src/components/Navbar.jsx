import React from 'react';
import { Link } from 'react-router-dom';
// import Link from '@mui/material/Link'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
const pages =
        [
            {
                name: 'Home',
                path: '/'
            },
            {
                name: 'Solution',
                path: '/Solution'
            },
            {
                name: 'About us',
                path: '/About-us'
            },
            {
                name: 'Contact us',
                path: '/Contact-us'
            },
            {
                name: 'Pricing',
                path: '/Pricing'
            }
        ];

    const settings = ['Profile', 'Account', 'Logout'];
    const ResponsiveAppBar=()=> {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar position="static">
            <Container maxWidth="l" style={{
                backgroundColor: 'rgb(20, 20, 61)',
            }}>
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            fontSize: '2rem',
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        WEBACCESSIFY
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
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
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page,index) => (
                                <MenuItem key={index} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" color={'green'}>{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        WEBACCESSIFY
                    </Typography>
                    <Box sx={{ flexGrow: 1,flexDirection: 'row', ml: 15, display: { s: 'flex', l: 'flex', xs: 'none', md: 'flex' }}}>
                        <div>
                        {pages.map((page, index) => 
                        {
                            return(
                                <Link
                                 key={index}
                                    to={page.path}
                                onClick={handleCloseNavMenu}
                                style={{
                                    color: 'white',
                                    margin: '2rem',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '2.5rem' 
                                }}>
                                    {page.name}
                                </Link>
                            );
                            })}
                            </div>  
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <a
                        style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '2.5rem',
                            padding: '3px'
                        }}
                        href="https://dashboard.webaccessify.com/">Sign in</a>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;

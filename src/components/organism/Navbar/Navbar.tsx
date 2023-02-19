import { Link, Outlet } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
} from '@mui/material';
import { Menu as MenuIcon, LocalFireDepartment } from '@mui/icons-material';
import useNavbar from './Navbar.logic';

function Navbar() {
  const {
    customLogoutUser,
    user,
    isLoggedIn,
    anchorElNav,
    anchorElUser,
    handleCloseNavMenu,
    handleCloseUserMenu,
    handleOpenNavMenu,
    handleOpenUserMenu,
  } = useNavbar();
  return (
    <>
      <AppBar position='static' sx={{ mb: 2 }}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
              <Tooltip title='Open menu'>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                  color='inherit'
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
              <Menu
                id='menu-appbar'
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
                open={!!anchorElNav}
                onClose={handleCloseNavMenu}
                sx={{
                  display: 'block',
                }}
              >
                <Link to='/events'>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>All Events</Typography>
                  </MenuItem>
                </Link>

                {!isLoggedIn && (
                  <Link to='/'>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign='center'>Login</Typography>
                    </MenuItem>
                  </Link>
                )}
              </Menu>
            </Box>

            <LocalFireDepartment sx={{ display: 'flex', mr: 1 }} />
            <Typography
              variant='h6'
              noWrap
              sx={{
                mr: 2,
                display: 'flex',
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
              }}
            >
              EVENT HERO
            </Typography>
            {isLoggedIn && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title='Open settings'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user?.name} src={user?.profileImg} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
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
                  open={!!anchorElUser}
                  onClose={handleCloseUserMenu}
                >
                  {isLoggedIn && (
                    <>
                      <Link to='/my-account'>
                        <MenuItem onClick={handleCloseUserMenu}>
                          <Typography textAlign='center'>My Account</Typography>
                        </MenuItem>
                      </Link>
                      <Link to='/profile'>
                        <MenuItem onClick={handleCloseUserMenu}>
                          <Typography textAlign='center'>Profile</Typography>
                        </MenuItem>
                      </Link>
                    </>
                  )}
                  {isLoggedIn && user?.role === 'customer' && (
                    <Link to='/add-funds'>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign='center'>Add Funds</Typography>
                      </MenuItem>
                    </Link>
                  )}
                  <MenuItem onClick={customLogoutUser}>
                    <Typography textAlign='center'>Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}

export default Navbar;

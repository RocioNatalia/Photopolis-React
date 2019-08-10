import React from 'react';
import auth from '../auth'
//Permite que la barra pueda verse siempre 
import { withRouter } from 'react-router-dom'
//Material UI
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountBox from '@material-ui/icons/AccountBox';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Home from '@material-ui/icons/Home';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button'
//logo
import logo from '../img/logo.png'

const useStyles = makeStyles(theme => ({
  button: { color: 'white'},
  buttonMobile: {color: 'black'},
  nav: {backgroundColor: '#011638'},
  grow: {flexGrow: 1},
  menuButton: {marginRight: 0},
  title: {
          display:'none',
          [theme.breakpoints.up('sm')]: {display: 'block'}
          },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: 0,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {auth.user !== null ?

        <div>
          <MenuItem>
            <Button
              color="primary"
              className={classes.buttonMobile}
              onClick={
                () => props.history.push('/')
              }>
              <Home />
              Home
      </Button>
          </MenuItem>

          <MenuItem>
            <Button
              color="primary"
              className={classes.buttonMobile}
              onClick={
                () => props.history.push('/profile')
              }>
              <AccountBox />
              Perfil
      </Button>
          </MenuItem>

          <MenuItem>
            <Button
              color="primary"
              className={classes.buttonMobile}
              onClick={
                () => props.history.push('/profile')
              }>
              <ExitToApp />
              Cerrar sesión
              </Button>
          </MenuItem>
        </div>
        :
        <MenuItem>
          <Button
            color="primary"
            className={classes.buttonMobile}
            onClick={
              () => props.history.push('/singin')
            } >

            <AccountBox />
            Iniciar Sesión
              </Button>
        </MenuItem>
      }

    </Menu>

  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.nav}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={
              () => props.history.push('/')
            }
          >
            <img src={logo} alt='logo' height='32px' />
          </IconButton>

          <Typography className={classes.title} variant="h6" noWrap>
            PhotoPolis
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

            {/*Parte condicional */}

            {auth.user !== null ?
              <div>
                <Button
                  color="primary"
                  className={classes.button}
                  onClick={
                    () => props.history.push('/')
                  }>
                  <Home />
                  Home
              </Button>

                <Button
                  color="primary"
                  className={classes.button}
                  onClick={
                    () => props.history.push('/profile')
                  }>
                  <AccountBox />
                  Perfil
              </Button>

                <Button
                  color="primary"
                  className={classes.button}
                  onClick={
                    () =>
                      auth.logout(
                        () => {
                          props.history.push('/')
                        })}>
                  <ExitToApp />
                  Cerrar Sesión
              </Button>

              </div>

              :
              <Button
                color="primary"
                className={classes.button}
                onClick={
                  () => props.history.push('/singin')
                } >

                <AccountBox />
                Iniciar Sesión
              </Button>
            }

          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default withRouter(PrimarySearchAppBar);
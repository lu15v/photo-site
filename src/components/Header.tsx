import React from 'react';
import {AppBar, Toolbar, IconButton,Typography, makeStyles} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import TempDrawer from './TempDrawer';
import  '../Fonts.css';

const font = "'Concert One', cursive;";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    appBar:{
        //background: rgb(2,0,36);
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(255,0,24,1) 100%)',
        position: 'sticky',
        top: '0',
        marginBottom: '10px'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontFamily: font
    },
  }));

const Header: React.FC<{}> = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    return(
        <AppBar  className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" className={classes.menuButton} aria-label="menu"onClick={handleDrawerOpen} >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            A fucking awesome name I need to figure out
          </Typography>
        </Toolbar>
        <TempDrawer  drawerClose={handleDrawerClose} open={open}/>
      </AppBar>
    );
}

export default Header;

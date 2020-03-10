import React from 'react';
import {AppBar, Toolbar, IconButton,Typography, makeStyles} from '@material-ui/core'
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
    return(
        <AppBar  className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" className={classes.menuButton} aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            A fucking awesome name I need to figure out
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default Header;

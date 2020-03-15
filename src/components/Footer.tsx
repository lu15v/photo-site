import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {AppBar, Container} from '@material-ui/core';
import  '../Fonts.css';

const font = "'EB Garamond', serif";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      background: 'linear-gradient(90deg, rgba(70,67,201,1) 0%, rgba(6,44,88,1) 100%)',
      bottom: 0,
      width: '100%',
      height: '2.5rem', 
      fontFamily: font
    }
  }),
);


const Footer: React.FC<{}> = () => {
    const classes = useStyles();
    return(
    <AppBar position="static" className={classes.footer}>
       <Container maxWidth="sm">
            <p>Developed by: Luis B.</p>
       </Container>
    </AppBar>
    );
}

export default Footer;
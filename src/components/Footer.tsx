import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {AppBar, Container} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      background: 'linear-gradient(90deg, rgba(24,23,24,1) 0%, rgba(65,54,54,1) 50%, rgba(37,32,24,1) 100%)',
      bottom: 0,
      width: '100%',
      height: '2.5rem', 
    }
  }),
);


const Footer: React.FC<{}> = () => {
    const classes = useStyles();
    return(
    <AppBar position="static" className={classes.footer}>
       <Container maxWidth="sm">
            <p>hola</p>
       </Container>
    </AppBar>
    );
}

export default Footer;
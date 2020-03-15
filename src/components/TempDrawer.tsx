import React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import  '../Fonts.css';

const font = "'EB Garamond', serif";

const drawerWidth = '33%';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    header: {
        fontFamily: font,
        fontSize: '1.6em',
        color: 'white',
        padding: "10px"
    },
    cardInfo:{
      fontFamily: font,
      fontSize: '1em',
      color: 'white',
      background: "#3c3535",
      textAlign: "justify",
      padding: "10px"
    },
    drawerPaper: {
      display: 'flex',
      width: drawerWidth,
      background: '#424242',
      padding: "0em 1em"
    },
    fontColor: {
      color: "white"
    },
    divider :{
      backgroundColor: "white"
    },
    avatar: {
      display: 'flex',
      justifyContent: 'center',
      margin: '10px'
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
  }),
);
interface DrawerProps {
  drawerClose(): void,
  open: boolean
}
const TempDrawer: React.FC<DrawerProps> = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
      <Drawer
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton  className={classes.fontColor} onClick={props.drawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <div className={classes.avatar}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
        <h1 className={classes.header}>Luis Ballinas</h1>
        <Card variant="outlined" className={classes.cardInfo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </Card>
      </Drawer>
  );
}

export default TempDrawer;
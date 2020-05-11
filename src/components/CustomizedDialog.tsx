import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardCustom from './CardCustom';


const styles = (theme: Theme) =>
  createStyles({
    dialogTitle: {
      margin: 0,
      padding: theme.spacing(2),
      background: '#2b2626',
      color: '#9e9e9e'
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(0),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    mediaDialogContent:{
      background: '#2b2626'
    },
    picture:{
      maxWidth: '100%',
      maxHeight: '100%',
      display: 'block',
      marginBottom: '7px'
    },
    imageDialog:{
      position:'relative'
    },
    likeIcon:{
      position: 'absolute',
      bottom: 0,
      right: 0,
      float: 'right'
    }
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.dialogTitle} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export interface CustomDialogProps extends WithStyles<typeof styles>{
    show: boolean;
    handleClose: () => void;
    id: string,
    likeIcon: (id: string) => JSX.Element;
    handleLike: (id: string) => void;
}
interface CardMediaProps extends WithStyles<typeof styles> {
  src: string
  id: string,
  likeIcon: (id: string) => JSX.Element;
  handleLike: (id: string) => void;
}

const Media = withStyles(styles)((props: CardMediaProps) => {
  const {src, classes, id, likeIcon, handleLike} = props;
  return(
    <CardMedia className={classes.imageDialog}> 
      <img className={classes.picture} alt="" src={src}/>
      <IconButton onClick={() => handleLike(id)} className={classes.likeIcon}>
          {likeIcon(id)}
      </IconButton>
    </CardMedia>
  );
});

const CustomizedDialog = withStyles(styles)((props: CustomDialogProps) => {
  const {handleClose, show, id, classes, likeIcon, handleLike} = props;
  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={show}>
      <DialogTitle id="customized-dialog-title"  onClose={() => handleClose()} >
      </DialogTitle>
      <DialogContent dividers className={classes.mediaDialogContent}>
        <Media src="https://i.picsum.photos/id/156/1700/1450.jpg" handleLike={handleLike} likeIcon={likeIcon} id={id}/>
        <CardCustom  author="Ballinas Luis" place="Mexico" name="Foots"/>
      </DialogContent>
    </Dialog>
  );
});

export default CustomizedDialog;

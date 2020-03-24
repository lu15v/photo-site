import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

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
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    mediaDialogContent:{
      background: '#2b2626'
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

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export interface CustomDialogProps extends WithStyles<typeof styles>{
    show: boolean;
    handleClose: () => void;
    id: string
}
interface CardMediaProps extends WithStyles<typeof styles> {
  src: string;
}

const Media = withStyles(styles)((props: CardMediaProps) => {
  const {src} = props;
  return(
    <CardMedia>
      <img src={src}/>
    </CardMedia>
  );
});

const CustomizedDialog = withStyles(styles)((props: CustomDialogProps) => {
  const {handleClose, show, id, classes} = props;
  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={show} >
      <DialogTitle id="customized-dialog-title"  onClose={() => handleClose()} >
        Modal title {id}
      </DialogTitle>
      <DialogContent dividers className={classes.mediaDialogContent}>
        <Media src="https://i.picsum.photos/id/156/300/450.jpg"/>
      </DialogContent>
    </Dialog>
  );
});

export default CustomizedDialog;

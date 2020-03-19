import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import {ImageData} from '../typings';
import GridListTile from '@material-ui/core/GridListTile';
import CustomizedDialog from './CustomizedDialog';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
      width: "100%",
      height: "100%",
    },
    gridListTile: {
      cursor: 'pointer'
    }
  }),
);

interface GalleryList {
  galleryList: ImageData[]
 }

const ImageGridList: React.FC<GalleryList> = (props) =>{

  const [input, setInput] = React.useState({
    open: false,
    id: '',
  });
  const handleClickOpen = (id:string) => {
    setInput({open: true, id: id})
  };
  const handleClose = () => {
    setInput({open: false, id: input.id})
  };

  const classes = useStyles();
  const {galleryList} = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={170} className={classes.gridList} cols={12}>
      {galleryList.map(tile => (
          <GridListTile key={tile.id} cols={tile.cols || 1} className={classes.gridListTile} onClick={() => handleClickOpen(tile.id)}>
            <img src={tile.img} alt={tile.title} /> 
          </GridListTile>
        ))}
      </GridList>
      <CustomizedDialog  show={input.open} handleClose={handleClose} id={input.id}/>
    </div>
  );
  }

export default ImageGridList;

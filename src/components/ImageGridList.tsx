import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import {ImageData} from '../typings';
import GridListTile from '@material-ui/core/GridListTile';
import CustomizedDialog from './CustomizedDialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import GridListTileBar from '@material-ui/core/GridListTileBar';

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
    },
    title: {
      color: 'white',
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    }
  }),
);

interface GalleryList {
  galleryList: ImageData[]
 }

const ImageGridList: React.FC<GalleryList> = (props) =>{
  const {galleryList} = props;
  const classes = useStyles();

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
  const lg = useMediaQuery('(min-width:400px)');

  let colsTile = lg === true ? 3 : 4;

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={12}>
      {galleryList.map(tile => (
          <GridListTile key={tile.id} cols={colsTile} className={classes.gridListTile}>
            <img src={tile.img} alt={tile.title} onClick={() => handleClickOpen(tile.id)} /> 
            <GridListTileBar
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`${tile.title}`}>
                  <FavoriteBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <CustomizedDialog  show={input.open} handleClose={handleClose} id={input.id}/>
    </div>
  );
  }

export default ImageGridList;

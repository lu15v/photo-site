import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import {ImageData} from '../typings';
import GridListTile from '@material-ui/core/GridListTile';
import CustomizedDialog from './CustomizedDialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
    //liked: {}
    liked: false
  });
  const handleClickOpen = (id:string) => {
    setInput({open: true, id: id, liked: input.liked})
  };
  const handleClose = () => {
    setInput({open: false, id: input.id, liked: input.liked})
  };

  const handleLike = (id:string) => {
    //let tempObj:any = {};
    //tempObj[id] = id;
    
    if(idIsPresent(id)){
      //let likedCopy:any = {...input.liked};
      //delete likedCopy[id];
      //setInput({open: input.open, id: input.id, liked: likedCopy})
      localStorage.removeItem(id);
      setInput({open: input.open, id: input.id, liked: false})
    }else{
      //setInput({open: input.open, id: input.id, liked: {...input.liked, ...tempObj}})
      localStorage.setItem(id, id);
      setInput({open: input.open, id: input.id, liked: true})
    }
  }
  const lg = useMediaQuery('(min-width:400px)');
  
  const idIsPresent = (id:string) => localStorage.getItem(id) !== null;

  const favIcon = (id:string) => idIsPresent(id) ? <FavoriteIcon className={classes.title} /> : <FavoriteBorderIcon className={classes.title} />

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
                <IconButton aria-label={`${tile.title}`} onClick={() => handleLike(tile.id)}>
                  {favIcon(tile.id)}
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <CustomizedDialog likeIcon={favIcon} handleLike={handleLike} show={input.open} handleClose={handleClose} id={input.id}/>
    </div>
  );
  }

export default ImageGridList;

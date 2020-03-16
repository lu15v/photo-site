import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {ImageData} from '../typings';

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
  galleryList: ImageData[],
 }

const ImageGridList: React.FC<GalleryList> = (props) =>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={170} className={classes.gridList} cols={12}>
        {props.galleryList.map(tile => (
          <GridListTile className={classes.gridListTile} key={tile.img} cols={tile.cols || 1} onClick={()=> console.log(tile.img)}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
  }

export default ImageGridList;

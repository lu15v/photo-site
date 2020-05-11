import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  interface CardCustomProps {
    author: string
    place: string
    name: string
  }

const CardCustom: React.FC<CardCustomProps> = (props) => {
    const classes = useStyles();
    const{author, place, name} = props;

    return(
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                  {author}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {place}
                </Typography>
                <Typography variant="body2" component="p">
                 <b>{name}</b> 2020
                </Typography>
                <Typography variant="body2" component="p">
                 Some Fancy Photography Style
                </Typography>
            </CardContent>
        </Card>
    )
}
export default CardCustom;
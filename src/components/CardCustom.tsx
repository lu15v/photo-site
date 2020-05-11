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


const CardCustom: React.FC<{}> = () => {
    const classes = useStyles();

    return(
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                  Ballinas Luis
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Mexico, 2019-2020
                </Typography>
                <Typography variant="body2" component="p">
                 <b>Foots</b> 2020
                </Typography>
                <Typography variant="body2" component="p">
                 Some Fancy Photography Style
                </Typography>
            </CardContent>
        </Card>
    )
}
export default CardCustom;
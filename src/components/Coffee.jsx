import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: "70%",
    marginTop : 10
  },
});

function Coffee(props) {
  const classes = useStyles();
  return (
    <div>
       <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Smooth coffee with rich crema and a heady cacao aroma!
            This unique coffee works well as both black coffee and with milk.
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          alt="coffee"
          height="140"
          image={props.imageUrl}
          title="Contemplative Reptile"
        />
        
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          BUY NOW
        </Button>
        <Button size="small" color="primary">
          OFFER
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Coffee

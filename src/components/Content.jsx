import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Coffee from './Coffee'
import coffeMakerList from "../coffeedetails.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft : "12%",
    paddingTop : "5%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
}));

export default function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify = "center" alignItems ="center" >
        
          {coffeMakerList.map((coffeMakerObj) =>  { return ( <Grid item xs={10} sm ={8} md ={4}><Coffee {...coffeMakerObj}/></Grid>)})}
        
    </Grid>
    </div>
  );
}

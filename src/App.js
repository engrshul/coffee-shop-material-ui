import React from 'react';
import ButtonAppBar from './components/Header'
import Content from './components/Content'
import { Grid } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#e65715',
  },
  menu: {
    marginBottom : '5%'
  },
});

function App() {
  const classes = useStyles();
  return (
    <Grid container direction="column" className = {classes.root} >
     <Grid item className = {classes.menu}> 
     <ButtonAppBar/>
     </Grid>   
     <Grid item container>
     <Content/>
     </Grid>
    </Grid>
  );
}

export default App;

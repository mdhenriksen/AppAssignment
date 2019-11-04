import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginLeft: 20
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button variant='contained' className={classes.title} component={ Link } to='/list'>See companies</Button>
          <Button variant='contained' className={classes.title} component={ Link } to='/create'>Create company</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './styles';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  ...state.commonsReducer,
});

export const Preloader = connect(mapStateToProps)(({ loading }) => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
});


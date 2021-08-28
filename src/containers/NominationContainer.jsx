import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import NominationItem from '../components/NominationItem';
import MoviesStore from '../store/moviesStore';

const useStyles = makeStyles(() => ({
  div: {
    textAlign: 'center',
    fontFamily: '"Gill Sans", sans-serif;',
    animation: '$fade-in-down 0.5s ease-out',
  },
  h1: {
    fontFamily: '"Gill Sans", sans-serif;',
    animation: '$fade-in-down 0.5s ease-out',
  },
  movie: {
    animation: '$fade-in-down 0.5s ease-out',
  },
  '@keyframes fade-in-down': {
    '0%': {
      opacity: '0',
      transform: 'translateY(-10px)',
    },
    '100%': {
      opacity: '1',
      transform: 'translateY(0)',
    },
  },
}));
export default function NominationContainer() {
  const classes = useStyles();
  const { state } = useContext(MoviesStore);

  return (
    <Grid container spacing={2}>
      <h1 className={classes.h1}>Nominated Movies</h1>
      {!state.nominationList.length < 1 ? (
        state.nominationList.map((movie) => (
          <Grid className={classes.movie} key={movie.Poster} item xs={12}>
            <NominationItem movie={movie} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <h3 className={classes.div}>No Movies</h3>
        </Grid>
      )}
    </Grid>
  );
}

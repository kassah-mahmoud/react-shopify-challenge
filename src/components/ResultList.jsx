import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SkeletonLoader from './SkeletonLoader';

import MovieCard from './MovieCard';
import MoviesStore from '../store/moviesStore';

const useStyles = makeStyles(() => ({
  div: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
  },
}));
export default function ResultList() {
  const classes = useStyles();
  const { state } = useContext(MoviesStore);

  return (
    <div className={classes.div}>
      {!state.isLoading ? (
        state.movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            imdbID={movie.imdbID}
            Title={movie.Title}
            Poster={movie.Poster}
          />
        ))
      ) : (
        <SkeletonLoader />
      )}
    </div>
  );
}

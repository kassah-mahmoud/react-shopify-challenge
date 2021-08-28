import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';

import NominationItem from '../components/NominationItem';
import MoviesStore from '../store/moviesStore';

export default function NominationContainer() {
  const { state } = useContext(MoviesStore);

  return (
    <Grid container spacing={2}>
      {!state.nominationList.length < 1 ? (
        state.nominationList.map((movie) => (
          <Grid key={movie.Poster} item xs={12}>
            <NominationItem movie={movie} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <div>THERE IS NO MOVIE</div>
        </Grid>
      )}
    </Grid>
  );
}

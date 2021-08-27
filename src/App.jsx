import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MoviesProvider from './store/MoviesProvider';
import NominationContainer from './containers/NominationContainer';
import SearchList from './containers/SearchList';

function App() {
  return (
    <MoviesProvider>
      <Container>
        <Grid container>
          <Grid item md={5} sm={6} xs={12}>
            <NominationContainer />
          </Grid>
          <Grid item md={7} sm={6} xs={12}>
            <SearchList />
          </Grid>
        </Grid>
      </Container>
    </MoviesProvider>
  );
}

export default App;

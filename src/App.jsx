import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import MoviesProvider from './store/MoviesProvider';
import NominationContainer from './containers/NominationContainer';
import SearchList from './containers/SearchList';

const useStyles = makeStyles(() => ({
  h1: {
    textAlign: 'center',
    fontFamily: '"Gill Sans", sans-serif;',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <MoviesProvider>
      <h1 className={classes.h1}>Search For Movie and Nominate It</h1>
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

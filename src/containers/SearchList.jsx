import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import SearchInput from '../components/SearchInput';
import ResultList from '../components/ResultList';
import useFetch from '../hooks/useFetch';
// import MoviesStore from '../store/moviesStore';

const useStyles = makeStyles(() => ({
  div: {
    display: 'flex',
  },
}));
function SearchList() {
  const classes = useStyles();
  const [movie, setMovie] = useState('');
  useFetch(movie);

  return (
    <div>
      <SearchInput setMovie={setMovie} />
      <div className={classes.div}>
        <ResultList />
      </div>
    </div>
  );
}

export default SearchList;

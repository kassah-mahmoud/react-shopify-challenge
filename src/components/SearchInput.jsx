import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import debounce from 'lodash/debounce';
import useFetch from '../hooks/useFetch';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '70ch',
    },
  },
}));
function SearchInput() {
  const classes = useStyles();

  const [input, setInput] = useState('');
  function handleInput(e) {
    setInput(e.target.value);
  }

  const searchMovie = useFetch(input);

  function handleSubmit(e) {
    e.preventDefault();
    searchMovie();
  }

  useEffect(() => {
    const fetchSearchResults = debounce(() => {
      if (!input) return;
      searchMovie();
    }, 500);

    fetchSearchResults();
    return () => fetchSearchResults.cancel();
  }, [input, searchMovie]);

  return (
    <div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="filled-basic"
          label="Search"
          variant="filled"
          onChange={handleInput}
          value={input}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ width: '100px' }}
        >
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchInput;

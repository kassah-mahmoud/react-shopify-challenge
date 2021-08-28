import React from 'react';
import { makeStyles } from '@material-ui/core';
import SearchInput from '../components/SearchInput';
import ResultList from '../components/ResultList';

const useStyles = makeStyles(() => ({
  div: {
    display: 'flex',
  },
}));
function SearchList() {
  const classes = useStyles();

  return (
    <div>
      <SearchInput />
      <div className={classes.div}>
        <ResultList />
      </div>
    </div>
  );
}

export default SearchList;

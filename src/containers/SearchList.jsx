import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import SearchInput from "../components/SearchInput";
import ResultList from "../components/ResultList";

const useStyles = makeStyles(() => ({
  div: {
    display: "flex",
  },
}));
function SearchList() {
  const classes = useStyles();
  const [movie, setMovie] = useState("");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${movie}&apikey=5c6db327`)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.Search);
      });
  }, [movie]);

  return (
    <div>
      <SearchInput setMovie={setMovie} />
      <div className={classes.div}>
        <ResultList movieList={movieList} />
      </div>
    </div>
  );
}

export default SearchList;


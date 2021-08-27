import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";

const useStyles = makeStyles(() => ({
  div: {
    display: "flex",
    flexWrap: "wrap",
  },
}));
export default function ResultList({ movieList }) {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      {movieList ? (
        movieList.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
ResultList.propTypes = {
  movieList: PropTypes.func,
};

ResultList.defaultProps = {
  movieList: "",
};

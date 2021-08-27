import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "70ch",
    },
  },
}));
function SearchInput({ setMovie }) {
  const classes = useStyles();
  const [input, setInput] = useState("");
  function handleInput(e) {
    const inputValue = e.target.value;
    setInput(inputValue);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setMovie(input);
    setInput("");
  }
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
          style={{ width: "100px" }}
        >
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchInput;

SearchInput.propTypes = {
  setMovie: PropTypes.func,
};
SearchInput.defaultProps = {
  setMovie: "",
};


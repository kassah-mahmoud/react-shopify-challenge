import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    animation: "fade-in-down 0.5s ease-out ",
    margin: "10px",
  },
  "@keyframes fade-in-down": {
    "0%": {
      opacity: "0",
      transform: "translateY(-10px)",
    },
    "100%": {
      opacity: "1",
      transform: "translateY(0)",
    },
  },
});
function MovieCard({ movie }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          // height="140"
          image={`${movie.Poster}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.Title}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Nominate
        </Button>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
MovieCard.propTypes = {
  movie: PropTypes.func,
};

MovieCard.defaultProps = {
  movie: "",
};

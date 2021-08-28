import { useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import MoviesStore from '../store/moviesStore';
import actionsTypes from '../store/actionsTypes';

const API_KEY = '3d85689c';

function useFetch(searchWord) {
  const { dispatch } = useContext(MoviesStore);

  const searchMovies = useCallback(() => {
    const setLoading = (value) => {
      dispatch({
        type: actionsTypes.SET_LOADING,
        payload: value,
      });
    };

    setLoading(true);
    axios
      .get(`https://www.omdbapi.com/?s=${searchWord}&apikey=${API_KEY}`)
      .then((data) => {
        dispatch({
          type: actionsTypes.SET_MOVIES,
          payload: data.data.Search,
        });
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => setLoading(false));
  }, [dispatch, searchWord]);

  useEffect(() => {
    searchMovies();
  }, [searchMovies]);
  return searchMovies;
}

export default useFetch;

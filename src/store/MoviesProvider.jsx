import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';
import MoviesStore, { INIT_STATE } from './moviesStore';

const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  return (
    <MoviesStore.Provider value={{ state, dispatch }}>
      {children}
    </MoviesStore.Provider>
  );
};

MoviesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MoviesProvider;

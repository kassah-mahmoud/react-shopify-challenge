import actionsTypes from './actionsTypes';

const MAX_NOMINATED = 5;

function reducer(state, action) {
  switch (action.type) {
    case actionsTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case actionsTypes.SET_MOVIES:
      return {
        ...state,
        movies: action.payload ?? [],
      };

    case actionsTypes.ADD_TO_NOMINATION:
      if (state.nominationList?.length >= MAX_NOMINATED) {
        return state;
      }
      return {
        ...state,
        nominationList: [...state.nominationList, action.payload],
      };

    case actionsTypes.REMOVE_FROM_NOMINATION:
      return {
        ...state,
        nominationList: state.nominationList?.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };
    default:
      return state;
  }
}

export default reducer;

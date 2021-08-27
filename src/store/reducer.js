import actionsTypes from './actionsTypes';

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
      return {
        ...state,
        nominationList: [...state.nominationList, action.payload],
      };

    case actionsTypes.REMOVE_FROM_NOMINATION:
      return {
        ...state,
        nominationList: state.nominationList?.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
}

export default reducer;

import * as types from '../types';

const initialState = {
  kittens: [],
  loading: false,
  error: null,
};

const kittens = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_KITTENS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case types.GET_KITTENS_SUCCESS:
      return {
        ...state,
        loading: false,
        kittens: action.kittens,
      };
    case types.GET_KITTENS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
};

export default kittens;

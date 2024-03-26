import * as actionTypes from "../actionTypes";

const initialState = {
  hasError: false,
  isLoading: false,
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_FAILED:
      return { ...state, hasError: true, isLoading: false };
    case actionTypes.FETCH_USERS_PENDING:
      return { ...state, hasError: false, isLoading: true };
    case actionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        hasError: false,
        isLoading: false,
        users: action.payload
      };
    default:
      return state;
  }
};

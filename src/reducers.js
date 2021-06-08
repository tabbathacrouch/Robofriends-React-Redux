import {
  CHANGE_SEARCH_FIELD,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from "./actions";

const initialState = {
  searchField: "",
};

export const searchRobots = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: payload };
    default:
      return state;
  }
};

const robotInitialState = {
  pending: false,
  robots: [],
  error: null,
};

export const requestRobots = (state = robotInitialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        pending: false,
        robots: action.payload,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

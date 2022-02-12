import { GET_DOGS, SEARCH_DOG } from "../actions";

const initialState = {
  dogs: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload.data,
      };
    case SEARCH_DOG:
      return {
        ...state,
        dogs: action.payload.data,
      };
    default:
      return {
        state,
      };
  }
}

import { successAction, failureAction } from "../types";
import { GET_POSTS, UPDATE_POST } from "../constants.js";

const initialState = {
  data: []
};

export default function Posts(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state
      };
    case successAction(GET_POSTS):
      return {
        data: action.payload
      };
    case failureAction(GET_POSTS):
      return {
        ...state,
        error: action.error
      };
    case successAction(UPDATE_POST):
      return {
        ...action.payload
      };

    default:
      return state;
  }
}

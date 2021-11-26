import { GET_POST_ERROR } from "../actions/post.action";
import { GET_USER_ERROR } from "../actions/user.actions";

const initialState = { userErrors: [], postErrors: [] };

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POST_ERROR:
      return {
        postErrors: action.payload,
        userErrors: [],
      };
    case GET_USER_ERROR:
      return {
        userErrors: action.payload,
        postErrors: [],
      };

    default:
      return state;
  }
}

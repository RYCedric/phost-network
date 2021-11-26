import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import usersReducer from "./users.reducer";
import postsReducer from "./post.reducer";
import errorReducer from "./error.reducer";
import allPostsReducer from "./allPosts.reducer";
import trendingReducer from "./trending.reducer";

export default combineReducers({
  userReducer,
  usersReducer,
  postsReducer,
  errorReducer,
  allPostsReducer,
  trendingReducer,
});

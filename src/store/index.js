import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { postsReducer } from "./posts";

const reducers = combineReducers({
  posts: postsReducer,
});

export default createStore(reducers, {}, applyMiddleware(thunk));

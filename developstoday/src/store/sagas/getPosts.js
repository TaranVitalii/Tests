import { takeLatest, call } from "redux-saga/effects";
import { getPosts } from "../../services";
import { GET_POSTS } from "../constants";
import makeAsyncRequest from "./makeAsyncRequest";

function* getAllPosts(mainAction) {
  const action = () => call(getPosts);

  yield makeAsyncRequest(action, GET_POSTS);
}

function* watchGetPost() {
  yield takeLatest(GET_POSTS, getAllPosts);
}

export default [watchGetPost];

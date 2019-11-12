import createSagaMiddleware from "redux-saga";
import { fork, all } from "redux-saga/effects";

import getPosts from "./getPosts";
import createPost from "./createPost";
import removePost from "./removePost";

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;
function* root() {
  const watchers = [getPosts, createPost, removePost].flat();
  yield all(watchers.map(fork));
}

export const run = () => sagaMiddleware.run(root);

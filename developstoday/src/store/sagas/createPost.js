import { takeLatest, call, select, put } from "redux-saga/effects";
import { createPost } from "../../services";
import { CREATE_POST, UPDATE_POST } from "../constants";
import { successAction } from "../types";

function* createOnePost(mainAction) {
  const action = yield call(createPost, mainAction.payload);
  const state = yield select();

  const data = [...state.posts.data, action.data];
  yield put({
    type: successAction(UPDATE_POST),
    payload: { data }
  });
}

function* watchCreatePost() {
  yield takeLatest(CREATE_POST, createOnePost);
}

export default [watchCreatePost];

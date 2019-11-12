import { takeLatest, call, select, put } from "redux-saga/effects";
import { removePost } from "../../services";
import { REMOVE_POST, UPDATE_POST } from "../constants";
import { successAction } from "../types";

function* removeOnePost(mainAction) {
  const action = yield call(removePost, mainAction.payload);
  const state = yield select();

  const data = state.posts.data.filter(item => item.id !== mainAction.payload);
  yield put({
    type: successAction(UPDATE_POST),
    payload: { data }
  });
}

function* watchRemoveCard() {
  yield takeLatest(REMOVE_POST, removeOnePost);
}

export default [watchRemoveCard];

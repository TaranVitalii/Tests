import { GET_POSTS, CREATE_POST, REMOVE_POST } from "../constants";

export function getPosts() {
  return {
    type: GET_POSTS
  };
}

export function createPost(data) {
  return {
    type: CREATE_POST,
    payload: data
  };
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    payload: id
  };
}

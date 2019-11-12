import axios from "axios";

export const getPosts = () =>
  axios.get("https://simple-blog-api.crew.red/posts");

export const createPost = value =>
  axios.post("https://simple-blog-api.crew.red/posts", value);

export const removePost = id =>
  axios.delete(`https://simple-blog-api.crew.red/posts/${id}`);

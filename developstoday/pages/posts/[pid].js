import React from "react";
import { useSelector } from "react-redux";
import PostData from "../../src/Components/PostData";
import Header from "../../src/Components/Header";
import { useRouter } from "next/router";

const Post = props => {
  const posts = useSelector(state => state.posts.data);
  const router = useRouter();
  const { pid } = router.query;
  const onePostFromArray = posts.filter(post => post.id === +pid);
  return (
    <>
      <Header />
      <PostData data={onePostFromArray[0]} />
    </>
  );
};

export default Post;

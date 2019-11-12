import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PostData from "./PostData";
import Link from "next/link";
import { connect, useSelector } from "react-redux";
import { getPosts, removePost } from "../store/actions/posts";

const Links = styled.a`
  cursor: default;
  text-decoration: none;
`;

function PostContainer({ url, getPosts, removePost }) {
  const posts = useSelector(state => state.posts.data);

  useEffect(() => {
    getPosts();
  }, [url]);

  const removePostHandler = id => {
    removePost(id);
  };

  console.log(posts);
  return (
    <div>
      {posts.map(post => {
        return (
          <Link href="/posts/[pid]" as={`/posts/${post.id}`} key={post.id}>
            <Links>
              <PostData data={post} remove={removePostHandler} />
            </Links>
          </Link>
        );
      })}
    </div>
  );
}

export default connect(
  null,
  { getPosts, removePost }
)(PostContainer);

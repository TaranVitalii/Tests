import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Headers = styled.div`
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
`;
const Links = styled.a`
  cursor: default;

  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 25px;
  line-height: 25px;
  border-radius: 4px;
`;
const RightDiv = styled.div`
  float: right;
`;

export default function Header() {
  return (
    <>
      <Headers>
        <Link href="/">
          <Links>Blog</Links>
        </Link>

        <RightDiv>
          <Link href="/">
            <Links>Home</Links>
          </Link>

          <Link href="/posts/new">
            <Links>Create new post</Links>
          </Link>
        </RightDiv>
      </Headers>
    </>
  );
}

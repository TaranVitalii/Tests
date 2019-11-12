import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  padding: 2px 16px;
  text-align: center;
  font-size: 45px;
`;

const BodyContainer = styled.div`
  padding: 2px 16px;
  text-align: center;
  font-size: 30px;
`;
const PostContainer = styled.div`
  align-items: stretch;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 90%;
  margin-left: 5%;
  margin-top: 2%;
  border-radius: 7px;
  min-height: 70px;
`;
const RemoveButton = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
`;

export default function PostData({ data, remove }) {
  const { title, body, id } = data;
  return (
    <PostContainer>
      <TitleContainer>{title}</TitleContainer>
      <BodyContainer>{body}</BodyContainer>
      <RemoveButton
        onClick={e => {
          remove(id);
        }}
      >
        Remove
      </RemoveButton>
    </PostContainer>
  );
}

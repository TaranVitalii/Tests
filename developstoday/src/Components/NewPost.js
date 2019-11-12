import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createPost } from "../store/actions/posts";
import Header from "./Header";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 90%;
  margin-left: 5%;
  margin-top: 2%;
`;
const TitleContainer = styled.div`
  padding: 2px 16px;
  text-align: center;
  font-size: 35px;
  order: 1;
`;

const BodyContainer = styled.div`
  padding: 2px 16px;
  text-align: center;
  font-size: 25px;
  order: 1;
`;

const InputData = styled.input`
  border: 2px double black;
  margin-left: 40px;
  border-radius: 7px;
  width: 90%;
  height: 30px;
  font-size: 25px;
  order: 1;
`;

const ButtonSubmit = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  font-size: 25px;
  order: 1;
`;

function NewPost({ createPost }) {
  const [title, setTitle] = useState("enter title");
  const [body, setBody] = useState("enter body");

  const changeTitle = e => {
    setTitle(e.target.value);
  };
  const changeBody = e => {
    setBody(e.target.value);
  };

  const handlerClick = e => {
    createPost({ body, title });
  };

  return (
    <>
      <Header />
      <MainContainer>
        <TitleContainer>{title}</TitleContainer>
        <InputData onChange={changeTitle} />
        <BodyContainer>{body}</BodyContainer>
        <InputData onChange={changeBody} />
        <ButtonSubmit onClick={handlerClick}>Submit</ButtonSubmit>
      </MainContainer>
    </>
  );
}

export default connect(
  null,
  { createPost }
)(NewPost);

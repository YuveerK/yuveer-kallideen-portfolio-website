import React from "react";
import styled from "styled-components";
import Stack from "./page components/Stack";
import html from "../img/html.png";
import css from "../img/css.png";
import php from "../img/php.png";
import javascript from "../img/js.png";
import java from "../img/java.png";
import mysql from "../img/sql.png";
import mongo from "../img/mongo.png";
import react from "../img/react.png";
import react_native from "../img/react-native.png";
import nodejs from "../img/node.png";
import npm from "../img/npm.png";
import yarn from "../img/yarn.jpg";
import github from "../img/github.png";
import Title from "./page components/Title";
const TechStack = () => {
  return (
    <TechStackContainer>
      <Title title={"Tech Stack"} />
      <div className="content-container">
        <Stack image={html} />
        <Stack image={css} />
        <Stack image={php} />
        <Stack image={javascript} />
        <Stack image={java} />
        <Stack image={mysql} />
        <Stack image={mongo} />
        <Stack image={react} />
        <Stack image={react_native} />
        <Stack image={nodejs} />
        <Stack image={npm} />
        <Stack image={yarn} />
        <Stack image={github} />
      </div>
    </TechStackContainer>
  );
};

const TechStackContainer = styled.div`
  width: 100%;
  padding: 20px;
  .content-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;
export default TechStack;

import React from "react";
import styled from "styled-components";
function Title({ title, id }) {
  return (
    <TitleContainer>
      <div className="title-content-container" id={id}>
        <h1>{title}</h1>
        <div className="underline"></div>
      </div>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  .title-content-container {
    display: flex;
    flex-direction: column;
    .underline {
      width: 40%;
      height: 5px;
      border-radius: 50vw;
      background: rgb(0, 123, 255);
      background: radial-gradient(
        circle,
        rgba(0, 123, 255, 1) 40%,
        rgba(7, 0, 46, 1) 100%
      );
    }

    h1 {
      font-size: 3rem;
      font-weight: 400;
      color: black;
    }
  }
`;
export default Title;

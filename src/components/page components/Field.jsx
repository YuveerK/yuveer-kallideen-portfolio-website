import React from "react";
import styled from "styled-components";
function Field({ title, description }) {
  return (
    <FieldContainer>
      <div className="title">
        <h2>{title}</h2>
      </div>

      <div className="description">
        <h3>{description}</h3>
      </div>
    </FieldContainer>
  );
}

const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .title {
    width: 50%;
    h2 {
      font-weight: 400;
      color: black;
    }
  }
  .description {
    width: 50%;
    display: flex;
    justify-content: left;
    text-align: left;

    h3 {
      font-weight: 300;
      color: black;
    }
  }
`;

export default Field;

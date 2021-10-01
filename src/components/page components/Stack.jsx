import React from "react";
import styled from "styled-components";
const Stack = ({ image }) => {
  return (
    <StackImage>
      <img src={image} alt="" />
    </StackImage>
  );
};

const StackImage = styled.div`
  width: 100px;
  height: 100px;
  margin: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export default Stack;

import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import css from "../../img/css.png";

const CarouselComponent = () => {
  return (
    <Container>
      <Carousel>
        <div className="slide">
          <img src={css} alt="" />
        </div>

        <div className="slide">
          <img src={css} alt="" />
        </div>
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  .slide {
    width: 50px;
    height: 100px;
    background-color: yellow;

    img {
      width: 400px;
      height: 400px;
      object-fit: cover;
    }
  }
`;
export default CarouselComponent;

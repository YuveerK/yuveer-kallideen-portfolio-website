import React from "react";
import styled from "styled-components";
import Card from "./page components/Card";
import Carousel from "./page components/CarouselComponent";
import Title from "./page components/Title";
function Services() {
  return (
    <ServicesContainer>
      <Title title="Services" id="services" />

      <div className="services-card-container">
        <Card
          icon="fas fa-tachometer-alt"
          heading="Fast"
          description="Fast load times and lag free interaction, my highest priority."
        />
        <Card
          icon="fas fa-desktop"
          heading="Responsive"
          description="My layouts will work on any device, big or small."
        />
        <Card
          icon="far fa-lightbulb"
          heading="Intuitive"
          description="Strong preference for easy to use, intuitive UX/UI."
        />
        <Card
          icon="fas fa-rocket"
          heading="Dynamic"
          description="Websites don't have to be static, I love making pages come to life."
        />
      </div>
    </ServicesContainer>
  );
}

const ServicesContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px;
  margin-bottom: 60px;

  .carosel {
    width: 100%;
    height: fit-content;
    padding: 20px;
    background-color: red;
  }

  .services-card-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export default Services;

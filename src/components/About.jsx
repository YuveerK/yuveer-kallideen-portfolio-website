import React from "react";
import styled from "styled-components";
import me from "../img/my-story.jpg";
import Field from "./page components/Field";
import Title from "./page components/Title";

function About() {
  return (
    <AboutContainer>
      <Title title="About Me" id="about" />

      <div className="content-container">
        <div className="left-content">
          <img src={me} alt="" />
        </div>

        <div className="right-content">
          <span>Yuveer Kallideen</span>
          <p>
            Recent graduate from Monash South Africa, double majoring in
            Computer Networks and Security + Software development. I am an
            energetic person with a desire to learn and always willing to gain
            any relevant knowledge, skills or experience that will improve my
            overall ability to perform my role competently. My goal is to become
            a qualified software or a full stack developer as it allows me to
            continuously challenge myself, my inner creativity and improve my
            skills and knowledge.
          </p>

          <div className="details-container">
            <Field title="Age" description=": 23" />
            <Field title="Nationality" description=": South African" />
            <Field title="Languages" description=": English (Native)" />
            <Field title="Location" description=": Roodepoort, Gauteng" />
            <Field title="Driver's License" description=": Code 8" />
          </div>
          <div className="button">
            <a href="/cv.pdf" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 60px;
  padding: 20px;

  .content-container {
    display: flex;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: fit-content;
    margin-top: 50px;

    @media (max-width: 1180px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .left-content {
      width: 40%;
      height: 600px;
      border: 8px solid #07002e;
      background-color: yellow;
      @media (max-width: 1180px) {
        width: auto;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .right-content {
      margin-left: 20px;
      width: 60%;
      justify-content: center;
      display: flex;
      flex-direction: column;
      @media (max-width: 1180px) {
        width: 100%;
        margin-left: 0;
      }
      span {
        font-size: 4rem;
        color: #007bff;
        text-align: center;

        @media (max-width: 1180px) {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .details-container {
        width: 700px;
        height: fit-content;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        margin-bottom: 15px;
        @media (max-width: 1180px) {
          width: 100%;
        }
      }
      p {
        color: black;
      }

      .button {
        width: 80%;
        margin: auto;
        height: fit-content;
        display: flex;
        align-items: center;
        background-color: #362594;
        justify-content: center;

        a {
          text-decoration: none;
          color: white;
          padding: 20px;
        }
      }
    }
  }
`;

export default About;

import React from "react";
import styled from "styled-components";
function EducationCard({ date, title, location, description, marks }) {
  return (
    <EducationContainer>
      <div className="left-side">
        <div className="date">
          <p>{date}</p>
          <div className="middle"></div>
        </div>
      </div>

      <div className="right-side">
        <div className="title">
          <h1>{title}</h1>
        </div>

        <div className="location">
          <h3>{location}</h3>
        </div>

        <div className="description">
          <p>{description}</p>

          <p>{marks}</p>
        </div>
      </div>
    </EducationContainer>
  );
}

const EducationContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  border-left: 2px solid black;

  .left-side {
    width: 30%;
    display: flex;

    .date {
      width: 100%;
      height: fit-content;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding: 10px;
      position: relative;
      margin-left: 15px;
      p {
        color: black;
      }

      .middle {
        width: 50%;
        height: 3px;
        background-color: black;
      }
    }
  }

  .right-side {
    width: 95%;
    margin-bottom: 50px;

    .title {
      h1 {
        color: #007bff;
      }
    }

    .description {
      p {
        color: black;
      }
    }

    .location {
      h3 {
        color: lightgray;
      }
    }
  }
  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #07002e;
    left: 0;
    top: 10px;
    transform: translateX(-50%);
    border-radius: 50vw;
    border: 1px solid lightgray;
  }
`;

export default EducationCard;

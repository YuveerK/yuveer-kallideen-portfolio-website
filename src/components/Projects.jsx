import React from "react";
import styled from "styled-components";
import Title from "./page components/Title";
import covid from "../img/covid.jpg";
import microsoft from "../img/ms.jpg";
import redapp from "../img/redapp.PNG";
import mars from "../img/mars.jpg";
function Projects() {
  return (
    <ProjectsContainer>
      <Title title="My Projects" id="projects" />

      <div className="projects-card-container">
        <div className="project-card">
          <div className="project-image">
            <img src={covid} alt="" />

            <div className="project-card-hover">
              <a
                href="https://github.com/YuveerK/covid-19-tracker"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>

              <a
                href="https://covid-19-tracker-za.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fas fa-globe-africa"></i>
              </a>
            </div>
          </div>

          <div className="project-title">
            <h3>COVID-19 Tracker</h3>
          </div>

          <div className="project-description">
            <p>
              A tracker which allows you to find COVID-19 and Vaccine statistics
              for any country in the world.
            </p>
          </div>

          <div className="project-technologies">
            <p>React</p>
            <p>Styled Components</p>
            <p>Netlify</p>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={microsoft} alt="" />

            <div className="project-card-hover">
              <a href="#" target="_blank" rel="noreferrer">
                <i class="fab fa-github"></i>
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                <i class="fas fa-globe-africa"></i>
              </a>
            </div>
          </div>

          <div className="project-title">
            <h3>Microsoft Clone</h3>
          </div>

          <div className="project-description">
            <p>Microsoft Website Clone</p>
          </div>

          <div className="project-technologies">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={redapp} alt="" />

            <div className="project-card-hover">
              <a
                href="https://github.com/YuveerK/redapp-final-build"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>

          <div className="project-title">
            <h3>The Red App</h3>
          </div>

          <div className="project-description">
            <p>
              A tele-medicine application that aims to allow doctors to have
              virtual consultations with patients.
            </p>
          </div>

          <div className="project-technologies">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>PHP</p>
            <p>MySQL</p>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={mars} alt="" />

            <div className="project-card-hover">
              <a
                href="https://github.com/YuveerK/mars-explore"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>

          <div className="project-title">
            <h3>Mars Explorer</h3>
          </div>

          <div className="project-description">
            <p>
              A mobile app for both iOS and Android that allows you to view
              images captured from the rovers that are or have been on Mars
            </p>
          </div>

          <div className="project-technologies">
            <p>React Native</p>
          </div>
        </div>
      </div>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px;
  margin-bottom: 60px;

  .projects-card-container {
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 30px;

    .project-card {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 400px;
      height: 500px;
      margin: 15px;
      background-color: #07002e;
      padding: 20px;
      position: relative;
      border-radius: 20px;

      .project-image {
        width: 100%;
        height: 50%;
        position: relative;

        .project-card-hover {
          display: none;
          transition: 1s ease-in-out;
        }

        &:hover {
          .project-card-hover {
            display: block;
            position: absolute;
            transition: 1s ease-in-out;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #071044cc;
            display: flex;
            align-items: center;
            justify-content: center;
            a {
              i {
                z-index: 999;
                color: #007bff;
                font-size: 4rem;
                margin-left: 20px;
              }
            }
          }
        }

        img {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          object-fit: cover;
        }
      }

      .project-title {
        margin: 20px 0;
      }

      .project-description {
      }

      .project-technologies {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        p {
          margin: 5px 10px;
          background-color: #007bff;
          padding: 5px;
          font-size: 10px;
        }
      }
    }
  }
`;

export default Projects;

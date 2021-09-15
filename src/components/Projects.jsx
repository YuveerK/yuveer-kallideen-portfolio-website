import React from 'react'
import styled from 'styled-components'
import Title from './page components/Title';
import covid from "../img/covid-project.PNG"

function Projects() {
    return (
        <ProjectsContainer>
            <Title title="My Projects" />


            <div className="projects-card-container">
                <div className="project-card">
                    <div className="project-image">
                        <img src={covid} alt="" />

                        <div className="project-card-hover">
                            <a href="https://github.com/YuveerK/covid-19-tracker" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>

                            <a href="https://covid-19-tracker-za.netlify.app/" target="_blank">
                                <i class="fas fa-globe-africa"></i>
                            </a>
                        </div>

                    </div>

                    <div className="project-title">
                        <h3>COVID-19 Tracker</h3>
                    </div>

                    <div className="project-description">
                        <p>A tracker which allows you to find COVID-19 and Vaccine statistics for any country in the world.</p>
                    </div>


                </div>
            </div>
        </ProjectsContainer>
    )
}

const ProjectsContainer = styled.div`
    width: 100%;
    height: fit-content;
    padding: 20px;
    background-color: #251c55;
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
            height: fit-content;
            background-color: #07002e;
            padding: 20px;
            
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
                    object-fit: cover;
                }
            }
        }
    }


`;

export default Projects

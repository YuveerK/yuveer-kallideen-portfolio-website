import React from "react";
import styled from "styled-components";
import Title from "./page components/Title";
import certification_1 from "../img/microsoft_cert.png";
const Certifications = () => {
  return (
    <CertificationsContainer>
      <div className="certification__content__container">
        <Title title={"Certifications"} id={"certifications"} />

        <div className="card">
          <div className="title">
            <h1>
              Microsoft Technology Associate: Database Fundamentals - Certified
              2022
            </h1>
          </div>

          <div className="image__container">
            <img
              src={certification_1}
              alt=""
              style={{
                width: 300,
                height: 300,
                objectFit: "contain",
                marginTop: "1rem",
              }}
            />
          </div>
        </div>
      </div>
    </CertificationsContainer>
  );
};

const CertificationsContainer = styled.div`
  width: 100%;
  padding: 20px;
  height: fit-content;
  margin-bottom: 60px;

  .certification__content__container {
    .card {
      width: 400px;
      height: auto;
      border: 1px solid black;
      margin-top: 2rem;
      .title {
        padding: 1rem;
        h1 {
          color: black;
          text-align: center;
          font-weight: 300;
        }
      }

      .image__container {
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
      }
    }
  }
`;
export default Certifications;

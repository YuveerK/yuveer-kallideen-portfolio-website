import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

function Intro() {
  return (
    <IntroContainer>
      <div className="content-container">
        <h1>
          Hi, I'm <span>Yuveer Kallideen</span>{" "}
        </h1>

        <h1>
          Aspiring<span className="roles"><Typewriter
              options={{
                strings: ["Software Developer", "Full Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
      </div>
    </IntroContainer>
  );
}
const IntroContainer = styled.div`
  width: 100%;
  height: calc(100vh + 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .content-container {
    max-width: 80%;
    margin: auto;
    text-align: center;

    .roles {
        font-weight: 300;
        span {
                color: white;

        }
    }
  }
  h1 {
    font-size: 3rem;

    span {
      font-size: 4rem;
      color: #362594;
    }
  }
`;

export default Intro;

import React, { useState } from "react";
import styled from "styled-components";
function Header() {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }
  console.log(open);
  return (
    <HeaderContainer>
      <div className="left">
        <h1 className="title">portfolio.</h1>
      </div>

      <div className="center">
        <ul>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#services">services</a>
          </li>
          <li>
            <a href="#resume">resume</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
        </ul>
      </div>

      <div className="right">
        <a href="https://www.facebook.com/yuveer.kallideen/" target="_blank" rel="noreferrer">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/UvKal_zA" target="_blank" rel="noreferrer">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/uvkal_za/" target="_blank" rel="noreferrer">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/YuveerK" target="_blank" rel="noreferrer">
          <i class="fab fa-github"></i>
        </a>
      </div>

      <div
        className={open ? "hamburger open" : "hamburger"}
        onClick={() => toggle()}
        id="hamburger"
      >
        <span class="line1"></span>
        <span class="line2"></span>
        <span class="line3"></span>
      </div>

      <div
        className={open ? "side-menu open" : "side-menu"}
        onClick={() => toggle()}
      >
        <div className="side-container">
          <ul>
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#about">
              <li>About Me</li>
            </a>
            <a href="#services">
              <li>My Services</li>
            </a>
            <a href="#resume">
              <li>Resume</li>
            </a>
            <a href="#projects">
              <li>My Projects</li>
            </a>
          </ul>
        </div>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  position: fixed;
  left: 0;
  background-color: #251c55;

  .side-menu {
    width: 80%;
    height: 100vh;
    position: fixed;
    background-color: red;
    z-index: 10000000;
    right: -100%;
    top: 80px;
    transition: 0.2s ease-in-out;

    .side-container {
      width: 100%;
      height: 100%;
      background-color: #251c55;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow-y: scroll;

      a {
        text-decoration: none;
        font-size: 2rem;
        padding: 20px;
        li {
          list-style: none;
        }
      }
    }
  }

  .side-menu.open {
      right: 0;
  }
  .left {
  }

  .center {
    @media (max-width: 700px) {
      display: none;
    }
    ul {
      display: flex;
      align-items: center;

      li {
        list-style: none;

        a {
          text-decoration: none;
          margin-left: 15px;

          &:hover {
            border-bottom: 1px solid white;
          }
        }
      }
    }
  }

  .right {
    @media (max-width: 700px) {
      display: none;
    }
    i {
      font-size: 2.3rem;
      margin: 10px;

      &:hover {
        color: #007bff;
      }
    }
  }

  .hamburger {
    @media (max-width: 700px) {
        display: flex;
    }
    width: 32px;
    height: 25px;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    span {
      width: 100%;
      height: 3px;
      background-color: white;
      transform-origin: left;
      transition: all 0.5s ease;
    }
  }

  .hamburger.open > span:first-child {
    background-color: white;
    transform: rotate(45deg);
  }

  .hamburger.open > span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.open > span:last-child {
    background-color: white;
    transform: rotate(-45deg);
  }
`;

export default Header;

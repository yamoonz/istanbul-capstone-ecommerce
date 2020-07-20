import React from "react";
import clock from "./video-clock.mov";
import { Button } from "react-bootstrap";
import "./index.css";

export default function Header() {
  return (
    <div className="header container">
      <div className="video-wrap">
        <video src={clock} autoPlay={true} loop={true}></video>
      </div>
      <div className="header-overlay"></div>
      <div className="header-content">
        <div className="line-wrapper">
          <p className="line mt-4"></p>
        </div>
        <div className="content">
          <h1>We Care About Your Health</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
          <div className="middle-buttons">
            <Button
              variant="info"
              style={{
                backgroundColor: "#485181",
                borderColor: "#485181",
                paddingLeft: "2rem",
                paddingRight: "2rem",
              }}
            >
              Get Started
            </Button>
            <Button
              variant="secondary"
              className="ml-5"
              style={{
                backgroundColor: "#C3C9EB",
                borderColor: "#C3C9EB",
                color: "#485181",
                paddingLeft: "3rem",
                paddingRight: "3rem",
              }}
            >
              SignUp
            </Button>
          </div>
        </div>
        <div className="bottom-buttons">
          <ul>
            <li>Fast shipping</li>
            <li className="ml-5">Education</li>
            <li className="ml-5">Healthy life</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

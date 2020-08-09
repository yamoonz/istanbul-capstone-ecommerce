import React from "react";
import clock from "../../assets/video-clock.mov";
import { Button } from "react-bootstrap";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header container">
      <div className="videoWrap">
        <video src={clock} autoPlay={true} loop={true}></video>
      </div>
      <div className="headerOverlay"></div>
      <div className="headerContent">
        <div className="lineWrapper">
          <p className="whiteLine mt-4"></p>
        </div>
        <div className="headerTextContent">
          <h1 className="headerTitle">We Care About Your Health</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
          <div className="middleButtons">
            <Button variant="info" className="buttonGetStarted">
              Get Started
            </Button>
            <Button variant="secondary" className="ml-5 buttonSignUp">
              Sign Up
            </Button>
          </div>
        </div>
        <div className="bottomButtons">
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

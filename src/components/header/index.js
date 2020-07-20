import React, { useState } from "react";
import clock from "./video-clock.mov";
import { Button } from "react-bootstrap";
import filled from "./circle-16.png";
import notfilled from "./circle-outline-16.png";
import "./index.css";

export default function Header() {
  const [contentIndex, setContentIndex] = useState(1);

  const handleCircleClick = (index) => {
    setContentIndex(index);
  };

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
        {contentIndex === 1 && (
          <div className="content">
            <h1>We Care About Your Health</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
            <div>
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
        )}
        <div className="circle-wrapper">
          <div className="circle" onClick={() => handleCircleClick(1)}>
            <img src={contentIndex === 1 ? filled : notfilled} alt="" />
          </div>
          <div className="circle" onClick={() => handleCircleClick(2)}>
            <img src={contentIndex === 2 ? filled : notfilled} alt="" />
          </div>
          <div className="circle" onClick={() => handleCircleClick(3)}>
            <img src={contentIndex === 3 ? filled : notfilled} alt="" />
          </div>
          <div className="circle" onClick={() => handleCircleClick(4)}>
            <img src={contentIndex === 4 ? filled : notfilled} alt="" />
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
      {/* <div className="header-content row">
        <div className="row">
          <div className="col-1">
            <p className="line mt-4"></p>
          </div>
          <div className="col-7">
            <h1>We Care About Your Health</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
            <div className="mt-4">
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
          <div className="col-4 d-flex align-items-center justify-content-end">
            <div className="circles">
              <div>
                <img src={filled} alt="" />
              </div>
              <div>
                <img src={notfilled} alt="" />
              </div>
              <div>
                <img src={notfilled} alt="" />
              </div>
              <div>
                <img src={notfilled} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ width: "100%" }}>
          <div className="col-2">Fast shipping</div>
          <div className="col-2">Education</div>
          <div className="col-2">Healthy life</div>
        </div>
      </div> */}
    </div>
  );
}

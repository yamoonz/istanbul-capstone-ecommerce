import React from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import "./NoMatch.scss";

const NoMatch = () => {
  const history = useHistory();
  return (
    <div className="noMatchWrapper">
      <div className="noMatchText">Seems like something went wrong!</div>
      <Button className="backToHomepage" onClick={() => history.push("/")}>
        Go to Homepage
      </Button>
    </div>
  );
};

export default NoMatch;

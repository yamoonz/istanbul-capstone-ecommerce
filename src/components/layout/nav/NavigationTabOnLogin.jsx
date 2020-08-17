import React from "react";
import "./NavigationTabOnLogin.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut, popUpStatus } from "../../redux/actions/index";

const NavigationTabOnLogin = () => {
  const history = useHistory();
  const isAdmin = useSelector((state) => state.authentication.isAdmin);
  const dispatch = useDispatch();
  const loggingOut = () => {
    dispatch(logOut());
    isAdmin && history.push("/");
    dispatch(popUpStatus(true));
  };

  const profilePageListItem = (
    <NavLink to="/profile">
      <Col className="loggedInBoxItems profilePageItemContainer">
        <Col xl={2} lg={2} md={2} sm={2} xs={2}>
          <i className="fas fa-id-card-alt profilePageIcon"></i>
        </Col>
        <Col>Profile Page</Col>
      </Col>
    </NavLink>
  );

  const adminPageListItem = (
    <NavLink to="/dashboard">
      <Col className="loggedInBoxItems profilePageItemContainer">
        <Col xl={2} lg={2} md={2} sm={2} xs={2}>
          <i className="fas fa-user-shield adminPageIcon"></i>
        </Col>
        <Col>Admin Panel</Col>
      </Col>
    </NavLink>
  );

  const logOutListItem = (
    <Col className="loggedInBoxItems logOutIconContainer" onClick={loggingOut}>
      <Col xl={2} lg={2} md={2} sm={2} xs={2}>
        <i className="fas fa-window-close logOutIcon"></i>
      </Col>
      <Col>Log Out</Col>
    </Col>
  );

  return (
    <Container className="loggedInBox">
      {isAdmin ? adminPageListItem : profilePageListItem}
      {logOutListItem}
    </Container>
  );
};

export default NavigationTabOnLogin;

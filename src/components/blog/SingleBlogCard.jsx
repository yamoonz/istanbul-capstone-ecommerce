import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function SingleBlogCard(props) {
  const renderCard = (
    <Card>
      <NavLink
        to={{
          pathname: `/blog/${props.post.title.rendered}`,
          state: props.post,
        }}
        exact
        className="postImageWrapper"
      >
        <Card.Img variant="top" src={props.post.jetpack_featured_media_url} />
      </NavLink>

      <Card.Body>
        <Card.Title>
          <NavLink
            to={{
              pathname: `/blog/${props.post.title.rendered}`,
              state: props.post,
            }}
            exact
          >
            {props.post.title.rendered}
          </NavLink>
        </Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Text
          dangerouslySetInnerHTML={{
            __html: props.post.excerpt.rendered,
          }}
        ></Card.Text>
      </Card.Body>
      <Card.Body className="buttonContainer">
        <NavLink
          to={{
            pathname: `/blog/${props.post.title.rendered}`,
            state: props.post,
          }}
          exact
          className="buttonReadMoreWrapper"
        >
          <Button variant="info" className="buttonReadMore">
            Read more
          </Button>
        </NavLink>
      </Card.Body>
    </Card>
  );

  return (
    <Col xs={12} md={5} lg={3} className="overviewCardCol">
      {renderCard}
    </Col>
  );
}

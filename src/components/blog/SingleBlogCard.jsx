import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function SingleBlogCard(props) {
  console.log(props.post.jetpack_featured_media_url);
  const renderCard = (
    <Card>
      <Card.Img variant="top" src={props.post.jetpack_featured_media_url} />

      <Card.Body>
        <Card.Title>{props.post.title.rendered}</Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Text
          dangerouslySetInnerHTML={{
            __html: props.post.excerpt.rendered,
          }}
        ></Card.Text>
      </Card.Body>
      <Card.Body>
        <NavLink
          to={{
            pathname: `/blog/${props.post.title.rendered}`,
            state: props.post,
          }}
          exact
        >
          <Button>Read more</Button>
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

import React from "react";
import { Col, Card, Button } from "react-bootstrap";

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
        <Button>Read more</Button>
      </Card.Body>
    </Card>
  );

  return (
    <Col xs={12} md={5} lg={3} className="overviewCardCol">
      {renderCard}
    </Col>
  );
}

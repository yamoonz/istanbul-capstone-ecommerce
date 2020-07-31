import React from "react";
import { Col, Card, Button, ListGroupItem, ListGroup } from "react-bootstrap";

export default function SingleBlogCard(props) {
  const renderCard = (
    <Card>
      {props.blogImage && (
        <Card.Img variant="top" src={props.blogImage.source_url} />
      )}
      <Card.Body>
        <Card.Title>{props.blog.title.rendered}</Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Text
          dangerouslySetInnerHTML={{
            __html: props.blog.excerpt.rendered.substring(0, 100) + " ...",
          }}
        ></Card.Text>
      </Card.Body>
      <Card.Body>
        <Button>Read more</Button>
      </Card.Body>
    </Card>
  );

  return (
    <Col xs={12} md={5} lg={3}>
      {renderCard}
    </Col>
  );
}

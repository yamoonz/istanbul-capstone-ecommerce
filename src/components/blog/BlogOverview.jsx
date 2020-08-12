import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleBlogCard from "./SingleBlogCard";
import "./style.overview.scss";
import BlogHeader from "./BlogHeader";
import { POSTS, MEDIA } from "../common/posts";

export default function BlogOverview() {
  return (
    <>
      <BlogHeader allPosts={POSTS} postImage={MEDIA[0]} />
      <Container className="overviewContainer">
        <Row>
          {POSTS.map((post, index) => (
            <SingleBlogCard post={post} postImage={MEDIA[index]} />
          ))}
        </Row>
      </Container>
    </>
  );
}

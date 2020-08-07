import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SingleBlogCard from "./SingleBlogCard";
import "./style.overview.scss";
import BlogHeader from "./BlogHeader";

export default function BlogOverview() {
  const [allPosts, setAllPosts] = useState([]);
  const [postsImages, setPostsImages] = useState([]);

  // All posts from wordpress
  const getAllPostsAndImages = async () => {
    const posts = await fetch("http://eecommerce.local/wp-json/wp/v2/health");
    const postsMedia = await fetch(
      "http://eecommerce.local/wp-json/wp/v2/media"
    );

    const postsToJson = await posts.json();
    const mediaToJson = await postsMedia.json();

    setAllPosts(postsToJson);
    setPostsImages(mediaToJson);
  };

  useEffect(() => {
    getAllPostsAndImages();
  }, []);

  return (
    <>
      <BlogHeader allPosts={allPosts} postImage={postsImages[0]} />
      <Container className="overviewContainer">
        <Row>
          {allPosts.map((post, index) => (
            <SingleBlogCard post={post} postImage={postsImages[index]} />
          ))}
        </Row>
      </Container>
    </>
  );
}

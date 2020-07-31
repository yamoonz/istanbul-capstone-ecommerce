import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SingleBlogCard from "./SingleBlogCard";
import "./style.overview.scss";
import BlogHeader from "./BlogHeader";

export default function BlogOverview() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogsImages, setBlogsImages] = useState([]);

  // To all of our data from wordpress

  const getAllBlogsAndImages = async () => {
    const blogs = await fetch("http://eecommerce.local/wp-json/wp/v2/health");
    const blogsMedia = await fetch(
      "http://eecommerce.local/wp-json/wp/v2/media"
    );

    const blogsToJson = await blogs.json();
    const mediaToJson = await blogsMedia.json();

    setAllBlogs(blogsToJson);
    setBlogsImages(mediaToJson);
  };

  useEffect(() => {
    getAllBlogsAndImages();
  }, []);

  return (
    <>
      <BlogHeader allBlogs={allBlogs} blogImage={blogsImages[0]} />
      <Container className="overviewContainer">
        <Row>
          {allBlogs.map((blog, index) => (
            <SingleBlogCard blog={blog} blogImage={blogsImages[index]} />
          ))}
        </Row>
      </Container>
    </>
  );
}

import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleBlogCard from "./SingleBlogCard";
import "./style.overview.scss";
import BlogHeader from "./BlogHeader";

export default function BlogOverview() {
  const [allPosts, setAllPosts] = React.useState([]);

  const getAllPosts = async () => {
    const data = await fetch(
      "https://public-api.wordpress.com/wp/v2/sites/ecommerce458750409.wordpress.com/posts"
    );
    const posts = await data.json();
    setAllPosts(posts);
  };

  console.log(allPosts);

  React.useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <BlogHeader posts={allPosts} />
      <Container className="overviewContainer">
        <h1>Recommended</h1>
        <Row className="overviewCardRow">
          {allPosts.map((post, index) => (
            <SingleBlogCard post={post} />
          ))}
        </Row>
      </Container>
    </>
  );
}

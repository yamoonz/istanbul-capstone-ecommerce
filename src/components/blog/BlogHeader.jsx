import React from "react";

export default function BlogHeader(props) {
  const latestPost = props.posts[0];

  return (
    <>
      {latestPost && (
        <div className="blogHeader">
          <div className="headerImgBox">
            <img
              className="headerImg"
              src={latestPost.jetpack_featured_media_url}
              alt="CardImage"
            />
            <h6>Me</h6>
            <h6>{latestPost.date}</h6>
          </div>
          <h1>{latestPost.title.rendered}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: latestPost.excerpt.rendered }}
            className="blogDescription"
          ></div>
          <a href="./blog" className="blogHeaderBtn">
            Read more
          </a>
        </div>
      )}
    </>
  );
}

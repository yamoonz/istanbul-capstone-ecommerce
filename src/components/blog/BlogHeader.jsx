import React from "react";

export default function BlogHeader(props) {
  const latestPosts = props.allPosts[0];
  const latestPostImage = props.postImage;

  return (
    <>
      {latestPostImage && (
        <div className="blogHeader">
          <div className="headerImgBox">
            <img
              className="headerImg"
              src={latestPostImage.source_url}
              alt="CardImage"
            />
            <h6>{latestPosts.acf.publisher}</h6>
            <h6>{latestPosts.date}</h6>
          </div>
          <h1>{latestPosts.title.rendered}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: latestPosts.excerpt.rendered }}
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

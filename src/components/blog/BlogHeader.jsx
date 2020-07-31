import React from "react";

export default function BlogHeader(props) {
  const latestBlog = props.allBlogs[0];
  const latestBlogImage = props.blogImage;

  return (
    <>
      {latestBlogImage && (
        <div className="blogHeader">
          <div className="headerImgBox">
            <img
              className="headerImg"
              src={latestBlogImage.source_url}
              alt="Card image cap"
            />
            <h6 className="blogInfo">{latestBlog.acf.publisher}</h6>
            <h6 className="blogInfo">{latestBlog.date}</h6>
          </div>
          <h1 className="blogTitle">{latestBlog.title.rendered}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: latestBlog.excerpt.rendered }}
            className="blogDescription"
          ></div>
          <a className="blogHeaderBtn">Read more</a>
        </div>
      )}
    </>
  );
}

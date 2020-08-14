import React from "react";
import { NavLink } from "react-router-dom";

export default function BlogOverviewHeader(props) {
  const latestPost = props.posts[0];

  if (!latestPost) {
    return null;
  }
  return (
    <>
      {
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
          <NavLink
            to={{
              pathname: `/blog/${latestPost.title.rendered}`,
              state: latestPost,
            }}
            exact
            className="blogHeaderBtn"
          >
            Read more
          </NavLink>
        </div>
      }
    </>
  );
}

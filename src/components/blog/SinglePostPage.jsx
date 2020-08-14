import React from "react";
import "./singlePostPage.scss";

export default function SinglePostPage(props) {
  const postProps = props.location.state;
  const title = postProps.title.rendered;
  const date = postProps.date.split("T")[0];
  const type = postProps.type;
  const content = postProps.content.rendered;
  // console.log(postProps);

  return (
    <div className="singlePostContainer">
      <h6 className="singlePostType">{type}</h6>
      <div className="singlePostHeader">
        <h1 className="singlePostTitle">{title}</h1>
        <h6 className="singlePostDate">{date}</h6>
      </div>
      <div>
        <img
          src={postProps.jetpack_featured_media_url}
          className="singlePostMainImg"
        />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="singlePostContent"
      />
    </div>
  );
}

import React from "react";
import "./singleBlogpage.scss";

export default function SingleBlogPage(props) {
  let title = props.content.title.rendered;
  let date = props.content.date.split("T")[0];
  let type = props.content.type;
  let content = props.content.content.rendered;
  console.log(props);

  return (
    <div className="blogContainer">
      <h6 dangerouslySetInnerHTML={{ __html: type }} className="blogType" />
      <div className="blogHeader">
        <h1 dangerouslySetInnerHTML={{ __html: title }} className="blogTitle" />
        <h6 dangerouslySetInnerHTML={{ __html: date }} className="blogDate" />
      </div>
      <div>
        <img src={props.image.source_url} className="mainImg" />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="blogContent"
      />
    </div>
  );
}

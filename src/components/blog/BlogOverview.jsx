import React from "react";
import SingleBlogPage from "./SingleBlogPage";

export default function BlogOverview() {
  const healthBLogUrl = "http://127.0.0.1/wordpress/wp-json/wp/v2/health/";
  const imgUrl = "http://127.0.0.1/wordpress/wp-json/wp/v2/media/";
  const [wpData, setWpData] = React.useState([]);
  const [wpImages, setWpImages] = React.useState([]);

  const fetchFromWP = async () => {
    let response1 = await fetch(healthBLogUrl);
    let blogContentdData = await response1.json();
    setWpData(blogContentdData);
  };
  const fetchImgsFromWP = async () => {
    let response2 = await fetch(imgUrl);
    let blogImagesData = await response2.json();
    setWpImages(blogImagesData);
  };

  const fetchData = async () => {
    await fetchImgsFromWP();
    await fetchFromWP();
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="App">
        {wpData.map((article, index) => {
          return (
            // <Route path={`${path}/:topicId`}>
            <SingleBlogPage
              content={article}
              image={wpImages[index]}
              key={index}
            />
            // </Route>
          );
        })}
      </div>
    </>
  );
}

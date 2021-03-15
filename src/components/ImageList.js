import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return (
    <div className="ui container">
      <div className="image-list">{images}</div>
      <div className="ui segment">
        <h5 className="ui centered aligned header">End of results...</h5>
      </div>
      <div class="ui divider"></div>
    </div>
  );
};

export default ImageList;

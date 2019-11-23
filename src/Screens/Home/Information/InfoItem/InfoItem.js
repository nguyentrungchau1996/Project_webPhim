import React from "react";
import "./InfoItem.scss";

const InfoItem = props => {
  return (
    <div className="card">
      <img className="card-img-top" src={props.infoItem.image} alt="card_img" />
      <div className="card-body">
        <p>{props.infoItem.newsTitle}</p>
      </div>
    </div>
  );
};

export default InfoItem;

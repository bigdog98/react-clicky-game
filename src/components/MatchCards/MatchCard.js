import React from "react";
import "./MatchCard.css";

//image renders
const MatchCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={"../../images/" + props.image} />
    </div>
  </div>
);

export default MatchCard;
import React from "react";
import "./SeatingItem.scss";

const SeatingItem = props => {
  return (
    <button type="button" className="btnGhe btn">
      {props.seatitem.TenGhe}
    </button>
  );
};

export default SeatingItem;

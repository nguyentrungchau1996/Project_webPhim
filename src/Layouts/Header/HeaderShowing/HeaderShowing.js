import React from "react";
import "./HeaderShowing.scss";
import { Link } from "react-router-dom";

const HeaderShowing = props => {
  return (
    <div className="img_item">
      <img src={props.show.HinhAnh} alt="img_header_showing" />
      <h5>{props.show.TenPhim}</h5>
      <div className="background_overlay">
        <Link
          to={{ pathname: `/detail/${props.show.MaPhim}` }}
          className="btn btnChon"
        >
          CHỌN
        </Link>
      </div>
    </div>
  );
};

export default HeaderShowing;

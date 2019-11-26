import React from "react";
import "./ShowItem.scss";
import { Link } from "react-router-dom";

const ShowItem = props => {
  return (
    <div className="card">
      <div className="card_img">
        <img
          className="card-img-top"
          src={props.show.hinhAnh}
          alt="Card_image"
        />
        <div className="card_overlay">
          <h4 id="line_clamp_1" className="card-text">
            {props.show.tenPhim}
          </h4>
          <p id="line_clamp_2">{props.show.moTa}</p>
          <div className="overlay_button">
            <Link
              to={{ pathname: `/detail/${props.show.maPhim}` }}
              className="btnChiTiet"
            >
              chi tiết
            </Link>
            <Link
              to={{ pathname: `/chosenshow/${props.show.maPhim}` }}
              className="btn btnMuaVe"
            >
              mua vé
            </Link>
            <button type="button" className="btn btnTrailer">
              <i className="fa fa-play-circle-o" />
              xem trailer
            </button>
          </div>
        </div>
      </div>
      <h3>{props.show.tenPhim}</h3>
    </div>
  );
};

export default ShowItem;

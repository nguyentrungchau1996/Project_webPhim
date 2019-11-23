import React from "react";
import "./ShowTime.scss";
import moment from "moment";
import {Link} from "react-router-dom";

const ShowTime = props => {  
  return (
    <div className="col-12">
      <div className="card card_time">
        <div className="card-body text-center">
          <span className="mr-5">
            {moment(props.showTime.ngayChieuGioChieu).format("L")}
          </span>
          <Link to={{pathname: `/seating/${props.showTime.maLichChieu}`}} className="btn btnGioChieu">
            {moment(props.showTime.ngayChieuGioChieu).format("h:mm:ss a")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowTime;

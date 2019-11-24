import React, { useEffect } from "react";
import "./BookingRight.scss";
import { connect, useDispatch } from "react-redux";
import { fetchDetailedShow } from "../../../Redux/Actions/Show";
import _ from "lodash";
import moment from "moment";
import {Link} from "react-router-dom"

const BookingRight = props => {
  const dispatch = useDispatch();
  const filmId = props.filmId;

  useEffect(() => {
    dispatch(fetchDetailedShow(filmId));
  }, [dispatch, filmId]);

  const _renderShowTime = () =>
    _.get(props, "detailedShow.lichChieu", []).map((showtime, index) => (
      <div className="card" key={index} showtime={showtime}>
        <div className="card-body">
          <span className="mr-4">
            {moment(showtime.ngayChieuGioChieu).format("L")}
          </span>
          <Link to={{pathname: `/seating/${showtime.maLichChieu}`}} className="btn">
            {moment(showtime.ngayChieuGioChieu).format("h:mm:ss a")}
          </Link>
        </div>
      </div>
    ));

  return <div className="booking_show_time">{_renderShowTime()}</div>;
};

const mapStateToProps = state => ({
  detailedShow: state.cinema.detailedShow
});

export default connect(mapStateToProps)(BookingRight);

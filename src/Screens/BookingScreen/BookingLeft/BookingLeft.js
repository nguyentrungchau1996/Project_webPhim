import React, { useEffect } from "react";
import "./BookingLeft.scss";
import { connect, useDispatch } from "react-redux";
import { fetchShow } from "../../../Redux/Actions/Show";
import _ from "lodash";
import { Link } from "react-router-dom";

//Component trả ra danh sách phim đang chiếu
const BookingLeft = props => {
  const dispatch = useDispatch();  
  useEffect(() => {
    dispatch(fetchShow());
  }, [dispatch]);

  const _renderNowShowing = () =>
    _.get(props, "show", []).map((show, index) => (
      <li className="list-group-item list_now_showing" key={index} show={show}>
        <div className="row">
          <div className="col-4">
            <div className="img">
              <img src={show.HinhAnh} alt="booking_left" />
              <a href="#">
                <i className="fa fa-play-circle-o text-white" />
              </a>
              <div className="img_overlay"></div>
            </div>
          </div>
          <div className="col-8">
            <p>{show.TenPhim}</p>
            <div>
              <button type="button" className="btn btnChiTiet mr-2">
                Chi tiết
              </button>
              <Link
                to={{ pathname: `/chosenshow/${show.MaPhim}` }}
                className="btn btnChonPhim"
              >
                Chọn phim
              </Link>
            </div>
          </div>
        </div>
      </li>
    ));

  return <>{_renderNowShowing()}</>;
};

const mapStateToProps = state => {
  return {
    show: state.cinema.show
  };
};

export default connect(mapStateToProps)(BookingLeft);

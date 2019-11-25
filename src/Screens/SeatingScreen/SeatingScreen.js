import React, { useEffect } from "react";
import "./SeatingScreen.scss";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import SeatingItem from "./SeatingItem/SeatingItem";
import { connect, useDispatch } from "react-redux";
import _ from "lodash";
import { fetchSeating } from "../../Redux/Actions/Seating";
import BookingSeat from "./BookingSeat/BookingSeat";

const SeatingScreen = props => {
  const dispatch = useDispatch();
  const showId = props.match.params.showId;

  useEffect(() => {
    return dispatch(fetchSeating(showId));
  }, [showId, dispatch]);

  const _renderSeatingItem = () =>
    _.get(props, "seatsOfShow.danhSachGhe", []).map((seatitem, index) => {
      return (
        <div key={index} style={{ display: "inline-block" }}>
          <SeatingItem seatitem={seatitem} />
        </div>
      );
    });

  return (
    <>
      <Header />

      <div className="container seating_screen">
        <div className="row">
          <div className="col-12 screen text-center">Màn hình</div>
          <div className="col-md-7 text-center">
            <h1 className="display-4 text-center">Danh sách ghế</h1>
            <span>{_renderSeatingItem()}</span>
            <div className="col-12 notes">
              <div className="row">
                <div className="col-4">
                  <span className="mr-3">
                    <button className="btn">1</button>Ghế trống
                  </span>
                </div>
                <div className="col-4">
                  <span className="mr-3">
                    <button className="btn btnGheDangDat">1</button>Ghế đang
                    chọn
                  </span>
                </div>
                <div className="col-4">
                  <span>
                    <button className="btn btnGheDaDat">1</button>Ghế đã đặt
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mx-auto">
            <h1 className="display-4 text-center">Ghế đã chọn</h1>
            <BookingSeat />
            <h2 className="display-4 text-center">Tổng cộng: tongTien VNĐ</h2>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

const mapStateToProps = state => ({
  seatsOfShow: state.seating.seatsOfShow
});

export default connect(mapStateToProps)(SeatingScreen);

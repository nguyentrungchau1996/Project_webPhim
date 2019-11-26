import React from "react";
import "./BookingScreen.scss";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import BookingLeft from "./BookingLeft/BookingLeft";
import BookingRight from "./BookingRight/BookingRight";
import { connect } from "react-redux";

const BookingScreen = props => {
  const filmId = props.match.params.filmId;

  return (
    <>
      <Header />

      <div className="container booking_screen">
        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-header text-center">
                <h5>chọn phim</h5>
              </div>
              <ul className="list-group list-group-flush">
                <BookingLeft />
              </ul>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-header text-center">
                <h5>chọn suất</h5>
              </div>
              <div className="card-body">
                <p>Tên phim: {props.detailedShow.tenPhim}</p>
                {filmId ? (
                  <BookingRight filmId={filmId} />
                ) : (
                  <p>Vui lòng chọn phim</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

const mapStateToProps = state => ({
  detailedShow: state.cinema.detailedShow
});

export default connect(mapStateToProps)(BookingScreen);

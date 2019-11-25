import React, { useEffect } from "react";
import "./BookingSeat.scss";
import { connect } from "react-redux";
import _ from "lodash";

const BookingSeat = props => {
  

  const _renderBookingSeats = () =>
    _.get(props, "bookingSeats", []).map((bookingitem, index) => (
      <p className="lead" key={index} bookingitem={bookingitem}>
        Ghế
        <span>: {bookingitem.stt} - ghe.gia VND</span>
        <span className="alert alert-danger ml-2">Hủy</span>
      </p>
    ));

  return <>{_renderBookingSeats()}</>;
};

const mapStateToProps = state => ({
  bookingSeats: state.seating.bookingSeats
});

export default connect(mapStateToProps)(BookingSeat);

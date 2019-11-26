import React from "react";
import "./BookingSeat.scss";
import { connect, useDispatch } from "react-redux";
import _ from "lodash";
import { deleteBookingSeat } from "../../../Redux/Actions/Seating";

const BookingSeat = props => {
  const dispatch = useDispatch();

  const _deleteBookingSeat = seat => {
    dispatch(deleteBookingSeat(seat));
  };

  const _renderBookingSeats = () =>
    _.get(props, "bookingSeats", []).map((bookingitem, index) => (
      <p className="lead" key={index} bookingitem={bookingitem}>
        Ghế
        <span>
          : {bookingitem.stt} - {bookingitem.giaVe} VND
        </span>
        <span
          className="alert alert-danger ml-2"
          onClick={() => _deleteBookingSeat(bookingitem)}
        >
          Hủy
        </span>
      </p>
    ));

  return <>{_renderBookingSeats()}</>;
};

const mapStateToProps = state => ({
  bookingSeats: state.seating.bookingSeats
});

export default connect(mapStateToProps)(BookingSeat);

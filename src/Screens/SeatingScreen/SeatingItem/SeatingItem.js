import React, { useState, useEffect } from "react";
import "./SeatingItem.scss";
import { connect, useDispatch } from "react-redux";
import {
  deleteBookingSeat,
  addBookingSeat
} from "../../../Redux/Actions/Seating";
import _ from "lodash";

const SeatingItem = props => {
  const [state, setState] = useState({
    //false <-> chưa chọn
    //true <-> đang chọn
    bookingStatus: false
  });

  const dispatch = useDispatch();

  const _handleSeating = () => {
    setState({
      ...state,
      bookingStatus: !state.bookingStatus
    });
    const seatitem = _.get(props, "seatitem", {});
    if (!state.bookingStatus) {
      dispatch(addBookingSeat(seatitem));
    } else dispatch(deleteBookingSeat(seatitem));
  };

  return (
    <div>
      {props.seatitem.daDat ? (
        <button type="button" className="btn btnGheDaDat">
          {props.seatitem.tenGhe}
        </button>
      ) : (
        <div>
          {state.bookingStatus ? (
            <button
              type="button"
              className="btnGhe btn btnGheDangDat"
              onClick={_handleSeating}
            >
              {props.seatitem.tenGhe}
            </button>
          ) : (
            <button
              type="button"
              className="btnGhe btn"
              onClick={_handleSeating}
            >
              {props.seatitem.tenGhe}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  bookingSeats: state.seating.bookingSeats
});

export default connect(mapStateToProps)(SeatingItem);

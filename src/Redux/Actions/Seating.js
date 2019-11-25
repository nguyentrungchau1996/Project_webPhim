import {
  FETCH_SEATING,
  ADD_BOOKING_SEATING,
  DELETE_BOOKING_SEATING
} from "./ActionType";
import CinemaService from "../../Services/CinemaService";

//async action
export const fetchSeating = showId => {
  return dispatch => {
    CinemaService.fetchSeating(showId)
      .then(res => {
        const data = { ...res.data };
        dispatch(actFetchSeating(data));
      })
      .catch(e => console.log(e));
  };
};

//Non-async action
export const addBookingSeat = bookingSeats => {
  return dispatch => {
    dispatch(actAddBookingSeat(bookingSeats));
  };
};

export const deleteBookingSeat = bookingSeats => {
  return dispatch => {
    dispatch(actDeleteBookingSeat(bookingSeats));
  };
};

//action creator
export const actFetchSeating = data => ({
  type: FETCH_SEATING,
  payload: data
});

export const actAddBookingSeat = data => ({
  type: ADD_BOOKING_SEATING,
  payload: data
});

export const actDeleteBookingSeat = data => ({
  type: DELETE_BOOKING_SEATING,
  payload: data
});
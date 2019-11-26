import {
  FETCH_SEATING,
  ADD_BOOKING_SEATING,
  DELETE_BOOKING_SEATING
} from "../Actions/ActionType";

let initialState = {
  seatsOfShow: [],
  bookingSeats: []
};

const SeatingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEATING:
      state.seatsOfShow = action.payload;
      return { ...state };

    case ADD_BOOKING_SEATING:
      state.bookingSeats = [...state.bookingSeats, action.payload];
      return { ...state };

    case DELETE_BOOKING_SEATING:
      let temp_bookingSeats = [...state.bookingSeats];
      temp_bookingSeats = temp_bookingSeats.filter(
        seat => seat.maGhe !== action.payload.maGhe
      );
      state.bookingSeats = temp_bookingSeats;
      return { ...state };

    default:
      return { ...state };
  }
};

export default SeatingReducer;

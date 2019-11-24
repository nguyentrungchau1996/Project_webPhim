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
      state.bookingSeats.push(action.payload);
      return { ...state };

    case DELETE_BOOKING_SEATING:
      const index = state.bookingSeats.findIndex(
        e => e.maGhe === action.payload.maGhe
      );
      if (index !== -1) {
        state.bookingSeats.splice(index, 1);
      }
      return { ...state };

    default:
      return { ...state };
  }
};

export default SeatingReducer;

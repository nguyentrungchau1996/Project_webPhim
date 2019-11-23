import { FETCH_SEATING, FETCH_BOOKING_SEATING } from "../Actions/ActionType";

let initialState = {
  seatsOfShow: [],
  bookingSeats: []
};

const SeatingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEATING:
      state.seatsOfShow = action.payload;
      return { ...state };

    case FETCH_BOOKING_SEATING:
      return { ...state};

    default:
      return { ...state };
  }
};

export default SeatingReducer;

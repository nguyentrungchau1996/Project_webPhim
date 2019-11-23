import {
  FETCH_SHOW,
  FETCH_DETAILED_SHOW
} from "../Actions/ActionType";

let initialState = {
  show: [],
  detailedShow: {},
  seating: []
};

const ShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHOW:
      state.show = action.payload;
      return { ...state };

    case FETCH_DETAILED_SHOW:
      state.detailedShow = action.payload;
      return { ...state };

    default:
      return state;
  }
};

export default ShowReducer;

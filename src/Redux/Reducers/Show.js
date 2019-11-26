import {
  FETCH_SHOW,
  FETCH_DETAILED_SHOW,
  SEARCHING_FILM
} from "../Actions/ActionType";

let initialState = {
  show: [],
  detailedShow: {},
  searchShow: []
};

const ShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHOW:
      state.show = action.payload;
      return { ...state };

    case FETCH_DETAILED_SHOW:
      state.detailedShow = action.payload;
      return { ...state };

    case SEARCHING_FILM:
      let temp_searchShow = [...state.show];
      temp_searchShow = state.show.filter(
        film =>
          film.tenPhim
            .toLowerCase()            
            .indexOf(action.payload.toLowerCase()) !== -1
      );
      state.searchShow = temp_searchShow;      
      return { ...state };

    default:
      return state;
  }
};

export default ShowReducer;

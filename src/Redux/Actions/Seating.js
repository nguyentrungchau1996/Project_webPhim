import { FETCH_SEATING } from "./ActionType";
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

//action creator
export const actFetchSeating = data => ({
  type: FETCH_SEATING,
  payload: data
});

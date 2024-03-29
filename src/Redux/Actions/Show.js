import {
  FETCH_SHOW,
  FETCH_DETAILED_SHOW,
  SEARCHING_FILM
} from "./ActionType";
import CinemaService from "../../Services/CinemaService";

//async action
export const fetchShow = () => {
  return dispatch => {
    CinemaService.fetchShow()
      .then(res => dispatch(actFetchShow(res.data)))
      .catch(e => console.log(e));
  };
};

export const fetchDetailedShow = filmId => {
  return dispatch => {
    CinemaService.fetchDetailedShow(filmId)
      .then(res => {
        const data = { ...res.data };
        dispatch(actFetchDetailedShow(data));
      })
      .catch(e => console.log(e));
  };
};

export const searchFilm = keywordSearch => {
  return dispatch => dispatch(actSearchingFilm(keywordSearch));
};

//action creators
export const actFetchShow = data => ({
  type: FETCH_SHOW,
  payload: data
});

export const actFetchDetailedShow = data => ({
  type: FETCH_DETAILED_SHOW,
  payload: data
});

export const actSearchingFilm = data => ({
  type: SEARCHING_FILM,
  payload: data
});

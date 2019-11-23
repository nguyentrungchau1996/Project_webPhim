import { CHANGE_EDIT_STATUS } from "./ActionType";

//action non-async
export const changeEditStatus = status => {
  return dispatch => dispatch(actChangeEditStatus(status));
};

//action creator
export const actChangeEditStatus = data => ({
  type: CHANGE_EDIT_STATUS,
  payload: data
});

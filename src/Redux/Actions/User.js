import {
  FETCH_CREDENTIALS,
  FETCH_LIST_OF_USERS,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  SAVE_EDIT_USER,
  SEARCH_USER,
  LOG_OUT_USER
} from "./ActionType";
import UserService from "../../Services/UserService";
import { restConnector } from "../../Services";

//Async action
export const signin = (user, history) => {
  return dispatch => {
    UserService.signin(user)
      .then(res => {
        localStorage.setItem("userSignin", JSON.stringify(res.data));
        dispatch(actSignin(res.data));
        restConnector.defaults.headers[
          "Authorization"
        ] = `Bearer ${res.data.accessToken}`;
        history.push("/");
      })
      .catch(e => console.log(e.message));
  };
};

export const fetchListOfUsers = () => {
  return dispatch => {
    UserService.fetchListOfUsers()
      .then(res => dispatch(actFetchListOfUsers(res.data)))
      .catch(e => console.log(e));
  };
};

export const addUser = newUser => {
  return dispatch => {
    UserService.addUser(newUser)
      .then(res => {
        dispatch(actAddUser(res.data));
      })
      .catch(e => console.log(e));
  };
};

export const deleteUser = username => {
  return dispatch => {
    UserService.deleteUser(username)
      .then(res => dispatch(actDeleteUser(res.data)))
      .catch(e => console.log(e));
  };
};

export const updateUser = updatedUser => {
  return dispatch => {
    UserService.updateUser(updatedUser)
      .then(res => dispatch(actUpdateUser(res.data)))
      .catch(e => console.log(e));
  };
};

//Non-async action
export const saveEditUser = editUser => {
  return dispatch => {
    dispatch(actSaveEditUser(editUser));
  };
};

export const searchUser = keyword => {
  return dispatch => dispatch(actSearchUser(keyword));
};

export const logoutUser = () => {
  return dispatch => dispatch(actLogoutUser());
};

//Action creators
export const actSignin = data => ({
  type: FETCH_CREDENTIALS,
  payload: data
});

export const actFetchListOfUsers = data => ({
  type: FETCH_LIST_OF_USERS,
  payload: data
});

export const actAddUser = data => ({
  type: ADD_USER,
  payload: data
});

export const actDeleteUser = data => ({
  type: DELETE_USER,
  payload: data
});

export const actUpdateUser = data => ({
  type: UPDATE_USER,
  payload: data
});

export const actSaveEditUser = data => ({
  type: SAVE_EDIT_USER,
  payload: data
});

export const actSearchUser = data => ({
  type: SEARCH_USER,
  payload: data
});

export const actLogoutUser = () => ({
  type: LOG_OUT_USER
});

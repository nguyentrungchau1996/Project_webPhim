import React, { useEffect, useState } from "react";
import "./AdminScreen.scss";
import { connect, useDispatch } from "react-redux";
import {
  fetchListOfUsers,
  deleteUser,
  saveEditUser,
  searchUser
} from "../../Redux/Actions/User";
import ModalScreen from "./ModalScreen/ModalScreen";
import { changeEditStatus } from "../../Redux/Actions/Status";

const AdminScreen = props => {
  const [state, setState] = useState({
    search: ""
  });

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchListOfUsers()), [dispatch]);

  //Nhất nút delete tiến hành xóa user
  const _handleDeleteUser = username => {
    dispatch(deleteUser(username));
  };

  //Nhấn nút update để hiện thông tin user muốn update lên
  const _handleOnUpdateUser = editUser => {
    dispatch(changeEditStatus(true));
    dispatch(saveEditUser(editUser));
  };

  const _handleOnAddUser = () => {
    dispatch(changeEditStatus(false));
  };

  const _renderListOfUsers = () =>
    props.listOfUsers.map((user, index) => (
      <tr key={index}>
        <td>{user.taiKhoan}</td>
        <td>{user.hoTen}</td>
        <td>{user.email}</td>
        <td>{user.soDt}</td>
        <td>{user.maLoaiNguoiDung}</td>
        <td>
          <button
            className="btn btn-danger mr-2"
            onClick={() => _handleDeleteUser(user.taiKhoan)}
          >
            Delete
          </button>
          <button
            className="btn btn-info"
            data-toggle="modal"
            data-target="#modal_screen"
            onClick={() => _handleOnUpdateUser(user)}
          >
            Update
          </button>
        </td>
      </tr>
    ));

  const _searchUser = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
    dispatch(searchUser(e.target.value));
  };

  const _renderSearchUser = () =>
    props.searchUserList.map((user, index) => (
      <tr key={index}>
        <td>{user.taiKhoan}</td>
        <td>{user.hoTen}</td>
        <td>{user.email}</td>
        <td>{user.soDt}</td>
        <td>{user.maLoaiNguoiDung}</td>
        <td>
          <button
            className="btn btn-danger mr-2"
            onClick={() => _handleDeleteUser(user.taiKhoan)}
          >
            Delete
          </button>
          <button
            className="btn btn-info"
            data-toggle="modal"
            data-target="#modal_screen"
            onClick={() => _handleOnUpdateUser(user)}
          >
            Update
          </button>
        </td>
      </tr>
    ));

  return (
    <div className="admin-screen">
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        {/* Brand */}
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        {/* Toggler/collapsibe Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="row">
        <div className="col-1 pt-5">
          <ul>
            <li>
              <a href="/">Users</a>
            </li>
            <li>
              <a href="/">Films</a>
            </li>
          </ul>
        </div>
        <div className="col-11">
          <div className="admin_screen_top">
            <h1 className="text-center">List of Users</h1>
            <button
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#modal_screen"
              onClick={_handleOnAddUser}
            >
              Add user
            </button>
          </div>

          <div className="admin_screen_bottom">
            <form className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter full name ..."
                name="search"
                onChange={_searchUser}
              />
              <button className="btn btn-search" type="button">
                <i className="fa fa-search" />
              </button>
            </form>

            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th>User name</th>
                  <th>Full name</th>
                  <th>Email</th>
                  <th>Phone number</th>
                  <th>Type of user</th>
                  <th>
                    <i className="fa fa-cog" aria-hidden="true"></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.searchUserList.length <= 0
                  ? _renderListOfUsers()
                  : _renderSearchUser()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ModalScreen />
    </div>
  );
};

const mapStateToProps = state => ({
  listOfUsers: state.user.listOfUsers,
  editStatus: state.status.editStatus,
  editUser: state.user.editUser,
  searchUserList: state.user.searchUserList
});

export default connect(mapStateToProps)(AdminScreen);

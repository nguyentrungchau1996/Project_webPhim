import React, { useState } from "react";
import "./SigninScreen.scss";
import { signin } from "../../../Redux/Actions/User";
import { connect } from "react-redux";

const SigninScreen = props => {
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: ""
  });

  const _handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const _handleSubmit = e => {
    e.preventDefault();
    props.dispatch(signin(state, props.history));
  };

  return (
    <div className="signin_screen">
      <div className="row container">
        <h1 className="display-5 text-center signin_screen_title">
          account login
        </h1>
        <div className="col-3 mx-auto">
          <form onSubmit={_handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="user_name"
                name="taiKhoan"
                onChange={_handleChange}
                placeholder="User name"
                required
              />
              <div className="form_overlay">
                <i className="fa fa-user" aria-hidden="true"></i>
              </div>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="matKhau"
                onChange={_handleChange}
                placeholder="Password"
                required
              />
              <div className="form_overlay">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </div>
            </div>
            <div className="form-group mx-auto text-center form_button">
              <button className="btn btn-success" type="submit">
                login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  credentials: state.user.credentials
});

export default connect(mapStateToProps)(SigninScreen);

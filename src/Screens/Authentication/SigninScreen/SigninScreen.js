import React from "react";
import "./SigninScreen.scss";
import { signin } from "../../../Redux/Actions/User";
import { connect, useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { userSigninSchema } from "../../../Services/UserService";

const SigninScreen = props => {
  const dispatch = useDispatch();

  const _handleSubmit = values => {
    dispatch(signin(values, props.history));
  };

  return (
    <div className="signin_screen">
      <div className="row container">
        <h1 className="display-5 text-center signin_screen_title">
          account login
        </h1>
        <div className="col-3 mx-auto">
          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: ""
            }}
            validationSchema={userSigninSchema}
            onSubmit={_handleSubmit}
          >
            {({ handleChange, errors, touched }) => (
              <Form>
                <div className="form-group">
                  <div className="form_overlay">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </div>
                  <Field
                    type="text"
                    className="form-control"
                    id="user_name"
                    name="taiKhoan"
                    onChange={handleChange}
                    placeholder="User name"
                  />
                  <p className="alert alert-danger">
                    {errors.taiKhoan &&
                      touched.taiKhoan &&
                      `${errors.taiKhoan}`}
                  </p>
                </div>
                <div className="form-group">
                  <div className="form_overlay">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </div>
                  <Field
                    type="password"
                    className="form-control"
                    id="password"
                    name="matKhau"
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  <p className="alert alert-danger">
                    {errors.matKhau && touched.matKhau && `${errors.matKhau}`}
                  </p>
                </div>
                <div className="form-group mx-auto text-center form_button">
                  <button className="btn btn-success" type="submit">
                    login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  credentials: state.user.credentials
});

export default connect(mapStateToProps)(SigninScreen);

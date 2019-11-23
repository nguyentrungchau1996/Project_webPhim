import React from "react";
import { Formik, Form, Field } from "formik";
import UserService, { userSignupSchema } from "../../../Services/UserService";
import "./SignupScreen.scss";

const SignupScreen = props => {
  const _handleSubmit = values => {
    UserService.signup(values)
      .then(res => props.history.push("/signin"))
      .catch(e => console.log(e));
  };

  return (
    <div className="signup_screen">
      <div className="row container">
        <h1 className="display-5 text-center signup_screen_title">SIGN UP</h1>
        <div className="col-3 mx-auto">
          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: "",
              hoTen: "",
              email: "",
              soDt: "",
              maNhom: "GP03",
              maLoaiNguoiDung: "KhachHang"
            }}
            validationSchema={userSignupSchema}
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
                    id="taiKhoan"
                    className="form-control"
                    onChange={handleChange}
                    name="taiKhoan"
                    placeholder="User name"
                  />
                  {errors.taiKhoan && touched.taiKhoan && (
                    <p className="alert alert-danger">{errors.taiKhoan}</p>
                  )}
                </div>
                <div className="form-group">
                  <div className="form_overlay">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </div>
                  <Field
                    type="password"
                    id="matKhau"
                    className="form-control"
                    onChange={handleChange}
                    name="matKhau"
                    placeholder="Password"
                  />
                  {errors.matKhau && touched.matKhau && (
                    <p className="alert alert-danger">{errors.matKhau}</p>
                  )}
                </div>
                <div className="form-group">
                  <div className="form_overlay">
                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                  </div>
                  <Field
                    type="text"
                    id="hoTen"
                    className="form-control"
                    onChange={handleChange}
                    name="hoTen"
                    placeholder="Full name"
                  />
                  {errors.hoTen && touched.hoTen && (
                    <p className="alert alert-danger">{errors.hoTen}</p>
                  )}
                </div>
                <div className="form-group">
                  <div className="form_overlay">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <Field
                    type="email"
                    id="email"
                    className="form-control"
                    onChange={handleChange}
                    name="email"
                    placeholder="Email"
                  />
                  {errors.email && touched.email && (
                    <p className="alert alert-danger">{errors.email}</p>
                  )}
                </div>
                <div className="form-group">
                  <div className="form_overlay">
                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                  </div>
                  <Field
                    type="number"
                    id="soDt"
                    className="form-control"
                    onChange={handleChange}
                    name="soDt"
                    placeholder="Phone number"
                  />
                  {errors.soDt && touched.soDt && (
                    <p className="alert alert-danger">{errors.soDt}</p>
                  )}
                </div>
                <div className="form-group mx-auto text-center form_button">
                  <button className="btn btn-success" type="submit">
                    Submit
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

export default SignupScreen;

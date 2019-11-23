import React, { useRef } from "react";
import "./ModalScreen.scss";
import { Formik, Form, Field } from "formik";
import { userSignupSchema } from "../../../Services/UserService";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { connect, useDispatch } from "react-redux";
import { addUser, updateUser } from "../../../Redux/Actions/User";

const ModalScreen = props => {
  const MySwal = withReactContent(Swal);

  const _handleOnModal = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const dispatch = useDispatch();

  const temp_editStatus = props.editStatus;

  const btnClose = useRef(null);

  const _handleSubmit = values => {
    console.log(values);
    if (!temp_editStatus) {
      dispatch(addUser(values));
    } else dispatch(updateUser(values));
    btnClose.current.focus();
  };

  return (
    <div
      className="modal fade"
      id="modal_screen"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {temp_editStatus ? "Cập nhật" : "Thêm người dùng"}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              ref={btnClose}
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <Formik
              initialValues={props.editUser}
              validationSchema={userSignupSchema}
              onSubmit={_handleSubmit}
            >
              {({ handleChange, errors, touched, values }) => {
                const temp_editUser = { ...props.editUser };
                
                return (
                  <Form>
                    <div className="form-group">
                      <div className="form_overlay">
                        <i className="fa fa-user" aria-hidden="true"></i>
                      </div>
                      <Field
                        type="text"
                        id="taiKhoan"
                        className="form-control"
                        name="taiKhoan"
                        placeholder="User name"
                        value={temp_editUser.taiKhoan}
                        onChange={handleChange}
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
                        value={values.matKhau}
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
                        value={values.hoTen}
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
                        value={values.email}
                      />
                      {errors.email && touched.email && (
                        <p className="alert alert-danger">{errors.email}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <div className="form_overlay">
                        <i
                          className="fa fa-phone-square"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <Field
                        type="number"
                        id="soDt"
                        className="form-control"
                        onChange={handleChange}
                        name="soDt"
                        placeholder="Phone number"
                        value={values.soDt}
                      />
                      {errors.soDt && touched.soDt && (
                        <p className="alert alert-danger">{errors.soDt}</p>
                      )}
                    </div>
                    <div className="form-group">
                      {temp_editStatus ? (
                        <button type="submit" className="btn btn-info">
                          Cập nhật
                        </button>
                      ) : (
                        <button type="submit" className="btn btn-primary">
                          Thêm người dùng
                        </button>
                      )}
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  editStatus: state.status.editStatus,
  editUser: state.user.editUser
});

export default connect(mapStateToProps)(ModalScreen);

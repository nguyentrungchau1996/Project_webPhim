import React from "react";
import "./ModalSignin.scss";
import { connect, useDispatch } from "react-redux";
import { logoutUser } from "../../../Redux/Actions/User";

const ModalSignin = () => {
  const dispatch = useDispatch();

  const _handleLogout = () => {
    localStorage.removeItem("userSignin");
    dispatch(logoutUser());
  };

  return (
    <div
      className="modal fade"
      id="modalSignin"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">Bạn muốn đăng xuất phải không?</div>
          <div className="modal-footer text-center">
            <button
              type="button"
              className="btn btnLogout"
              onClick={_handleLogout}
              to={{ pathname:"/" }}
              data-dismiss="modal"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  credentials: state.user.credentials
});

export default connect(mapStateToProps)(ModalSignin);

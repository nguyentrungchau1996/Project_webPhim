import React, { useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import HeaderShowing from "./HeaderShowing/HeaderShowing";
import { connect, useDispatch } from "react-redux";
import { fetchShow } from "../../Redux/Actions/Show";
import _ from "lodash";

const Header = props => {
  const dispatch = useDispatch();  

  useEffect(() => {
    dispatch(fetchShow());
  }, [dispatch]);

  const _renderNowShowing = () =>
    _.get(props, "show", []).map((show, index) => (
      <div key={index} className="col-4 text-center my-2">
        <HeaderShowing show={show} />
      </div>
    ));

  return (
    <nav className="navbar navbar-expand-md bg-light navbar-light">
      <div className="container">
        <div className="col-5 myNavbar_left">
          {/* Brand */}
          <Link to={{ pathname: "/" }} className="navbar-brand">
            <img src="../../img/logoCyberSoft.png" alt="logoCyberSoft" />
          </Link>
        </div>
        {/* Toggler/collapsibe Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="col-7 myNavbar_right">
          {/* Navbar links */}
          <div className="row">
            <div className="col-12 myNavbar_right_top pr-4">
              {props.credentials ? (
                <span>Xin chào, {props.credentials.hoTen}</span>
              ) : (
                <Link
                  to={{ pathname: "/signin" }}
                  className="btn_dangNhap mr-4"
                >
                  <i className="fa fa-user mr-2" aria-hidden="true"></i>
                  ĐĂNG NHẬP
                </Link>
              )}
            </div>
            <div className="col-12 myNavbar_right_bottom">
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to={{ pathname: "/booking" }} className="nav-link">
                      Đặt vé
                    </Link>
                  </li>
                  <li className="nav-item nav_title_phim">
                    <a className="nav-link" href="#">
                      Phim
                    </a>
                    <div className="phim_overlay scroller" id="scroller_style">
                      <h5>Phim đang chiếu</h5>
                      <div className="item_phim">
                        <div className="row">{_renderNowShowing()}</div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#information">
                      Blog Điện ảnh
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#information">
                      Hỏi đáp
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#information">
                      Liên hệ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#information">
                      <i className="fa fa-search" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  show: state.cinema.show,
  credentials: state.user.credentials
});

export default connect(mapStateToProps)(Header);

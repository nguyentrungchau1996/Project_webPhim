import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import HeaderShowing from "./HeaderShowing/HeaderShowing";
import { connect, useDispatch } from "react-redux";
import { fetchShow, searchFilm } from "../../Redux/Actions/Show";
import _ from "lodash";
import ModalSignin from "./ModalSignin/ModalSignin";

const Header = props => {
  const [state, setState] = useState({
    search: ""
  });

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

  const _handleChangeSearch = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
    dispatch(searchFilm(e.target.value));
  };

  const _renderSearchingShow = () =>
    _.get(props, "searchShow", []).map((show, index) => (
      <div key={index} className="col-4 text-center my-2">
        <HeaderShowing show={show} />
      </div>
    ));

  return (
    <>
      <ModalSignin />

      <nav className="navbar navbar-expand-md bg-light navbar-light">
        <div className="container">
          <div className="col-4 myNavbar_left">
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
          <div className="col-8 myNavbar_right">
            {/* Navbar links */}
            <div className="row">
              <div className="col-12 myNavbar_right_top pr-4">
                {props.credentials ? (
                  <p>
                    Xin chào,{" "}
                    <span
                      data-toggle="modal"
                      data-target="#modalSignin"                      
                    >
                      {props.credentials.hoTen}
                    </span>
                  </p>
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
                      <a className="nav-link" href="/">
                        Phim
                      </a>
                      <div
                        className="phim_overlay scroller"
                        id="scroller_style"
                      >
                        <h5>Phim đang chiếu</h5>
                        <form className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Nhập tên phim muốn tìm ..."
                            name="search"
                            onChange={_handleChangeSearch}
                          />
                          <button className="btn btn-search" type="button">
                            <i className="fa fa-search" />
                          </button>
                        </form>
                        <div className="item_phim">
                          <div className="row">
                            {props.searchShow.length <= 0
                              ? _renderNowShowing()
                              : _renderSearchingShow()}
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Blog Điện ảnh
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Hỏi đáp
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Liên hệ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = state => ({
  show: state.cinema.show,
  credentials: state.user.credentials,
  searchShow: state.cinema.searchShow
});

export default connect(mapStateToProps)(Header);

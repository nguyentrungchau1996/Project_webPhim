import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-4">          
            <img
              src="../../img/logoCyberSoft.png"
              alt="logoCyberSoft"
            />
          </div>
          <div className="col-2 col_normal">
            <h4>Hệ thống rạp</h4>
            <ul>
              <li>
                <a href="/">CiberCinema UVK</a>
              </li>
              <li>
                <a href="/">CiberCinema SVH</a>
              </li>
            </ul>
          </div>
          <div className="col-2 col_normal">
            <h4>CyberCinemas</h4>
            <ul>
              <li>
                <a href="/">Phim đang chiếu</a>
              </li>
              <li>
                <a href="/">Phim sắp chiếu</a>
              </li>
              <li>
                <a href="/">Suất chiếu đặc biệt</a>
              </li>
              <li>
                <a href="/">Lịch chiếu</a>
              </li>
              <li>
                <a href="/">Khuyến mãi</a>
              </li>
            </ul>
          </div>
          <div className="col-2 col_normal">
            <h4>Thông tin</h4>
            <ul>
              <li>
                <a href="/">Giới thiệu</a>
              </li>
              <li>
                <a href="/">Tin tức</a>
              </li>
              <li>
                <a href="/">Hỏi đáp</a>
              </li>
              <li>
                <a href="/">Liên hệ</a>
              </li>
            </ul>
          </div>
          <div className="col-2 ket_noi">
            <h4>Kết nối chúng tôi</h4>
            <ul>
              <li>
                <a href="/">
                  <i className="fa fa-facebook" />
                </a>
                <a href="/">
                  <i className="fa fa-youtube-play" />
                </a>
                <a href="/">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="/">
                  <i className="fa fa-instagram" />
                </a>
                <a href="/">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>Download App</li>
              <li>
                <a href="/">
                  <i className="fa fa-apple" />
                </a>
                <a href="/">
                  <i className="fa fa-android" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

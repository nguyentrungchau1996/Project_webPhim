import React, { useState } from "react";
import "./DetailedShow.scss";
import moment from "moment";
import ShowTime from "../ShowTime/ShowTime";
import _ from "lodash";

const DetailedShow = props => {
  //Ẩn hiện button Thông tin và lịch chiếu
  const [state, setState] = useState({
    sttInfo: true
  });

  const _handleOnInfo = () => {
    setState({
      ...state,
      sttInfo: true
    });
  };

  const _handleOnShowTime = () => {
    setState({
      ...state,
      sttInfo: false
    });
  };

  const _renderShowTime = () => {
    // props && props.detailedShow && props.detailedShow.LichChieu &&
    return _.get(props, "detailedShow.lichChieu", []).map((showTime, index) => (
      <ShowTime key={index} showTime={showTime} />
    ));
  };

  return (
    <div className="container detailed_show">
      <div className="row">
        <div className="col-5">
          <img src={props.detailedShow.hinhAnh} alt="images_detailed_show" />
          <div className="img_overlay">
            <i className="fa fa-play-circle-o" />
          </div>
        </div>
        <div className="col-7" id="div_scroller">
          <div className="row mt-4">
            <div className="col-12 text-center mb-2">
              {state.sttInfo ? (
                <div className="col-12 text-center mb-4">
                  <button
                    type="button"
                    className="btn btnTitle btnThongTin active"
                    onClick={_handleOnInfo}
                  >
                    Thông tin
                  </button>
                  <button
                    type="button"
                    className="btn btnTitle btnLichChieu"
                    onClick={_handleOnShowTime}
                  >
                    Lịch chiếu
                  </button>
                </div>
              ) : (
                <div className="col-12 text-center mb-4">
                  <button
                    type="button"
                    className="btn btnTitle btnThongTin"
                    onClick={_handleOnInfo}
                  >
                    Thông tin
                  </button>
                  <button
                    type="button"
                    className="btn btnTitle btnLichChieu active"
                    onClick={_handleOnShowTime}
                  >
                    Lịch chiếu
                  </button>
                </div>
              )}
            </div>
            {!state.sttInfo ? (
              _renderShowTime()
            ) : (
              <div className="col-12">
                <h4 className="mb-4 text-center">
                  {props.detailedShow.tenPhim}
                </h4>
                <p className="lead">
                  Opening day:{" "}
                  <span>
                    {moment(props.detailedShow.ngayKhoiChieu).format(
                      "MMMM Do YYYY"
                    )}
                  </span>
                </p>
                <p className="lead">
                  Category: <span>Action</span>
                </p>
                <p className="lead">
                  Country: <span>Viet Nam</span>
                </p>
                <p className="lead">
                  Actor:{" "}
                  <span> Noomi Rapace, Olivia Jewson, Abdellatif Chaouqi</span>
                </p>
                <p className="lead">
                  Director: <span>Vicky Jewson</span>
                </p>
                <p className="lead">
                  Description: <span>{props.detailedShow.moTa}</span>
                </p>
                <p className="lead">
                  Rates: <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half-o" />
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedShow;

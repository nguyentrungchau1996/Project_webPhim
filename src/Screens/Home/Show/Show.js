import React, { useState, useEffect } from "react";
import CommingSoon from "./CommingSoon/CommingSoon";
import NowShowing from "./NowShowing/NowShowing";
import { connect, useDispatch } from "react-redux";
import { fetchShow } from "../../../Redux/Actions/Show";
import "./Show.scss";

const Show = props => {
  const dispatch = useDispatch();

  //Dùng để setState, state thay đổi sẽ render lại giao diện
  const [state, setState] = useState({
    nowShowing: true
  });

  const _handleOnShowing = () => {
    setState({
      ...state,
      nowShowing: true
    });
  };

  const _handleOnComming = () => {
    setState({
      ...state,
      nowShowing: false
    });
  };

  useEffect(() => {
    dispatch(fetchShow());
  }, [dispatch]);

  return (
    <div className="row my-4">
      {state.nowShowing && (
        <div className="col-12 text-center mb-4">
          <button
            className="btn mr-2 btnTitle btnPhimDangChieu active"
            onClick={_handleOnShowing}
          >
            Đang Chiếu
          </button>
          <button
            className="btn btnTitle btnPhimSapChieu"
            onClick={_handleOnComming}
          >
            Sắp Chiếu
          </button>
        </div>
      )}

      {!state.nowShowing && (
        <div className="col-12 text-center mb-4">
          <button
            className="btn mr-2 btnTitle btnPhimDangChieu"
            onClick={_handleOnShowing}
          >
            Đang Chiếu
          </button>
          <button
            className="btn btnTitle btnPhimSapChieu active"
            onClick={_handleOnComming}
          >
            Sắp Chiếu
          </button>
        </div>
      )}

      <div className="col-12">
        {state.nowShowing && <NowShowing show={props.show} />}
      </div>

      <div className="col-12">
        {!state.nowShowing && <CommingSoon show={props.show} />}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  show: state.cinema.show
});

export default connect(mapStateToProps)(Show);

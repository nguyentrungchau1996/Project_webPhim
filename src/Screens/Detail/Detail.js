import React, { useEffect } from "react";
import "./Detail.scss";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import { connect, useDispatch } from "react-redux";
import { fetchDetailedShow } from "../../Redux/Actions/Show";
import DetailedShow from "./DetailedShow/DetailedShow";

const Detail = props => {
  const dispatch = useDispatch();

  const filmId = props.match.params.filmId;
  //Chỉ render lại khi filmId thay đổi
  useEffect(() => {
    dispatch(fetchDetailedShow(filmId));
  }, [filmId, dispatch]);

  return (
    <>
      <Header />

      <DetailedShow detailedShow={props.detailedShow} />

      <Footer />
    </>
  );
};

const mapStateToProps = state => ({
  detailedShow: state.cinema.detailedShow
});

export default connect(mapStateToProps)(Detail);

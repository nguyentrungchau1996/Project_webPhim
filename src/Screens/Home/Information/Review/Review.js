import React from "react";
import "./Review.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfoItem from "../InfoItem/InfoItem";

const Review = () => {
  const listOfReviews = [
    {
      newsTitle: "Sự Kiện KFC",
      image:
        "http://billnguyen.com/wp-content/uploads/2014/04/Event-Showcase1-2.jpg"
    },
    {
      newsTitle: "Sự Kiện Lotte",
      image:
        "https://static.ybox.vn/2018/3/7/6196b406-2228-11e8-b466-56c566ee3692.png"
    },
    {
      newsTitle: "Sự Kiện Texas",
      image:
        "http://cafefcdn.com/thumb_w/650/2017/2061185419-kien-nhan-1501344528133.jpg"
    }
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const _renderInfoItem = () => {
    return listOfReviews.map((infoItem, index) => (
      <InfoItem key={index} infoItem={infoItem} />
    ));
  };

  return <Slider {...settings}>{_renderInfoItem()}</Slider>;
};

export default Review;

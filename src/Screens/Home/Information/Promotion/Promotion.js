import React from "react";
import "./Promotion.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfoItem from "../InfoItem/InfoItem";

const Promotion = () => {
  const listOfPromotions = [
    {
      newsTitle: "Khuyến Mãi 1",
      image: "https://media.vietteltelecom.vn/upload/ckfinder/images/3112.png"
    },

    {
      newsTitle: "Khuyến Mãi 2",
      image:
        "https://topshare.s3.amazonaws.com/production/posts/pictures/000/000/145/original/kichi-kichi-khuyen-mai.jpg?1502809882"
    },

    {
      newsTitle: "Khuyến Mãi 3",
      image:
        "http://giaydantuong365.com/uploads/user/2/khuyenmaigiay/khuyen-mai-giay-dan-tuong-dep-gia-re-cuc-soc.jpg"
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
    return listOfPromotions.map((infoItem, index) => (
      <InfoItem key={index} infoItem={infoItem} />
    ));
  };

  return <Slider {...settings}>{_renderInfoItem()}</Slider>;
};

export default Promotion;

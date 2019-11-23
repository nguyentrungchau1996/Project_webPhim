import React from "react";
import "./News.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfoItem from "../InfoItem/InfoItem";

const News = () => {
  const listOfNews = [
    {
      newsTitle: "Marvel mua lại DC",
      image:
        "./img/diem-mat-dan-sao-dinh-dam-trong-bom-tan-lien-minh-cong-ly-15106519084263.jpg"
    },
    {
      newsTitle: "Ferdinand",
      image:
        "./img/fast-and-furious-9-co-bien-kich-moi-ngay-phat-hanh-cua-phim-doi-tu-2019-sang-2020-15263575332878.jpg"
    },
    {
      newsTitle: "Trùm Hương Cảng",
      image:
        "./img/nhom-losers-club-lon-dang-dan-dan-lo-dien-trong-sieu-pham-it-chapter-two-15265444875493.jpg"
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
    return listOfNews.map((infoItem, index) => (
      <InfoItem key={index} infoItem={infoItem} />
    ));
  };

  return <Slider {...settings}>{_renderInfoItem()}</Slider>;
};

export default News;

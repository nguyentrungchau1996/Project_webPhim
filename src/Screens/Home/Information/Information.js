import React, { useState } from "react";
import "./Information.scss";
import News from "./News/News";
import Review from "./Review/Review";
import Promotion from "./Promotion/Promotion";

const Information = () => {
  const [state, setState] = useState({
    onScreen: "news"
  });

  const _handleOnNews = () => {
    setState({
      ...state,
      onScreen: "news"
    });
  };

  const _handleOnReview = () => {
    setState({
      ...state,
      onScreen: "review"
    });
  };

  const _handleOnPromotion = () => {
    setState({
      ...state,
      onScreen: "promotion"
    });
  };

  return (
    <section id="information">
      {state.onScreen === "news" && <div className="text-center">
        <button
          type="button"
          className="btn btnTitle btnNews active"
          onClick={_handleOnNews}
        >
          News
        </button>
        <button
          type="button"
          className="btn btnTitle btnReview"
          onClick={_handleOnReview}
        >
          Review
        </button>
        <button
          type="button"
          className="btn btnTitle btnPromotion"
          onClick={_handleOnPromotion}
        >
          Promotion
        </button>
      </div>
      }
      {state.onScreen === "review" && <div className="text-center">
        <button
          type="button"
          className="btn btnTitle btnNews"
          onClick={_handleOnNews}
        >
          News
        </button>
        <button
          type="button"
          className="btn btnTitle btnReview active"
          onClick={_handleOnReview}
        >
          Review
        </button>
        <button
          type="button"
          className="btn btnTitle btnPromotion"
          onClick={_handleOnPromotion}
        >
          Promotion
        </button>
      </div>
      }
      {state.onScreen === "promotion" && <div className="text-center">
        <button
          type="button"
          className="btn btnTitle btnNews"
          onClick={_handleOnNews}
        >
          News
        </button>
        <button
          type="button"
          className="btn btnTitle btnReview"
          onClick={_handleOnReview}
        >
          Review
        </button>
        <button
          type="button"
          className="btn btnTitle btnPromotion active"
          onClick={_handleOnPromotion}
        >
          Promotion
        </button>
      </div>
      }
      <div className="row pt-4">
        {state.onScreen === "news" && (
          <div className="col-12">
            <News />
          </div>
        )}
        {state.onScreen === "review" && (
          <div className="col-12">
            <Review />
          </div>
        )}
        {state.onScreen === "promotion" && (
          <div className="col-12">
            <Promotion />
          </div>
        )}
      </div>
    </section>
  );
};

export default Information;

import React from "react";
import "./BookingSeat.scss";

const BookingSeat = props => {
  return (
    <div>
      <p className="lead">
        Ghế
        <span>
          : {"{"}
          {"{"}gheten{"}"}
          {"}"} - {"{"}
          {"{"}ghegia{"}"}
          {"}"} VND
        </span>
        <span className="alert alert-danger ml-2">Hủy</span>
      </p>
      <h2 className="display-4 text-center">
        Tổng cộng: {"{"}
        {"{"}tongTien{"}"}
        {"}"} VNĐ
      </h2>
    </div>
  );
};

export default BookingSeat;

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./starReview.css";
const colors = {
  orange: "#FABA5A",
  grey: "#a9a9a9",
};

export default function StarReview() {
  const stars = Array(5).fill(0);
  const [initialRating, setInitialRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(undefined);
  const handleOnClick = (value) => {
    setInitialRating(value);
  };

  const handleMouseHover = (value) => {
    setHoverRating(value);
  };
  const handleMouseLeave = (value) => {
    setHoverRating(undefined);
  };
  return (
    <>
      <div className="container">
        <h2>Customer Review Rating</h2>
        <div>
          {stars.map((_, index) => {
            return (
              <FaStar
                className="stars"
                key={index + 1}
                size={24}
                onClick={() => handleOnClick(index + 1)}
                onMouseOver={() => handleMouseHover(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverRating || initialRating) > index
                    ? colors.orange
                    : colors.grey
                }
              />
            );
          })}
        </div>
        <textarea
          className="textarea"
          placeholder="please provide your feedback"
        ></textarea>
        <button className="button">Submit</button>
      </div>
    </>
  );
}

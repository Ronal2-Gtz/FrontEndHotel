import React, { Fragment } from "react";
import star2 from "../img/filters/star2.svg";

function RaitingStars({ raiting }) {
  if (raiting === 1) {
    return (
      <Fragment>
        <img src={star2} className="raitingStars" alt="iconStar" />
      </Fragment>
    );
  }
  if (raiting === 2) {
    return (
      <Fragment>
        <img src={star2} className="raitingStars" alt="iconStar" />
        <img src={star2} className="raitingStars" alt="iconStar" />
      </Fragment>
    );
  }
  if (raiting === 3) {
    return (
      <Fragment>
        <img src={star2} className="raitingStars" alt="iconStar" />
        <img src={star2} className="raitingStars" alt="iconStar" />
        <img src={star2} className="raitingStars" alt="iconStar" />
      </Fragment>
    );
  }
  if (raiting === 4) {
    return (
      <Fragment>
        <img src={star2} className="raitingStars" alt="iconStar" />
        <img src={star2} className="raitingStars" alt="iconStar" />
        <img src={star2} className="raitingStars" alt="iconStar" />
        <img src={star2} className="raitingStars" alt="iconStar" />
      </Fragment>
    );
  }
  if (raiting === 5) {
    return (
      <Fragment>
        <img src={star2} className="raitingStars" alt="iconStar" />
        <img src={star2} className="raitingStars" alt="iconStar" />
        <img src={star2} className="raitingStars" alt="iconStar" />
        <img src={star2} className="raitingStars" alt="iconStar" />
        <img src={star2} className="raitingStars" alt="iconStar" />
      </Fragment>
    );
  }
}

export default RaitingStars;

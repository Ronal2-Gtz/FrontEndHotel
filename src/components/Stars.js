import React from "react";
import star2 from "../img/filters/star2.svg";

function RaitingStars({ raiting }) {

    let imagesStars = [];

    for (let i = 0; i < raiting; i++) {
      let dataImg = {
        key: i,
        img: star2
      }
      imagesStars.push(dataImg);
    }


  return(
  imagesStars.map(img => (<img key={img.key} src={img.img} className="starsIcon" alt="iconStar"/>))
  );
}

export default RaitingStars;

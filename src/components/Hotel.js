import React from "react";
import Stars from "./Stars"


const Hotel = ({hotel,urlImgs}) => {
  
  const {imgHotels, imgIcons} = urlImgs
  const {name, stars, price, image, amenities} = hotel

  return (
    <div className="hotel">
      <div className="hotel-container">
        <img
          alt="hotel"
          src={`${imgHotels}${image}`}
          className="imgHotel"
        />
        {}
        <div className="hotel-informacion">
          <h3>{name}</h3>
          <Stars raiting={stars} />

          <div className="hotel-icons">
            {amenities.map((img) => (
              <img
              key={img}
                alt="icon"
                src={`${imgIcons}${img}.svg`}
                className="imgIcon"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hotel-precio">
        <p>Precio por noche por habitacion</p>
        <h1>ARS {price}</h1>
        <button>Ver Hotel</button>
      </div>
    </div>
  );
};

export default Hotel;

import React, { useState } from "react";
import search from "../img/filters/search.svg";
import star from "../img/filters/star.svg";
import Stars from "./Stars";
import Axios from "axios";

const Filter = ({ setDataHotels, copiaDataHotels, dataHotels }) => {
  const [searchFilter, setSearchFilter] = useState("");

  const [error, setError] = useState(false);
  const [raitingStars, setRaitingStars] = useState({
    starAll_0: false,
    star_5: false,
    star_4: false,
    star_3: false,
    star_2: false,
    star_1: false,
  });

  const { starAll_0, star_5, star_4, star_3, star_2, star_1 } = raitingStars;

  const joinArray  = (array1, array2) => {
     const array3 = array1.concat(array2);
     return array3
  }

  const filterStars = (checked, number) => {
    if (number === 0) {
      return setDataHotels(copiaDataHotels);
    }
      const resp = copiaDataHotels.filter((hotels) => hotels.stars === number);
      setDataHotels(resp);

      console.log(joinArray(dataHotels,resp))



  };

  

  const getNameFilter = (e) => {
    setSearchFilter(e.target.value);
  };

  const getStarFilter = (e) => {
    setRaitingStars({
      ...raitingStars,
      [e.target.name]: e.target.checked,
    });

    const removeNumber = e.target.name.split("_");
    const numberStar = Number(removeNumber[removeNumber.length - 1]);
    filterStars(e.target.checked, numberStar);
  };

  const newResultFilter = async (e) => {
    e.preventDefault();
    if (searchFilter.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    const newList = await Axios.get(
      `http://localhost:8000/listHotels/${searchFilter}`
    );
    setDataHotels(newList.data.hotels);
  };

  return (
    <div className="filter">
      <div className="filter-container">
        <div className="filter-title">
          <h2>Filtros</h2>
        </div>

        <div className="filter-search">
          {error ? <p>Debe ingresar Nombre del hotel</p> : null}
          <div className="filter-name">
            <img src={search} alt="search" />
            <h2>Nombre de hotel</h2>
          </div>
          <input
            type="text"
            placeholder="Ingrese el nombre del hotel"
            onChange={getNameFilter}
          />
          <button onClick={newResultFilter}>Aceptar</button>
        </div>
        <div className="filter-star">
          <div className="filter-star-title">
            <img src={star} alt="star" />
            <h2>Estrellas</h2>
          </div>
          <div className="stars">
            <div>
              <input
                type="checkbox"
                defaultChecked={starAll_0}
                onChange={getStarFilter}
                name="starAll_0"
              />
              <label>Todas las estrellas</label>
            </div>
            <div>
              <input
                type="checkbox"
                onChange={getStarFilter}
                name="star_5"
                defaultChecked={star_5}
              />
              <Stars raiting={5} />
            </div>
            <div>
              <input
                type="checkbox"
                onChange={getStarFilter}
                name="star_4"
                defaultChecked={star_4}
              />
              <Stars raiting={4} />
            </div>
            <div>
              <input
                type="checkbox"
                onChange={getStarFilter}
                name="star_3"
                defaultChecked={star_3}
              />
              <Stars raiting={3} />
            </div>
            <div>
              <input
                type="checkbox"
                onChange={getStarFilter}
                name="star_2"
                defaultChecked={star_2}
              />
              <Stars raiting={2} />
            </div>
            <div>
              <input
                type="checkbox"
                onChange={getStarFilter}
                name="star_1"
                defaultChecked={star_1}
              />
              <Stars raiting={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

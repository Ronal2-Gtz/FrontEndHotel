import React, { useState } from "react";
import search from "../img/filters/search.svg";
import star from "../img/filters/star.svg";
import Stars from "./Stars";
import Axios from "axios";

const Filter = ({ setDataHotels }) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [error, SetError] = useState(false);

  const getNameFilter = (e) => {
    setSearchFilter(e.target.value);
  };

  const newResultFilter = async (e) => {
    e.preventDefault();
    if(searchFilter.trim() === ""){
      SetError(true)
      return
    }
    SetError(false)
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
        {error? <p>Debe ingresar Nombre del hotel</p> : null }
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
              <input type="checkbox" defaultChecked={true} />{" "}
              <label>Todas las estrellas</label>
            </div>
            <div>
              <input type="checkbox" /> <Stars raiting={5} />{" "}
            </div>
            <div>
              <input type="checkbox" /> <Stars raiting={4} />{" "}
            </div>
            <div>
              <input type="checkbox" /> <Stars raiting={3} />{" "}
            </div>
            <div>
              <input type="checkbox" /> <Stars raiting={2} />{" "}
            </div>
            <div>
              <input type="checkbox" /> <Stars raiting={1} />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

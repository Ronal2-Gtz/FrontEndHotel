import React from 'react';
import axios from "axios";
import logo from '../img/logo-almundo.svg'

const Header = ({setDataHotels,setUrlImgs}) => {

    const getHotels = async() => {
        try {
          const hotel = await axios.get("http://localhost:8000/listHotels")
          setDataHotels(hotel.data.Hotels)
          setUrlImgs(hotel.data.urlImg)
        } catch (err) {
          console.log(err)
        }
      }

    return (
        <div className="header">
            <button onClick={getHotels}><img src={logo} alt="Logo"/></button>
        </div>
    );
}
 
export default Header;
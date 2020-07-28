import React, { useEffect}   from "react";
import axios from "axios";
import Filter from "./Filter";
import Hotel from "./Hotel";

const Home = ({dataHotels,urlImgs,setUrlImgs,setDataHotels}) => {

    useEffect(() => {
      getHotels()
    },[setDataHotels])

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
    <div className="home">
      <Filter setDataHotels = {setDataHotels}  />
      <div>
        {
          dataHotels.map((hotel) => <Hotel  urlImgs={urlImgs} key={hotel.id} hotel={hotel}/>)
        }
        
      </div>
    </div>
  );
};

export default Home;

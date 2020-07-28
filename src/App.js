import React, {useState, Fragment} from "react";
import Header from "./components/Header";
import Home from "./components/Home"

function App() {

  const [dataHotels, setDataHotels] = useState([])
  const [urlImgs, setUrlImgs] = useState({})

  return (
    <Fragment>
      <Header setDataHotels = {setDataHotels} setUrlImgs={setUrlImgs}/>
      <Home setDataHotels = {setDataHotels} setUrlImgs={setUrlImgs} urlImgs={urlImgs} dataHotels={dataHotels} />
      </Fragment>
  );
}

export default App;

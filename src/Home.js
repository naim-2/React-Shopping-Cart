import React from "react";
import home from "./img/home.png";

const Home = () => {
  return(
    <div>
        <h1>
            Welcome! Enjoy adding our products into the cart!
        </h1>
        <img id="homeimage" src={home}></img>
    </div>
  )
}

export default Home;
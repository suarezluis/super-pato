import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

import banner from "./images/superPatoBanner.jpg";
import grupo1 from "./images/grupo1.jpg";
import grupo2 from "./images/grupo2.jpg";
import grupo3 from "./images/grupo3.jpg";
import grupo4 from "./images/grupo4.jpg";
import grupo5 from "./images/grupo5.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img className="banner" src={banner} alt="" />
      <ReactPlayer
        className="player"
        url="https://www.youtube.com/watch?v=yOuQ8SuwAHc"
        playing
        width="100%"
        style={{ marginTop: 35, zIndex: -1 }}
        playing={true}
        loop={true}
        config={{
          youtube: {
            playerVars: { showinfo: 0 }
          }
        }}
      />
      <div className="carousel">
        <Carousel
          autoPlay={true}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          emulateTouch={true}
          showArrows={false}
          transitionTime={500}
        >
          <div>
            <img src={grupo1} />
          </div>
          <div>
            <img src={grupo2} />
          </div>
          <div>
            <img src={grupo3} />
          </div>
          <div>
            <img src={grupo4} />
          </div>
          <div>
            <img src={grupo5} />
          </div>
        </Carousel>
      </div>
      <div className="social">
        <a href="https://www.facebook.com/simplementesuperpato/">
          <FontAwesomeIcon className="icon" size="3x" icon={faFacebook} />
        </a>
        <a href="">
          <FontAwesomeIcon className="icon" size="3x" icon={faInstagram} />
        </a>
        <a href="">
          <FontAwesomeIcon className="icon" size="3x" icon={faTwitter} />
        </a>
        <a href="https://api.whatsapp.com/send?phone=59170736463">
          <FontAwesomeIcon className="icon" size="3x" icon={faWhatsapp} />
        </a>
        <br />
        <br />
        <p style={{ textAlign: "center" }} className="copyright">
          Copyright © Super Pato
        </p>
      </div>
    </div>
  );
}

export default App;

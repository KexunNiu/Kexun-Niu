import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useLocation } from "react-router-dom";

// import videoBg from "../backgroundVideo.mp4";
import audio2 from "../backgroundMusic2.mp3";
import soundControl from "../sound_control.png";
import "../styles/home.css";

//component
import Neighbours from "./Neighbours.component";
import ServiceBox from "./ServiceBox.component";
import Info from "./Info.component";

const HomeComponent = () => {
  const [muted, setMuted] = useState(true);
  const location = useLocation();
  const videoUrl = location.state?.videoUrl || "";

  const handleSoundMutted = () => {
    setMuted(!muted);
  };

  return (
    <div className="home-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="content">
        <button className="soundControl" onClick={handleSoundMutted}>
          <img
            src={soundControl}
            alt="sound control"
            className={`soundImg ${muted ? "paused" : ""}`}
          />
        </button>
        <ReactAudioPlayer
          id="audioPlayer"
          src={audio2}
          autoPlay
          loop
          muted={muted}
          volume={0.3}
        />
        <div className="main-content container-xlg d-flex flex-row justify-content-evenly flex-wrap-reverse pt-5 mb-5">
          <Neighbours></Neighbours>
          <ServiceBox></ServiceBox>
          <Info></Info>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;

import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

import audio2 from "../backgroundMusic2.mp3";
import soundControl from "../sound_control.png";
import "../styles/home.css";

//component
import ServiceBox from "./ServiceBox.component";
import Info from "./Info.component";
import NavigationToggle from "./NavigationToggle"
import WhiteEaseIn from "./WhiteEaseIn"

const HomeComponent = () => {
  const [muted, setMuted] = useState(true);
  const location = useLocation();
  const videoUrl = location.state?.videoUrl || "";

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1000);

  const handleSoundMutted = () => {
    setMuted(!muted);
  };

  // Use Framer Motion's scroll hook
  const { scrollY } = useScroll();

  // Apply a spring-like transformation to the vertical scroll position
  const yPos = useSpring(scrollY, {
    stiffness: 100, // Controls the speed of the spring
    damping: 20, // Controls the resistance or "bounciness"
  });

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1000);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <WhiteEaseIn/>
      <NavigationToggle/>
      <div className="home-container">
        <video autoPlay loop muted playsInline>
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
            <ServiceBox></ServiceBox>
            {isLargeScreen ? (
              <motion.div
                style={{ y: yPos }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
              >
                <Info />
              </motion.div>
            ) : (
              <Info /> // Render Info component without motion on smaller screens
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;

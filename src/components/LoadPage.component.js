import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useNavigate } from "react-router-dom";

import  "../styles/loadPage.css";

const LoadPage = () => {
  const API_KEY = "hx4611zcr3X0uBt4U7jKxljQXq8MHaYS5kfTUkkv1txKAgaCqaviLjgO";
  const API_URL =
    "https://api.pexels.com/videos/popular?orientation=landscape&min_width=2000&min_height=1080&per_page=20 ";

  const [videos, setVideos] = useState("");
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const [displayedProgress, setDisplayedProgress] = useState(0);
  const progress = useMotionValue(0);

  //fetch video from pexels API
  const fetchVideo = async () => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      });
      const data = await response.json();
      const fetchedVideos = data.videos;
      const randomIndex = Math.floor(Math.random() * fetchedVideos.length);
      const video = fetchedVideos[randomIndex].video_files.reduce(
        (prev, current) => (prev.width > current.width ? prev : current)
      );
      setVideos(video.link);
    } catch (error) {
      console.error("Failed to fetch video:", error);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      let progressInterval;

      const handleProgress = () => {
        if (videoElement.buffered.length > 0) {
          const loadedFraction =
            videoElement.buffered.end(0) / videoElement.duration;
          progress.set(loadedFraction * 100);
        }
      };

      const handleCanPlayThrough = () => {
        setLoading(false);
        clearInterval(progressInterval);
        progress.set(100);
        setDisplayedProgress(99);
        // Navigate to HomePage after a short delay
        setTimeout(() => {
          navigate("/home", { state: { videoUrl: videos } });
        }, 1000);
      };

      videoElement.addEventListener("progress", handleProgress);
      videoElement.addEventListener("canplaythrough", handleCanPlayThrough);

      progressInterval = setInterval(() => {
        setDisplayedProgress((prev) => {
          if (prev < 99) {
            return prev + 1;
          }
          return prev;
        });
      }, 100);

      return () => {
        videoElement.removeEventListener("progress", handleProgress);
        videoElement.removeEventListener(
          "canplaythrough",
          handleCanPlayThrough
        );
      };
    }
  }, [videos, progress, navigate]);

  return (
    <div className="loading-container">
      <motion.div className="loading-line">
        <motion.div
          className="loading-progress"
          style={{
            width: `${displayedProgress}%`,
          }}
        />
      </motion.div>
      <motion.div className="loading-percentage">
        {displayedProgress}%
      </motion.div>
      <video
        ref={videoRef}
        src={videos}
        style={{ display: "none" }}
        preload="auto"
      />
    </div>
  );
};

export default LoadPage;

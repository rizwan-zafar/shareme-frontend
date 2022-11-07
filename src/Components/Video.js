import React from "react";
import VideoFooter from "./VideoFooter";

export default function Video() {
  const videoRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        autoPlay
        loop
        ref={videoRef}
        className="video_player"
        src="video/cat.mp4"
      />
      <VideoFooter />
    </div>
  );
}

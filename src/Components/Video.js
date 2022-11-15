import React from "react";
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSidebar"


export default function Video({url,channel,description,title,likes,shares,messages}) {
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
      
      <iframe
        onClick={handleVideoPress}
        autoPlay
        loop
        title="YouTube video player"
        ref={videoRef}
        className="video_player"
        src={url}
      />
       <VideoFooter channel={channel} description={description} title={title} />
       <VideoSideBar likes={likes} shares={shares} messages={messages} />
     
    </div>
  );
}

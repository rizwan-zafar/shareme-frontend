import React from "react"
import "./App.css";
import { getAllVideos } from "./Services"
import Video from "./Components/Video"
function App() {
  const [apiVideos, setVideos] = React.useState([]);

  /*
   * get All Videos
  */
  const allVideos = async () => {
    const videos = await getAllVideos();
    setVideos(videos);
  }

  React.useEffect(() => {
    allVideos()
  }, [])

  return (
    <div className="App">
      <div className="logo">
        <h1>ShareMe</h1>
      </div>

      <div className="app_videos">
        {apiVideos ? apiVideos.map((item, index) => {
          return (
            <Video
              key={index}
              url={item.url}
              channel={item.channel}
              description={item.description}
              title={item.title}
              likes={item.likes}
              messages={item.messages}
              shares={item.shares} />
          )
        }) : "loading"}
        
         {/* https://youtube.com/embed/MlcTXXGJJMg?autoplay=1&mute=1" */}
          

      </div>
    </div>
  );
}

export default App;

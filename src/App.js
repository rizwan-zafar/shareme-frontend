import "./App.css";
import Video from "./Components/Video"
 function App() {
  return (
    <div className="App">
      <h1>ShareMe</h1>
      <div className="app_videos">
      <Video url="video/cat.mp4"
             channel="GoodLife"
             description="Good life is great blessing"
             title="this is the title"
             likes={100}
             messages={100}
             shares={100}
      />
      
      </div>
  
    </div>
  );
}

export default App;

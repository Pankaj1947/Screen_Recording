import "./App.css";
import ScreenRecording from "./ScreenRecorder";
// import { useReactMediaRecorder } from "react-media-recorder";
// import { useState } from "react";

function App() {
  // const { status, startRecording, stopRecording, mediaBlobUrl } =
  //   useReactMediaRecorder({ screen: true });
  // const [completed, setCompleted] = useState(false);
  return (
    <div className="app">
      <ScreenRecording
        screen={true}
        audio={true}
        video={true}
        downloadRecordingPath="abcd"
        downloadRecordingType="mp4"
        emailToSupport="abcd@xyz.com"
      />
      {/* <p>{status}</p>
      <button
        onClick={() => {
          setCompleted(false);
          startRecording();
        }}
      >
        Start Recording
      </button>
      <button
        onClick={() => {
          setCompleted(true);
          stopRecording();
        }}
      >
        Stop Recording
      </button>
      <video src={mediaBlobUrl} controls autoPlay loop />
      {completed && <a href={mediaBlobUrl}>Download</a>}
      {completed && console.log(mediaBlobUrl)} */}
    </div>
  );
}

export default App;

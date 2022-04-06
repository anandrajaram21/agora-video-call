import { useState } from "react";
import AgoraUIKit from "agora-react-uikit";

function App() {
  const [videoCall, setVideoCall] = useState(true);
  console.log(process.env.REACT_APP_APP_ID);
  const rtcProps = {
    appId: process.env.REACT_APP_APP_ID,
    channel: process.env.REACT_APP_CHANNEL_NAME,
    token: process.env.REACT_APP_TOKEN,
  };
  const callbacks = {
    EndCall: () => {
      setVideoCall(false);
    },
  };
  return videoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 style={{ cursor: "pointer" }} onClick={() => setVideoCall(true)}>
      Start Video Call
    </h3>
  );
}

export default App;

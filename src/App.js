import "./App.scss";
import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GetTextFromImgAction } from "./State/AsyncActions/GetTextFromImgAction";
import MP4 from "./Components/mp4Tomp3/mp4Tomp3";
import ImgToText from "./Components/ImgToText/ImgToText";
import { Getmp3 } from "./State/AsyncActions/Getmp3";
function App() {
  const dispatch = useDispatch();
  const State = useSelector((state) => state.ConverterReducer);
  const [Value, SetValue] = React.useState("");
  function adsad() {
    if (State.Files != null) {
      dispatch(GetTextFromImgAction(State.Files, State.Lang));
    }
  }
  function youtube_parser(url) {
    let regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }
  const handleSubmit = () => {
    const youtubeID = youtube_parser(Value);
    dispatch(Getmp3(youtubeID));
  };
  return (
    <div className="App">
      <ImgToText adsad={adsad}></ImgToText>
      <MP4 Get={handleSubmit} Value={Value} SetValue={SetValue}></MP4>
      <div className="TextBox">
        {State.Text ? (
          <div className="Text">{State.Text}</div>
        ) : (
          <div className="Error">{State.Error}</div>
        )}
      </div>
    </div>
  );
}

export default App;

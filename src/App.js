import "./App.scss";
import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GetTextFromImgAction } from "./State/AsyncActions/GetTextFromImgAction";
import MP4 from "./Components/mp4Tomp3/mp4Tomp3";
import ImgToText from "./Components/ImgToText/ImgToText";
function App() {
  const dispatch = useDispatch();
  const State = useSelector((state) => state.ConverterReducer);
  const [Value, SetValue] = React.useState("");
  function adsad() {
    if (State.Files != null) {
      dispatch(GetTextFromImgAction(State.Files, State.Lang));
    }
  }
  console.log(Value);
  function youtube_parser(url) {
    let regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }
  const handleSubmit = () => {
    const youtubeID = youtube_parser(Value);
    const options = {
      method: "GET",
      url: "https://youtube-mp36.p.rapidapi.com/dl",
      params: { id: youtubeID },
      headers: {
        "X-RapidAPI-Key": "e165504438msh46a24a5fa46f509p161b9djsn666436760003",
        "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((res) => {
        if (res.data.duration < 7200) {
          dispatch({ type: "GET_URL_RESULT", payload: res.data.link });
        } else {
          dispatch({ type: "GET_ERROR2", payload: "Ошибка" });
        }
      })
      .catch((error) => {
        dispatch({ type: "GET_ERROR2", payload: "Ошибка" });
      });
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

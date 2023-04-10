import "./App.scss";
import React from "react";
import axios from "axios";
import ImgToText from "./Components/ImgToText/ImgToText";
import { useDispatch, useSelector } from "react-redux";
import { GetTextFromImgAction } from "./State/AsyncActions/GetTextFromImgAction";
function App() {
  const dispatch = useDispatch();
  const State = useSelector((state) => state.ConverterReducer);
  const [urlResult, setUrlResult] = React.useState(null);
  const [Value, SetValue] = React.useState("");
  function adsad() {
    dispatch(GetTextFromImgAction(State.Files, State.Lang));
  }

  function youtube_parser(url) {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }
  const handleSubmit = () => {
    const youtubeID = youtube_parser(Value);
    console.log(youtubeID);

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
          setUrlResult(res.data.link);
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
      <section className="content">
        <h1 className="content_title">YouTube to MP3 Converter</h1>
        <p className="content_description">
          Transform YouTube videos into MP3s in just a few clicks!
        </p>

        <input
          onChange={(e) => {
            SetValue(e.target.value);
          }}
          placeholder="Paste a Youtube video URL link..."
          className="form_input"
          type="text"
        />
        <button type="submit" className="form_button" onClick={handleSubmit}>
          Search
        </button>

        {urlResult ? (
          <a
            download={true}
            target="_blank"
            rel="noreferrer"
            href={State.urlResult}
            className="download_btn"
          >
            Download MP3
          </a>
        ) : (
          ""
        )}
        {State.Error2 ? <div className="Error">{State.Error2}</div> : ""}
      </section>
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

import axios from "axios";
export const Getmp3 = (youtubeID) => {
  return (dispatch) => {
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
};

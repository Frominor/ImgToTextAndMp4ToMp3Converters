import Tesseract from "tesseract.js";
export const GetTextFromImgAction = (Files, Lang) => {
  return async (dispatch) => {
    Tesseract.recognize(Files, Lang, {
      logger: (m) => console.log(m),
    })
      .then(({ data: { text } }) => {
        dispatch({ type: "FINALLY_TEXT_FROM_IMG", payload: text });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: "GET_ERROR",
          payload: "CORS политика не позволяет загружать img прямо из браузера",
        });
      });
  };
};

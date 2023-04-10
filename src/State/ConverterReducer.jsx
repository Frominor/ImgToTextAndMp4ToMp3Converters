const InitialState = {
  Files: null,
  urlResult: null,
  Text: "",
  Error: "",
  Lang: "eng",
  Error2: "",
};
const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
const ADD_IMG_TO_CONVERT = "ADD_IMG_TO_CONVERT";
const GET_URL_RESULT = "GET_URL_RESULT";
const FINALLY_TEXT_FROM_IMG = "FINALLY_TEXT_FROM_IMG";
const GET_ERROR = "GET_ERROR";
const GET_ERROR2 = "GET_ERROR2";
export const ConverterReducer = (state = InitialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      console.log(action.payload);
      return { ...state, Lang: action.payload };
    case ADD_IMG_TO_CONVERT:
      return { ...state, Files: action.payload };
    case GET_URL_RESULT:
      return { ...state, urlResult: action.payload };
    case GET_ERROR:
      return { ...state, Error: action.payload };
    case FINALLY_TEXT_FROM_IMG:
      return { ...state, Text: action.payload };
    case GET_ERROR2:
      return { ...state, Error2: action.payload };
    default:
      return { ...state };
  }
};

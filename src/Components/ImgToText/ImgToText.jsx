import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ImgToText.scss";
import Button from "../../Button";
export default function ImgToText({ adsad }) {
  const State = useSelector((state) => state.ConverterReducer);
  const dispatch = useDispatch();
  return (
    <div className="ImgToText">
      <p className="Title">Img To Text Converter</p>
      <div className="InpBlock">
        <div className="asd">
          <input
            className="LoadFile"
            type={"file"}
            onChange={(e) => {
              console.log(e.target.files);
              dispatch({
                type: "ADD_IMG_TO_CONVERT",
                payload: e.target.files[0],
              });
              dispatch({ type: "GET_ERROR", payload: null });
            }}
          ></input>
        </div>
        <div className="BtnBox">
          <Button name={"eng"}></Button>
          <Button name={"rus"}></Button>
        </div>
      </div>
      <button
        onClick={adsad}
        disabled={State.Files == null ? true : false}
        className="ConvertButton"
      >
        Convert
      </button>
    </div>
  );
}

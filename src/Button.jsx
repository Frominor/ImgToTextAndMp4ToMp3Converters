import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Buttons.scss";
export default function Button({ name }) {
  const State = useSelector((state) => state.ConverterReducer);
  const dispatch = useDispatch();
  return (
    <div className="Btns">
      <input name={name} checked={name == State.Lang} type={"checkbox"}></input>
      <label
        onClick={() => {
          dispatch({ type: "CHANGE_LANGUAGE", payload: name });
        }}
      >
        {name}
      </label>
    </div>
  );
}

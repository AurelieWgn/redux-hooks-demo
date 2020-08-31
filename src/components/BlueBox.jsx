import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../actions";

const BlueBox = () => {
  const dispatch = useDispatch();

  return <div id="blueBox" onClick={() => dispatch(changeColor("blue"))}></div>;
};

export default BlueBox;

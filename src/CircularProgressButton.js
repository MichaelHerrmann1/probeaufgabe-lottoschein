import React from "react";
import CircularProgress from "./CircularProgress";

import "./CircularProgressButton.scss";

export default function CircularProgressButton({
  value,
  maxValue,
  btnText,
  onClick,
}) {
  return (
    <div className="circ-prog-btn" onClick={onClick}>
      <div
        className={`circ-prog-btn__button ${
          value === maxValue ? "circ-prog-btn__button--unlocked" : ""
        }`}
      >
        <div className="circ-prog-btn__buttontext">{btnText}</div>
      </div>
      <div
        className={`circ-prog-btn__circle ${
          value === maxValue ? "circ-prog-btn__circle--unlocked" : ""
        }`}
      >
        <CircularProgress value={value} maxValue={maxValue} />
      </div>
    </div>
  );
}

import React from "react";

import "./CircularProgress.scss";

export default function CircularProgress({
  value,
  maxValue,
  alertProgress = false,
}) {
  return (
    <div className={"circ-prog"}>
      <svg viewBox="0 0 100 100" className="circ-prog__circle">
        <circle cx="50" cy="50" r="42" className={`circ-prog__circle__bg`} />
        <circle
          cx="50"
          cy="50"
          r="42"
          className="circ-prog__circle__bar"
          style={{
            strokeDashoffset: 264 - (264 / maxValue) * value,
          }}
        />
      </svg>
      <div
        className={`circ-prog__text
            ${alertProgress ? "circ-prog__text--alert" : ""}`}
      >
        {value}/{maxValue}
      </div>
    </div>
  );
}

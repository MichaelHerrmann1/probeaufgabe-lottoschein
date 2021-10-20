import React from "react";

import "./CircularProgress.scss";

export default function CircularProgress({ value, maxValue, className = "" }) {
  return (
    <div className={"circ-prog " + className}>
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
      <div className="circ-prog__text">
        {value}/{maxValue}
      </div>
    </div>
  );
}

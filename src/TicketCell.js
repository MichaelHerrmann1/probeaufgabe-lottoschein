import React from "react";
import "./TicketCell.scss";

export default function TicketCell({
  number,
  enabled,
  crossed,
  onAction,
  onUnallowedClick,
}) {
  return (
    <div
      className={`ticket-cell ${enabled ? "" : "ticket-cell--disabled"}`}
      onClick={() => (enabled ? onAction(number) : onUnallowedClick())}
    >
      <div
        className={`ticket-cell__crossmark-dummy
          ${crossed ? "ticket-cell__crossmark-dummy--crossed" : ""}`}
      >
        <svg
          viewBox="0 0 100 100"
          className={`ticket-cell__crossmark
            ${crossed ? "ticket-cell__crossmark--crossed" : ""}`}
        >
          <line
            x1="5"
            y1="5"
            x2="95"
            y2="95"
            className="ticket-cell__crossmark__1"
          />
          <line
            x1="5"
            y1="95"
            x2="95"
            y2="5"
            className="ticket-cell__crossmark__2"
          />
        </svg>
      </div>
      <div
        className={`ticket-cell__number 
          ${crossed ? "ticket-cell__number--crossed" : ""}`}
      >
        {number}
      </div>
    </div>
  );
}

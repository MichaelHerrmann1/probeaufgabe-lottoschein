import React from "react";
import "./TicketCell.css";

export default function TicketCell({ number, enabled, crossed, handleAction }) {
  return (
    <div
      className={`ticket-cell ${enabled ? "" : "ticket-cell--disabled"}`}
      onClick={() => (enabled ? handleAction(number) : undefined)}
    >
      <svg
        viewBox="0 0 100 100"
        className={`ticket-cell__crossmark
          ${!crossed ? "ticket-cell__crossmark--animate" : ""}`}
      >
        <line x1="5" y1="5" x2="95" y2="95" className="redline" />
        <line x1="95" y1="5" x2="5" y2="95" className="redline" />
      </svg>
      <div className="ticket-cell__number">{number}</div>
    </div>
  );
}

import React from "react";
import "./TicketCell.css";

export default function TicketCell({number, enabled, crossed, handleAction}) {
  return <div className="ticket-cell">
      <div className="ticket-cell__number">
        {number}
      </div>
    </div>;
}

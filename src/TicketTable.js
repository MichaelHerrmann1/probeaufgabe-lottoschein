import React from "react";
import TicketCell from "./TicketCell";

import "./TicketTable.css";

export default function TicketTable() {
  // range 1...49
  const numbers = Array.from(new Array(49), (x, i) => i + 1);
  const tableCells = numbers.map((i) => (
    <TicketCell
      key={i}
      number={i}
      enabled={true}
      crossed={false}
      handleAction={null}
    />
  ));
  return (
    <div className="square-container">
      <div className="ticket-table">
        {tableCells}
      </div>
    </div>
  )
}

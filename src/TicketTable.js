import React from "react";
import TicketCell from "./TicketCell";

import "./TicketTable.css";

export default function TicketTable({ userBet, onBetChange }) {
  const handleClick = (number) => {
    let newBet = [];
    if (userBet.includes(number)) {
      //delete
      newBet = userBet.filter((el) => el !== number);
    } else {
      //add
      newBet = [...userBet, number];
    }

    // sanity check
    newBet = Array.from(new Set(newBet)); //remove duplicates
    let newBetSan = newBet.filter((number) => number >= 1 && number <= 49);
    if (newBetSan.length > 6) newBetSan.splice(6, newBetSan.length - 6);

    newBetSan.sort();
    onBetChange(newBetSan);
  };

  // range 1...49
  const numbers = Array.from(new Array(49), (x, i) => i + 1);
  const tableCells = numbers.map((i) => (
    <TicketCell
      key={i}
      number={i}
      enabled={userBet.length < 6 || userBet.includes(i)}
      crossed={userBet.includes(i)}
      handleAction={handleClick}
    />
  ));

  return (
    <div className="square-container">
      <div className="ticket-table">{tableCells}</div>
    </div>
  );
}

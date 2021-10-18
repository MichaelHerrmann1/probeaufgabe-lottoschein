import React, { useState } from "react";
import TicketTable from "./TicketTable";

import "./App.css";

function App() {
  const [userBet, setUserBet] = useState([]);

  const handleBetChange = (newBet) => {
    setUserBet(newBet);
    if (newBet.length >= 6) {
      console.log("Potential bet: " + newBet);
    }
  };

  return (
    <div className="App">
      <TicketTable userBet={userBet} onBetChange={handleBetChange} />
    </div>
  );
}

export default App;

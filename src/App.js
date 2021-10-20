import React, { useState } from "react";
import TicketTable from "./TicketTable";
import CircularProgressButton from "./CircularProgressButton";

import "./App.scss";

function App() {
  const [userBet, setUserBet] = useState([]);
  const [finished, setFinished] = useState(false);

  const handleBetChange = (newBet) => {
    setUserBet(newBet);
  };

  const handleSubmitClick = () => {
    if (userBet.length === 6) setFinished(true);
  };

  if (finished) {
    return <div>Submission: {userBet.toString()}</div>;
  }
  return (
    <div className="App">
      <TicketTable userBet={userBet} onBetChange={handleBetChange} />
      <div className="App__submit-button">
        <CircularProgressButton
          value={userBet.length}
          maxValue={6}
          btnText="Weiter"
          onClick={handleSubmitClick}
          className="App__submit-button"
        />
      </div>
    </div>
  );
}

export default App;

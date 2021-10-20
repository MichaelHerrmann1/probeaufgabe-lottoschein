import React, { useState, useEffect } from "react";
import TicketTable from "./TicketTable";
import CircularProgressButton from "./CircularProgressButton";

import "./App.scss";

function App() {
  const [userBet, setUserBet] = useState([]);
  const [finished, setFinished] = useState(false);
  const [activateButtonAlert, setActivateButtonAlert] = useState(false);

  useEffect(() => {
    window.addEventListener("animationend", handleAlertFinished);
    return () => {
      window.removeEventListener("animationend", handleAlertFinished);
    };
  }, []);

  const handleBetChange = (newBet) => {
    setUserBet(newBet);
  };

  const handleSubmitClick = () => {
    if (userBet.length === 6) setFinished(true);
  };

  const handleUnallowedClick = () => {
    setActivateButtonAlert(true);
  };

  const handleAlertFinished = () => {
    setActivateButtonAlert(false);
  };

  if (finished) {
    return <div>Submission: {userBet.toString()}</div>;
  }
  return (
    <div className="App">
      <TicketTable
        userBet={userBet}
        onBetChange={handleBetChange}
        onUnallowedClick={handleUnallowedClick}
      />
      <div className="App__submit-button">
        <CircularProgressButton
          value={userBet.length}
          maxValue={6}
          btnText="Weiter"
          onClick={handleSubmitClick}
          activateAlert={activateButtonAlert}
        />
      </div>
    </div>
  );
}

export default App;

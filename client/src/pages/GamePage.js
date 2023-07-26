import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Canvas from "../components/Canvas";
import Timer from "../components/Timer";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./GamePage.css";

const GamePage = () => {
  const currentSession = useSelector((state) => state.session);
  const players = currentSession.players;
  const currPlayer = 1; // temp for fe - TODO grab player id index

  let imageSource;
  if (currPlayer === 1) {
    imageSource = "p1.png";
  } else if (currPlayer === 2) {
    imageSource = "p2.png";
  } else if (currPlayer === 3) {
    imageSource = "p3.png";
  } else {
    imageSource = "p4.png";
  }

  return (
    <div className="game-container">
      <div className="game-info">
        <div>
          <h2>Session ID: {currentSession._id}</h2>
        </div>
        <div className="curr-player">
          <img src={"/assets/images/players/" + imageSource} alt="lobby" />
          <h2>Player {currPlayer}/4</h2>
        </div>
        <div className="countdown">
          <h2>Time Remaining:</h2>
          <div className="timer-wrapper">
            <CountdownCircleTimer
              isPlaying
              duration={60}
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[10, 6, 4, 0]}
            >
              {Timer}
            </CountdownCircleTimer>
          </div>
        </div>
      </div>
      <div className="drawing-space">
        <Canvas />
      </div>
    </div>
  );
};

export default GamePage;

import React, { useEffect, useState } from "react";
import "./WaitingTurnPage.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function WaitingTurnPage() {
  const currentSession = useSelector((state) => state.session);
  const user = useSelector((state) => state.user._id);
  const navigate = useNavigate();
  let [drawn, setDrawn] = useState(false);

  useEffect(() => {
    let currentTurn = currentSession.quadrants.length;
    let userIndex = currentSession.players.indexOf(user);
    let delay = 0;

    if (drawn) {
      delay = 10000 * (4 - currentTurn);
    } else {
      delay = 10000 * (userIndex - currentTurn);
    }

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        fetch(
          `https://sketch-connect-be.onrender.com/sessions/${currentSession._id}`, 
          {
            method: "GET"
          }
        )
        .then((response) => {
          if (!response.ok) {
            throw new Error("HTTP error " + response.status);
          }
          return response.json();
        })
        .then((response) => {
          if (response.quadrants.length === response.players.length) {
            clearInterval(interval)
            clearTimeout(timer);
            navigate(`/complete/${currentSession._id}`);
          }
    
          let currentTurn = response.quadrants.length;
          let userIndex = response.players.indexOf(user);

          console.log("currentTurn: ", currentTurn, "userIndex: ", userIndex)
          if (currentTurn === userIndex) {
            clearInterval(interval)
            clearTimeout(timer);
            setDrawn(true);
            navigate(`/game/turn/${currentSession._id}`);
          }
        })
      }, 1000);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [drawn]);

  /*
  useEffect(() => {
    let delay = 0;

    fetch(
      `https://sketch-connect-be.onrender.com/sessions/${currentSession._id}`, 
      {
        method: "GET"
      }
    ).then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then((response) => {
      if (response.status === "completed") {
        navigate(`/complete/${currentSession._id}`);
      }

      let currentTurn = response.quadrants.length;
      let userIndex = response.players.indexOf(user);

      if (currentTurn > userIndex) {
        delay = 10200 * (4 - currentTurn);
        setTimeout(() => {
            navigate(`/complete/${currentSession._id}`);
          }, delay);
        } else if (currentTurn < userIndex) {
          delay = 10200 * (userIndex - currentTurn);
          setTimeout(() => {
            navigate(`/game/turn/${currentSession._id}`);
          }, delay);
        }
      });
  }, []);
  */

  return (
    <div className="waiting-text">
      <h1>Waiting for current player to finish drawing</h1>
    </div>
  );
}

export default WaitingTurnPage;

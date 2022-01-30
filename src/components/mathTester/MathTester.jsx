import React from 'react';
import { useState, useEffect } from "react";
import "./mathTester.css";

//Components
import Timer from "../timer/Timer"

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setRightAnswer, setWrongAnswer, setResetScore, checkScore } from "../../reducers/sumCheckerSlice";
import { setGameModeTen, setGameModeHundred, setGameModeThousand, currentGameMode } from "../../reducers/gameModeSlice";
import { selectUserName } from "../../reducers/userSlice";
import { gameStatus, timerStatus } from "../../reducers/timerSlice";

//Firebase Functions
import { addScoreTen, addScoreHundred, addScoreThousand } from '../../firebaseFunctions/addScore';

const MathTester = () => {

  //Redux functions
  const score = useSelector(checkScore);
  const userName = useSelector(selectUserName)
  const gameMode = useSelector(currentGameMode);
  const gameLength = useSelector(gameStatus);
  const dispatch = useDispatch();

  //sum state
  const [sum, setSum] = useState({});

  //function for creating sum
  const createSum = (number1 = 10, number2 = 10) => {
    const randomNumberOne = Math.floor(Math.random() * number1);
    const randomNumberTwo = Math.floor(Math.random() * number2);
    const answer = randomNumberOne + randomNumberTwo;

    const sumObject = {
      number1: randomNumberOne,
      number2: randomNumberTwo,
      answer
    }
    setSum(sumObject);
  }

  //Handle user submit 
  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target[0].value === "") {
      alert("You forgot to give an answer!")
    }
    else if (event.target[0].value == sum.answer) {
      dispatch(setRightAnswer())
      event.target[0].value = "";
    }
    else if (event.target[0].value != "" && event.target.value != sum.answer) {
      if (score.score == 0) {
        event.target[0].value = "";
      } else {
        dispatch(setWrongAnswer())
        event.target[0].value = "";
      }
    }
    else {
      return
    }
  }

  useEffect(() => {
    if (gameMode.gameMode === "ten") {
      createSum(10, 10);
    } else if (gameMode.gameMode === "hundred") {
      createSum(100, 100)
    } else if (gameMode.gameMode === "thousand") {
      createSum(1000, 1000)
    }
  }, [gameMode, score])

  useEffect(() => {
    if (gameLength === "done") {
      switch (gameMode.gameMode) {
        case "ten": addScoreTen(userName, score.score)
          break
        case "hundred": addScoreHundred(userName, score.score)
          break
        case "thousand": addScoreThousand(userName, score.score)
          break
        default: return
      }

      dispatch(setResetScore())
    }
  }, [gameLength])

  return (
    <div className="math-tester-container">
      <div className="math-tester-games-button">
        <div className="math-tester-games-button-container">
          <p>Games</p>
          <button onClick={() => dispatch(setGameModeTen())}>10</button>
          <button onClick={() => dispatch(setGameModeHundred())}>100</button>
          <button onClick={() => dispatch(setGameModeThousand())}>1000</button>
        </div>
      </div>
      <div className="current-game-mode">
        <h2>Current GameMode: {gameMode.gameMode}</h2>
      </div>
      <div className="current-game-score">
        <h1>Score: {score.score}</h1>
      </div>
      <div className="timer">
        <Timer />
      </div>
      {gameLength === "playing" &&
        <div className="current-game-sum">
          <span className="math-tester-sum">{`${sum.number1} + ${sum.number2}`}</span>
          <form onSubmit={handleSubmit} className="form">
            <input className="math-input-answer" disabled={gameLength === "none" || gameLength === "done"} placeholder="Answer" type="number" style={{ fontSize: "20px" }} />
            <button type="submit" className="submit-button">submit</button>
          </form>
        </div>
      }
    </div>
  )
};

export default MathTester;

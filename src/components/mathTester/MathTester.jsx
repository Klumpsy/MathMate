import React from 'react';
import { useState, useEffect } from "react";
import "./mathTester.css";

//Components
import Timer from "../timer/Timer"
import GameSummery from '../gameSummery/GameSummery';
import GameModes from '../gameModes/GameModes';

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setRightAnswer, setWrongAnswer, checkScore } from "../../reducers/sumCheckerSlice";
import { currentGameMode, currentGameType } from "../../reducers/gameModeSlice";
import { selectUserName } from "../../reducers/userSlice";
import { gameStatus, timerStatus } from "../../reducers/timerSlice";
import { addToSummery } from '../../reducers/gameSummerySlice';

//Firebase Functions
import { addScore } from '../../firebaseFunctions/addScore';

const MathTester = () => {

  //Redux functions
  const score = useSelector(checkScore);
  const userName = useSelector(selectUserName)
  const gameMode = useSelector(currentGameMode);
  const gameType = useSelector(currentGameType)
  const gameLength = useSelector(gameStatus);
  const timer = useSelector(timerStatus)
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

  const createMultiplySum = (multiply = 1) => {
    const randomNumber = Math.floor(Math.random() * 10);
    const answer = randomNumber * multiply;

    const sumMultiplyObject = {
      number1: randomNumber,
      number2: multiply,
      answer
    }
    setSum(sumMultiplyObject);
  }

  const createMultiplyMixSum = () => {
    const randomNumberOne = Math.floor(Math.random() * 11);
    const randomNumberTwo = Math.floor(Math.random() * 11);
    const answer = randomNumberOne * randomNumberTwo;

    const sumMultiplyMixObject = {
      number1: randomNumberOne,
      number2: randomNumberTwo,
      answer
    }
    setSum(sumMultiplyMixObject);
  }

  //Handle user submit 
  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target[0].value === "") {
      alert("You forgot to give an answer!")
    }
    else if (event.target[0].value == sum.answer) {
      dispatch(setRightAnswer())
      dispatch(addToSummery({ sum, result: true, givenAnswer: event.target[0].value }))
      event.target[0].value = "";
    }
    else if (event.target[0].value != "" && event.target.value != sum.answer) {
      if (score == 0) {
        event.target[0].value = "";
      } else {
        dispatch(setWrongAnswer())
      }
      dispatch(addToSummery({ sum, result: false, givenAnswer: event.target[0].value }))
      event.target[0].value = "";
    }
    else {
      return
    }
  }

  useEffect(() => {
    switch (gameMode) {
      case 'ten': createSum(10, 10)
        break
      case 'hundred': createSum(100, 100)
        break
      case 'thousand': createSum(1000, 1000)
        break
      case 'multiplyTwo': createMultiplySum(2)
        break
      case 'multiplyThree': createMultiplySum(3)
        break
      case 'multiplyFour': createMultiplySum(4)
        break
      case 'multiplyFive': createMultiplySum(5)
        break
      case 'multiplySix': createMultiplySum(6)
        break
      case 'multiplySeven': createMultiplySum(7)
        break
      case 'multiplyEight': createMultiplySum(8)
        break
      case 'multiplyNine': createMultiplySum(9)
        break
      case 'mix': createMultiplyMixSum()
        break
      default: createSum(10, 10)
    }
  }, [gameMode, score])

  useEffect(() => {
    if (gameLength === "done") {
      switch (gameMode) {
        case "ten": addScore(userName, "sumTen", score)
          break
        case "hundred": addScore(userName, "sumHundred", score)
          break
        case "thousand": addScore(userName, "sumThousand", score)
          break
        case "multiplyTwo": addScore(userName, "multiplyTwo", score)
          break
        case "multiplyThree": addScore(userName, "multiplyThree", score)
          break
        case "multiplyFour": addScore(userName, "multiplyFour", score)
          break
        case "multiplyFive": addScore(userName, "multiplyFive", score)
          break
        case "multiplySix": addScore(userName, "multiplySix", score)
          break
        case "multiplySeven": addScore(userName, "multiplySeven", score)
          break
        case "multiplyEight": addScore(userName, "multiplyEight", score)
          break
        case "multiplyNine": addScore(userName, "multiplyNine", score)
          break
        case "mix": addScore(userName, "mix", score)
          break
        default: return
      }
    }
  }, [gameLength])


  return (
    <>
      {
        gameLength === "done" ?
          <GameSummery />
          :
          <div className="math-tester-container">
            {
              !timer && <GameModes />
            }
            <div className="current-game-mode">
              <h2>Current GameMode: {gameMode}</h2>
            </div>
            <div className="current-game-score">
              <h1>Score: {score}</h1>
            </div>
            <div className="timer">
              <Timer />
            </div>
            {gameLength === "playing" &&
              <div className="current-game-sum">
                {
                  gameType === "plus" && <span className="math-tester-sum">{`${sum.number1} + ${sum.number2}`}</span>
                }
                {
                  gameType === "multiply" && <span className="math-tester-sum">{`${sum.number1} x ${sum.number2}`}</span>
                }
                <form onSubmit={handleSubmit} className="form">
                  <input className="math-input-answer" disabled={gameLength === "none" || gameLength === "done"} placeholder="Answer" type="number" style={{ fontSize: "20px" }} />
                  <button type="submit" className="submit-button">submit</button>
                </form>
              </div>
            }
          </div>
      }
    </>
  )
};

export default MathTester;

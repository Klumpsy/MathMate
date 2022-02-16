import React from 'react';
import { useState, useEffect } from "react";
import "./mathTester.css";

//Components
import Timer from "../timer/Timer"
import GameSummery from '../gameSummery/GameSummery';
import GameModes from '../gameModes/GameModes';
import MathAnimation from '../MathAnimation/MathAnimation';

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setRightAnswer, setWrongAnswer, checkScore } from "../../reducers/sumCheckerSlice";
import { currentGameMode, currentGameType } from "../../reducers/gameModeSlice";
import { selectUserName } from "../../reducers/userSlice";
import { gameStatus, timerStatus } from "../../reducers/timerSlice";
import { addToSummery } from '../../reducers/gameSummerySlice';

//Firebase Functions
import { addScore } from '../../firebaseFunctions/addScore';

//Score table
import { gameModeTable } from '../../gameModeTable/gameModeTable';

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

  //function for creating add math problem 
  //Parameter numer1 gives the first random number between 10, 100 or 1000. parameter 2 also inserts 10, 100 or 1000 into the function. 
  //The function should return an object with 2 random numbers and the answer. 
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

  //Function for creating a multiplication math problem 
  //The function should return an object with 1 random number, a set multiplier and the answer. 
  const createMultiplySum = (multiply = 1) => {
    const randomNumber = Math.floor(Math.random() * 11);
    const answer = randomNumber * multiply;

    const sumMultiplyObject = {
      number1: randomNumber,
      number2: multiply,
      answer
    }
    setSum(sumMultiplyObject);
  }

  //Function for creating a mixed multiplication math problem 
  //The function should return and object with 2 random numbers and the answer. 
  const createMultiplyMixSum = (number) => {
    const randomNumberOne = Math.floor(Math.random() * number);
    const randomNumberTwo = Math.floor(Math.random() * number);
    const answer = randomNumberOne * randomNumberTwo;

    const sumMultiplyMixObject = {
      number1: randomNumberOne,
      number2: randomNumberTwo,
      answer
    }
    setSum(sumMultiplyMixObject);
  }

  //Handle user submit function 
  /*The function checks the answer and either increases the score by 1 if the answer was right or decreases the score by 1 if the 
  answer was wrong. If no answer was given an alert will be activated. The function will also dispatch the sum (wrong or right) to the
  summery Redux slice*/
  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target[0].value === "") {
      return
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
  //Lifecyle - when the score changes, the sum will also change depending on the gamemode. 
  useEffect(() => {
    switch (gameMode) {
      case 'ten':
        createSum(10, 10)
        break
      case 'hundred':
        createSum(100, 100)
        break
      case 'thousand':
        createSum(1000, 1000)
        break
      case 'multiplyTwo':
        createMultiplySum(2)
        break
      case 'multiplyThree':
        createMultiplySum(3)
        break
      case 'multiplyFour':
        createMultiplySum(4)
        break
      case 'multiplyFive':
        createMultiplySum(5)
        break
      case 'multiplySix':
        createMultiplySum(6)
        break
      case 'multiplySeven':
        createMultiplySum(7)
        break
      case 'multiplyEight':
        createMultiplySum(8)
        break
      case 'multiplyNine':
        createMultiplySum(9)
        break
      case 'mix':
        createMultiplyMixSum(11)
        break
      case 'mix Hard':
        createMultiplyMixSum(15)
        break
      default: createSum(10, 10)
    }
  }, [gameMode, score])

  //Lifecycle - The score will be added to Firebase depending on the type of sum. 
  useEffect(() => {
    if (gameLength === "done") {
      addScore(userName, gameModeTable[gameMode], score)
    }
  }, [gameLength])

  return (
    <>
      {
        gameLength === "done" ?
          <GameSummery />
          :
          <div className="math-tester-container">
            <div className="math-tester-info-container">
              <div className="game-mode-container">
                {
                  !timer && <GameModes />
                }
                <div className="current-game-mode">
                  <h2>Current GameMode: {gameMode}</h2>
                  {
                    gameLength === "playing" && <MathAnimation />
                  }
                </div>
              </div>
              <div className="current-game-score">
                <h1>Score: {score}</h1>
              </div>
            </div>
            <div className="current-game-sum-container">
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
          </div>
      }
    </>
  )
};

export default MathTester;

import React from 'react';
import { useState, useEffect } from "react";
import "./mathTester.css";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setRightAnswer, setWrongAnswer, setResetScore, checkScore } from "../../reducers/sumCheckerSlice";
import { setGameModeTen, setGameModeHundred, setGameModeThousand, currentGameMode } from "../../reducers/gameModeSlice";

const MathTester = () => {

  //Redux functions
  const score = useSelector(checkScore);
  const gameMode = useSelector(currentGameMode);
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
      dispatch(setWrongAnswer())
      event.target[0].value = "";
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
      <h2>Current GameMode: {gameMode.gameMode}</h2>
      <h1>Counter: {score.score}</h1>
      <div>
        <span className="math-tester-sum">{`${sum.number1} + ${sum.number2} =`}</span>
      </div>
      <form onSubmit={handleSubmit}>
        <input className="math-input-answer" placeholder="Answer" type="number" style={{ fontSize: "20px" }} />
        <button type="submit"></button>
      </form>
    </div>
  )
};

export default MathTester;

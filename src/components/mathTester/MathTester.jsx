import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { correctAnswer, wrongAnswer } from "../../actions"
import "./mathTester.css";

const MathTester = () => {

  //Redux functions
  const counter = useSelector(state => state.sumCheckReducer);
  const logged = useSelector(state => state.isLoggedReduder);
  const dispatch = useDispatch();

  //sum state
  const [sum, setSum] = useState({});

  //function for creating sum
  const createSum = () => {
    const randomNumberOne = Math.floor(Math.random() * 10);
    const randomNumberTwo = Math.floor(Math.random() * 10);
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
      dispatch(correctAnswer())
      event.target[0].value = "";
    }
    else if (event.target[0].value != "" && event.target.value != sum.answer) {
      dispatch(wrongAnswer())
      event.target[0].value = "";
    }
  }

  useEffect(() => {
    createSum();
  }, [counter])

  return (
    <div className="math-tester-container">
      <h1>Counter: {counter}</h1>
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

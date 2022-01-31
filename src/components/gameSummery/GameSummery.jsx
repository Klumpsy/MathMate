import React, { useEffect } from 'react';
import "./gameSummery.css";

//Redux 
import { useSelector } from "react-redux";
import { showSummery } from '../../reducers/gameSummerySlice';

const GameSummery = () => {
    const gameSummery = useSelector(showSummery)

    useEffect(() => {
        console.log(gameSummery)
    })

    return (
        <div className="game-summery-container">
            <div className="game-summery">
                <h2>Summery</h2>
                {gameSummery.map(item => (
                    item.result ?
                        <span className="right-answer">
                            {`${item.sum.number1} + ${item.sum.number2} = ${item.givenAnswer}`}
                        </span>
                        :
                        <span className="wrong-answer">
                            {`${item.sum.number1} + ${item.sum.number2} = ${item.givenAnswer} (Should be: ${item.sum.answer})`}
                        </span>
                ))}
                <button className="back-to-game-button">Back to game</button>
            </div>
        </div>
    )
};

export default GameSummery;

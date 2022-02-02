import React, { useEffect } from 'react';
import "./gameSummery.css";
import { v4 as uuid } from 'uuid';

//Redux 
import { useSelector, useDispatch } from "react-redux";
import { showSummery, removeSummery } from '../../reducers/gameSummerySlice';
import { setResetScore } from '../../reducers/sumCheckerSlice';
import { setGameStatusNone } from '../../reducers/timerSlice';
import { checkScore } from '../../reducers/sumCheckerSlice';
import { currentGameType } from '../../reducers/gameModeSlice';

const GameSummery = () => {

    const gameSummery = useSelector(showSummery)
    const gameScore = useSelector(checkScore)
    const gameType = useSelector(currentGameType)
    const dispatch = useDispatch()

    const handleNewGame = () => {
        dispatch(setResetScore())
        dispatch(removeSummery())
        dispatch(setGameStatusNone())
    }

    const uniqueId = () => {
        const id = uuid();
        return id;
    }

    return (
        <div className="game-summery-container">
            <div className="game-summery">
                <h2>Your score: {gameScore}</h2>
                <h3>Summery</h3>
                {gameSummery.map(item => (
                    item.result ?
                        gameType === "plus" ?
                            <span className="right-answer" key={uniqueId()}>
                                {`${item.sum.number1} + ${item.sum.number2} = ${item.givenAnswer}`}
                            </span>
                            :
                            <span className="right-answer" key={uniqueId()}>
                                {`${item.sum.number1} x ${item.sum.number2} = ${item.givenAnswer}`}
                            </span>
                        :
                        gameType === "plus" ?
                            <span className="wrong-answer" key={uniqueId()}>
                                {`${item.sum.number1} + ${item.sum.number2} = ${item.givenAnswer} (Should be: ${item.sum.answer})`}
                            </span>
                            :
                            <span className="wrong-answer" key={uniqueId()} >
                                {`${item.sum.number1} x ${item.sum.number2} = ${item.givenAnswer} (Should be: ${item.sum.answer})`}
                            </span>
                ))}
                <button className="back-to-game-button" onClick={handleNewGame}>Back to game</button>
            </div>
        </div>
    )
};

export default GameSummery;

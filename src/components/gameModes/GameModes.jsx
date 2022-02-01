import React from 'react';

import "./gameModes.css"

import { useDispatch } from 'react-redux';
import { setGameMode } from '../../reducers/gameModeSlice';
import { setGameStatusNone } from '../../reducers/timerSlice';

const GameModes = () => {
    const dispatch = useDispatch()

    const setGame = (e) => {
        switch (e.target.outerText) {
            case "+ 10": dispatch(setGameMode({ gameMode: "ten", gameType: "plus" }))
                break
            case "+ 100": dispatch(setGameMode({ gameMode: "hundred", gameType: "plus" }))
                break
            case "+ 1000": dispatch(setGameMode({ gameMode: "thousand", gameType: "plus" }))
                break
            case "x 3": dispatch(setGameMode({ gameMode: "multiplyThree", gameType: "multiply" }))
                break
            case "x 5": dispatch(setGameMode({ gameMode: "multiplyFive", gameType: "multiply" }))
                break
            case "x 7": dispatch(setGameMode({ gameMode: "multiplySeven", gameType: "multiply" }))
                break
            default: dispatch(setGameStatusNone())
        }
    }

    return (
        <div className="math-tester-games-button">
            <div className="math-tester-games-button-container">
                <p>Games</p>
                <button onClick={setGame} value="10">+ 10</button>
                <button onClick={setGame} value="100">+ 100</button>
                <button onClick={setGame} value="1000">+ 1000</button>
                <button onClick={setGame} value="x 3">x 3</button>
                <button onClick={setGame} value="x 5">x 5</button>
                <button onClick={setGame} value="x 7">x 7</button>
            </div>
        </div>
    )
};



export default GameModes;

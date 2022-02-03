import React from 'react';

import "./gameModes.css"

import { useDispatch } from 'react-redux';
import { setGameMode } from '../../reducers/gameModeSlice';
import { setGameStatusNone } from '../../reducers/timerSlice';

const GameModes = () => {
    const dispatch = useDispatch()

    //This function will set the gamemode to the value of the pushed button. 
    const setGame = (e) => {
        switch (e.target.outerText) {
            case "+ 10": dispatch(setGameMode({ gameMode: "ten", gameType: "plus" }))
                break
            case "+ 100": dispatch(setGameMode({ gameMode: "hundred", gameType: "plus" }))
                break
            case "+ 1000": dispatch(setGameMode({ gameMode: "thousand", gameType: "plus" }))
                break
            case "x 2": dispatch(setGameMode({ gameMode: "multiplyTwo", gameType: "multiply" }))
                break
            case "x 3": dispatch(setGameMode({ gameMode: "multiplyThree", gameType: "multiply" }))
                break
            case "x 4": dispatch(setGameMode({ gameMode: "multiplyFour", gameType: "multiply" }))
                break
            case "x 5": dispatch(setGameMode({ gameMode: "multiplyFive", gameType: "multiply" }))
                break
            case "x 6": dispatch(setGameMode({ gameMode: "multiplySix", gameType: "multiply" }))
                break
            case "x 7": dispatch(setGameMode({ gameMode: "multiplySeven", gameType: "multiply" }))
                break
            case "x 8": dispatch(setGameMode({ gameMode: "multiplyEight", gameType: "multiply" }))
                break
            case "x 9": dispatch(setGameMode({ gameMode: "multiplyNine", gameType: "multiply" }))
                break
            case "mix": dispatch(setGameMode({ gameMode: "mix", gameType: "multiply" }))
                break
            default: dispatch(setGameStatusNone())
        }
    }

    return (
        <div className="math-tester-games-button">
            <div className="math-tester-games-button-container">
                <h2>Games</h2>
                <button onClick={setGame} >+ 10</button>
                <button onClick={setGame} >+ 100</button>
                <button onClick={setGame} >+ 1000</button>
                <button onClick={setGame} >x 2</button>
                <button onClick={setGame} >x 3</button>
                <button onClick={setGame} >x 4</button>
                <button onClick={setGame} >x 5</button>
                <button onClick={setGame} >x 6</button>
                <button onClick={setGame} >x 7</button>
                <button onClick={setGame} >x 8</button>
                <button onClick={setGame} >x 9</button>
                <button onClick={setGame} >mix</button>
            </div>
        </div>
    )
};



export default GameModes;

import React, { useEffect, useState } from 'react'
import "./timer.css"

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setStart, setStop, timerStatus, setGameStatusActive, setGameStatusNone, setGameStatusDone } from "../../reducers/timerSlice";
import { currentGameMode } from "../../reducers/gameModeSlice";

const Timer = () => {

    //Redux functions
    const timer = useSelector(timerStatus);
    const gameMode = useSelector(currentGameMode);
    const dispatch = useDispatch();

    const [time, setTime] = useState(30)
    const [intervalID, setIntervalID] = useState(null)
    const hasTimerEnded = time <= 0
    const isTimerRunning = intervalID != null

    const update = () => {
        setTime(time => time - 1)
    }
    const startTimer = () => {
        dispatch(setStart())
        dispatch(setGameStatusActive())
        if (!hasTimerEnded && !isTimerRunning) {
            setIntervalID(setInterval(update, 1000))
        }
    }
    const resetSeconds = () => {
        checkGameModeForTime()
        dispatch(setGameStatusNone())
    }

    const checkGameModeForTime = () => {
        if (gameMode === "ten") {
            setTime(30)
        } else if (gameMode === "hundred") {
            setTime(60)
        } else if (gameMode === "thousand") {
            setTime(120)
        } else {
            setTime(45)
        }
    }

    useEffect(() => {
        checkGameModeForTime()
    }, [gameMode])

    useEffect(() => {
        if (hasTimerEnded) {
            clearInterval(intervalID)
            setIntervalID(null)
            dispatch(setStop())
            dispatch(setGameStatusDone())
        }
    }, [hasTimerEnded])

    useEffect(() => () => {
        clearInterval(intervalID)
    }, [])

    return (
        <div className="timer-container">
            <span>Time: {time}</span>
            {
                time === 0 ?
                    <button disabled={timer} onClick={resetSeconds}>reset Timer 30</button>
                    :
                    <button disabled={timer} onClick={startTimer}>Start</button>
            }
        </div>
    )
}

export default Timer

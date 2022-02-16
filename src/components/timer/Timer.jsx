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

    //Local state 
    const [time, setTime] = useState(30)
    const [intervalID, setIntervalID] = useState(null)
    const hasTimerEnded = time <= 0
    const isTimerRunning = intervalID != null

    //Fucntion for updating the timer 
    const update = () => {
        setTime(time => time - 1)
    }
    //Function from starting the timer 
    const startTimer = () => {
        dispatch(setStart())
        dispatch(setGameStatusActive())
        if (!hasTimerEnded && !isTimerRunning) {
            setIntervalID(setInterval(update, 1000))
        }
    }
    //Function for resetting the timer 
    const resetSeconds = () => {
        checkGameModeForTime()
        dispatch(setGameStatusNone())
    }

    //Function for checking the mode and returning the time according to the mode 
    const checkGameModeForTime = () => {
        if (gameMode === "ten") {
            setTime(30)
        } else if (gameMode === "hundred") {
            setTime(60)
        } else if (gameMode === "thousand") {
            setTime(120)
        } else if (gameMode === "mix" || gameMode === "mix Hard") {
            setTime(90)
        } else {
            setTime(45)
        }
    }
    //Lifecycle timer 
    useEffect(() => {
        let controller = new AbortController();
        checkGameModeForTime()
        return () => controller?.abort();
    }, [gameMode])

    useEffect(() => {
        let controller = new AbortController();
        if (hasTimerEnded) {
            clearInterval(intervalID)
            setIntervalID(null)
            dispatch(setStop())
            dispatch(setGameStatusDone())
        }
        return () => controller?.abort();
    }, [hasTimerEnded])

    useEffect(() => () => {
        let controller = new AbortController();
        clearInterval(intervalID)
        return () => controller?.abort();
    }, [])

    return (
        <div className="timer-container">
            <span>Time: {time}</span>
            {
                time === 0 ?
                    <button disabled={timer} onClick={resetSeconds}>reset Timer</button>
                    :
                    <button disabled={timer} onClick={startTimer}>Start</button>
            }
        </div>
    )
}

export default Timer

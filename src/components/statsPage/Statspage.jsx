import React, { useState, useEffect } from 'react'

import "./statspage.css"

//Firebase
import { getAllScoresSumTen, getAllScoresSumHundred, getAllScoresSumThousand } from '../../firebaseFunctions/addScore'

//Redux
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../reducers/userSlice";

const Statspage = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    const [userDataTen, setUserDataTen] = useState();
    const [userDataHundred, setUserDataHundred] = useState();
    const [userDataThousand, setUserDataThousand] = useState();

    useEffect(() => {
        const getUsers = async () => {
            const dataTen = await getAllScoresSumTen();
            setUserDataTen(dataTen.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            const dataHundred = await getAllScoresSumHundred();
            setUserDataHundred(dataHundred.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            const dataThousand = await getAllScoresSumThousand();
            setUserDataThousand(dataThousand.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        getUsers()
    }, [])

    return (
        <div className="high-score-list">
            <div className="high-score-game-mode-ten">
                <h2>Highscore sum 10</h2>
                {
                    userDataTen?.map(user => (
                        <div key={user.id} className="high-score-item">
                            <h3>{user.name}</h3>
                            <p>{user.score}</p>
                        </div>
                    ))
                }
            </div>
            <div className="high-score-game-mode-hundred">
                <h2>Highscore sum 100</h2>
                {
                    userDataHundred?.map(user => (
                        <div key={user.id} className="high-score-item">
                            <h3>{user.name}</h3>
                            <p>{user.score}</p>
                        </div>
                    ))
                }
            </div>
            <div className="high-score-game-mode-thousand">
                <h2>Highscore sum 1000</h2>
                {
                    userDataThousand?.map(user => (
                        <div key={user.id} className="high-score-item">
                            <h3>{user.name}</h3>
                            <p>{user.score}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Statspage

//https://www.youtube.com/watch?v=jCY6DH8F4oc

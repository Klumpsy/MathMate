import React, { useState, useEffect } from 'react'

import "./statspage.css"

//Icons
import { FaMedal } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

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
            const dataTenObjects = dataTen.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setUserDataTen((dataTenObjects.sort((a, b) => b.score - a.score)))
            const dataHundred = await getAllScoresSumHundred();
            const dataHundredObjects = dataHundred.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            setUserDataHundred((dataHundredObjects.sort((a, b) => b.score - a.score)))
            const dataThousand = await getAllScoresSumThousand();
            const dataThousandObjects = dataThousand.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            setUserDataThousand((dataThousandObjects.sort((a, b) => b.score - a.score)))
        }
        getUsers()
    }, [])

    const priceChecker = (index) => {
        switch (index) {
            case 0: return <FaMedal size={20} style={{ color: "yellow" }} />
            case 1: return <FaMedal size={20} style={{ color: "gray" }} />
            case 2: return <FaMedal size={20} style={{ color: "brown" }} />
            default: return <BsFillPersonFill size={20} style={{ color: "black" }} />
        }
    }

    return (
        <div className="high-score-list">
            <div className="high-score-game-mode-ten">
                <h2>Highscore sum 10</h2>
                {
                    userDataTen?.map((user, index) => (
                        <div key={user.id} className="high-score-item">
                            {priceChecker(index)}
                            <h3>{user.name}</h3>
                            <p>{user.score}</p>
                        </div>
                    ))
                }
            </div>
            <div className="high-score-game-mode-hundred">
                <h2>Highscore sum 100</h2>
                {
                    userDataHundred?.map((user, index) => (
                        <div key={user.id} className="high-score-item">
                            {priceChecker(index)}
                            <h3>{user.name}</h3>
                            <p>{user.score}</p>
                        </div>
                    ))
                }
            </div>
            <div className="high-score-game-mode-thousand">
                <h2>Highscore sum 1000</h2>
                {
                    userDataThousand?.map((user, index) => (
                        <div key={user.id} className="high-score-item">
                            {priceChecker(index)}
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

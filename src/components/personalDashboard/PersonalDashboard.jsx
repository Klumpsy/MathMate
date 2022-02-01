import React, { useEffect, useState } from 'react';
import "./personalDashboard.css";


//Redux
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../reducers/userSlice";

//Firebase
import { getPersonalScore } from '../../firebaseFunctions/addScore';

const PersonalDashboard = () => {
    const userName = useSelector(selectUserName);

    const [tenScore, setTenScore] = useState(null);
    const [hundredScore, setHundredScore] = useState(null);
    const [thousandScore, setThousandScore] = useState(null);
    const [multiplyThree, setMultiplyThree] = useState(null);
    const [multiplyFive, setMultiplyFive] = useState(null);
    const [multiplySeven, setMultiplySeven] = useState(null);

    useEffect(() => {
        const getScores = async () => {
            const dataTen = await getPersonalScore("sumTen", userName)
            setTenScore(dataTen)
            const dataHundred = await getPersonalScore("sumHundred", userName)
            setHundredScore(dataHundred)
            const dataThousand = await getPersonalScore("sumThousand", userName)
            setThousandScore(dataThousand)
            const dataMultiplyThree = await getPersonalScore("multiplyThree", userName)
            setMultiplyThree(dataMultiplyThree)
            const dataMultiplyFive = await getPersonalScore("multiplyFive", userName)
            setMultiplyFive(dataMultiplyFive)
            const dataMultiplySeven = await getPersonalScore("multiplySeven", userName)
            setMultiplySeven(dataMultiplySeven)
        }
        getScores()
    }, [])

    return (
        <div className="personal-dashboard-container">
            <div className="personal-dashboard">
                <h2>Your personal Stats</h2>
                <ul className="personal-score">
                    <li>Best + 10 sum score: <p>{tenScore}</p></li>
                    <li>Best + 100 sum score: <p>{hundredScore}</p></li>
                    <li>Best + 1000 sum score: <p>{thousandScore}</p></li>
                    <li>Best x 3 sum score: <p>{multiplyThree}</p></li>
                    <li>Best x 5 sum score: <p>{multiplyFive}</p></li>
                    <li>Best x 7 sum score: <p>{multiplySeven}</p></li>
                </ul>
            </div>
        </div>
    )
};

export default PersonalDashboard;

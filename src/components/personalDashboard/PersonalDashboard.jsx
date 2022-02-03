import React, { useEffect, useState } from 'react';
import "./personalDashboard.css";


//Redux
import { useSelector } from "react-redux";
import { selectUserName } from "../../reducers/userSlice";

//Firebase
import { getPersonalScore } from '../../firebaseFunctions/addScore';

const PersonalDashboard = () => {
    const userName = useSelector(selectUserName);

    //Local state 
    const [tenScore, setTenScore] = useState(null);
    const [hundredScore, setHundredScore] = useState(null);
    const [thousandScore, setThousandScore] = useState(null);
    const [multiplyTwo, setMultiplyTwo] = useState(null);
    const [multiplyThree, setMultiplyThree] = useState(null);
    const [multiplyFour, setMultiplyFour] = useState(null);
    const [multiplyFive, setMultiplyFive] = useState(null);
    const [multiplySix, setMultiplySix] = useState(null);
    const [multiplySeven, setMultiplySeven] = useState(null);
    const [multiplyEight, setMultiplyEight] = useState(null);
    const [multiplyNine, setMultiplyNine] = useState(null);
    const [multiplyMix, setMultiplyMix] = useState(null);

    //Lifecyle - should return the scores for the logged user
    useEffect(() => {
        let controller = new AbortController();
        const getScores = async () => {
            const dataTen = await getPersonalScore("sumTen", userName)
            setTenScore(dataTen);
            const dataHundred = await getPersonalScore("sumHundred", userName)
            setHundredScore(dataHundred);
            const dataThousand = await getPersonalScore("sumThousand", userName)
            setThousandScore(dataThousand);
            const dataMultiplyTwo = await getPersonalScore("multiplyTwo", userName)
            setMultiplyTwo(dataMultiplyTwo);
            const dataMultiplyThree = await getPersonalScore("multiplyThree", userName)
            setMultiplyThree(dataMultiplyThree);
            const dataMultiplyFour = await getPersonalScore("multiplyFour", userName)
            setMultiplyFour(dataMultiplyFour);
            const dataMultiplyFive = await getPersonalScore("multiplyFive", userName)
            setMultiplyFive(dataMultiplyFive);
            const dataMultiplySix = await getPersonalScore("multiplySix", userName)
            setMultiplySix(dataMultiplySix);
            const dataMultiplySeven = await getPersonalScore("multiplySeven", userName)
            setMultiplySeven(dataMultiplySeven);
            const dataMultiplyEight = await getPersonalScore("multiplyEight", userName)
            setMultiplyEight(dataMultiplyEight);
            const dataMultiplyNine = await getPersonalScore("multiplyNine", userName)
            setMultiplyNine(dataMultiplyNine);
            const dataMultiplyMix = await getPersonalScore("mix", userName)
            setMultiplyMix(dataMultiplyMix);
            return () => controller?.abort();
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
                    <li>Best x 2 sum score: <p>{multiplyTwo}</p></li>
                    <li>Best x 3 sum score: <p>{multiplyThree}</p></li>
                    <li>Best x 4 sum score: <p>{multiplyFour}</p></li>
                    <li>Best x 5 sum score: <p>{multiplyFive}</p></li>
                    <li>Best x 6 sum score: <p>{multiplySix}</p></li>
                    <li>Best x 7 sum score: <p>{multiplySeven}</p></li>
                    <li>Best x 8 sum score: <p>{multiplyEight}</p></li>
                    <li>Best x 9 sum score: <p>{multiplyNine}</p></li>
                    <li>Best Mix sum score: <p>{multiplyMix}</p></li>
                </ul>
            </div>
        </div>
    )
};

export default PersonalDashboard;

import React, { useState, useEffect } from 'react';

import "./statspage.css";

//Components
import StatsContainer from "./StatsContainer/StatsContainer";

//Firebase
import { getAllScores } from '../../firebaseFunctions/addScore';

const Statspage = () => {
    //Local state 
    const [userDataTen, setUserDataTen] = useState();
    const [userDataHundred, setUserDataHundred] = useState();
    const [userDataThousand, setUserDataThousand] = useState();
    const [userDataMultiplyTwo, setDataMultiplyTwo] = useState();
    const [userDataMultiplyThree, setDataMultiplyThree] = useState();
    const [userDataMultiplyFour, setDataMultiplyFour] = useState();
    const [userDataMultiplyFive, setDataMultiplyFive] = useState();
    const [userDataMultiplySix, setDataMultiplySix] = useState();
    const [userDataMultiplySeven, setDataMultiplySeven] = useState();
    const [userDataMultiplyEight, setDataMultiplyEight] = useState();
    const [userDataMultiplyNine, setDataMultiplyNine] = useState();
    const [userDataMultiplyMix, setDataMultiplyMix] = useState();
    const [userDataMultiplyMixHard, setDataMultiplyMixHard] = useState();
    //Get all the data from the Firebase Firestore 
    useEffect(() => {
        let controller = new AbortController();
        const getUsers = async () => {
            //Get scores from sumTen
            const dataTen = await getAllScores("sumTen");
            const dataTenObjects = dataTen.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setUserDataTen((dataTenObjects.sort((a, b) => b.score - a.score)));
            //Get scores from sumHundred
            const dataHundred = await getAllScores("sumHundred");
            const dataHundredObjects = dataHundred.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            setUserDataHundred((dataHundredObjects.sort((a, b) => b.score - a.score)));
            //Get scores from sumThousand
            const dataThousand = await getAllScores("sumThousand");
            const dataThousandObjects = dataThousand.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            setUserDataThousand((dataThousandObjects.sort((a, b) => b.score - a.score)));
            //Get scores from multiply Two 
            const dataMultiplyTwo = await getAllScores("multiplyTwo")
            const dataMultiplyTwoObjects = dataMultiplyTwo.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setDataMultiplyTwo((dataMultiplyTwoObjects.sort((a, b) => b.score - a.score)));
            //Get scores from multiply Three
            const dataMultiplyThree = await getAllScores("multiplyThree")
            const dataMultiplyThreeObjects = dataMultiplyThree.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setDataMultiplyThree((dataMultiplyThreeObjects.sort((a, b) => b.score - a.score)));
            //Get scores from multiply Four 
            const dataMultiplyFour = await getAllScores("multiplyFour")
            const dataMultiplyFourObjects = dataMultiplyFour.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setDataMultiplyFour((dataMultiplyFourObjects.sort((a, b) => b.score - a.score)));
            //Get scores from multiply Five 
            const dataMultiplyFive = await getAllScores("multiplyFive");
            const dataMultiplyFiveObjects = dataMultiplyFive.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setDataMultiplyFive((dataMultiplyFiveObjects.sort((a, b) => b.score - a.score)));
            //Get scores from multiply Six 
            const dataMultiplySix = await getAllScores("multiplySix");
            const dataMultiplySixObjects = dataMultiplySix.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setDataMultiplySix((dataMultiplySixObjects.sort((a, b) => b.score - a.score)));
            //Get scores from multiply Seven
            const dataMultiplySeven = await getAllScores("multiplySeven");
            const dataMultiplySevenObjects = dataMultiplySeven.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setDataMultiplySeven((dataMultiplySevenObjects.sort((a, b) => b.score - a.score)));
            //Get scores from multiply Eight
            const dataMultiplyEight = await getAllScores("multiplyEight");
            const dataMultiplyEightObjects = dataMultiplyEight.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setDataMultiplyEight((dataMultiplyEightObjects.sort((a, b) => b.score - a.score)));
            //Get scores from multiply Nine
            const dataMultiplyNine = await getAllScores("multiplyNine");
            const dataMultiplyNineObjects = dataMultiplyNine.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setDataMultiplyNine((dataMultiplyNineObjects.sort((a, b) => b.score - a.score)));
            //Get scores from multiply Mix
            const dataMultiplyMix = await getAllScores("mix");
            const dataMultiplyMixObjects = dataMultiplyMix.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setDataMultiplyMix((dataMultiplyMixObjects.sort((a, b) => b.score - a.score)));
            //Get scores from multiply Mix hard
            const dataMultiplyMixHard = await getAllScores("mix Hard");
            const dataMultiplyMixHardObjects = dataMultiplyMixHard.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setDataMultiplyMixHard((dataMultiplyMixHardObjects.sort((a, b) => b.score - a.score)));
            return () => controller?.abort();
        }
        getUsers()
    }, [])

    return (
        <div className="high-score-list">
            <StatsContainer title="Sum 10" styleClass="high-score-plus-ten" mapData={userDataTen} />
            <StatsContainer title="Sum 100" styleClass="high-score-plus-hundred" mapData={userDataHundred} />
            <StatsContainer title="Sum 1000" styleClass="high-score-plus-thousand" mapData={userDataThousand} />
            <StatsContainer title="Multiply 2" styleClass="high-score-multiply-two" mapData={userDataMultiplyTwo} />
            <StatsContainer title="Multiply 3" styleClass="high-score-multiply-three" mapData={userDataMultiplyThree} />
            <StatsContainer title="Multiply 4" styleClass="high-score-multiply-four" mapData={userDataMultiplyFour} />
            <StatsContainer title="Multiply 5" styleClass="high-score-multiply-five" mapData={userDataMultiplyFive} />
            <StatsContainer title="Multiply 6" styleClass="high-score-multiply-six" mapData={userDataMultiplySix} />
            <StatsContainer title="Multiply 7" styleClass="high-score-multiply-seven" mapData={userDataMultiplySeven} />
            <StatsContainer title="Multiply 8" styleClass="high-score-multiply-eight" mapData={userDataMultiplyEight} />
            <StatsContainer title="Multiply 9" styleClass="high-score-multiply-nine" mapData={userDataMultiplyNine} />
            <StatsContainer title="Multiply Mix" styleClass="high-score-multiply-mix" mapData={userDataMultiplyMix} />
            <StatsContainer title="Multiply Mix Hard" styleClass="high-score-multiply-mix-hard" mapData={userDataMultiplyMixHard} />
        </div>
    )
}

export default Statspage

//https://www.youtube.com/watch?v=jCY6DH8F4oc

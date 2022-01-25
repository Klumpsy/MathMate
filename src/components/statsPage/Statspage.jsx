import React, { useState, useEffect } from 'react'

//Firebase
import { getUserStats, getAllScores } from '../../firebaseFunctions/addScore'

//Redux
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../reducers/userSlice";

const Statspage = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    const [userData, setUserData] = useState();

    useEffect(() => {
        const getUsers = async () => {
            const data = await getAllScores();
            setUserData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        getUsers()
    }, [])

    return (
        <div>
            {
                userData?.map(user => (
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                        <h2>{user.score}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default Statspage

//https://www.youtube.com/watch?v=jCY6DH8F4oc

import firebase from 'firebase/compat/app';

import {database} from "../firebase"; 
import {collection, getDocs, addDoc} from "firebase/firestore"; 

//CRUD functions
const userCollectionRef = collection(database, "userScore")
//Create
export const addScore = async (name, score) => { 
    await addDoc(userCollectionRef, {name, score})
}

//Read
export const getUserStats = async (name) => { 
    const data = await getDocs(userCollectionRef, name)
    return data 
}

export const getAllScores = async () => { 
    const data = await getDocs(userCollectionRef)
    return data 
}

//Update

//Delete 
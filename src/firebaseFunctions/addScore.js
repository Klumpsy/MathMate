import {database} from "../firebase"; 
import {collection, getDocs, updateDoc, doc, setDoc, getDoc} from "firebase/firestore"; 

//CRUD functions
//Create - AddScore function with parameter name for name, parameter ref for Firebase document reference and score for accumulated score
//This function should save the score if the user already exists or create a new user by the name of the 
//current user if the user does not exist. 
export const addScore = async (name, ref, score) => { 
    const docRef = doc(database, ref, name);
    const docSnap = await getDoc(docRef)
    if(docSnap.exists()) {
        if(docSnap.data().score < score) {
            await updateDoc(docRef, {name, score}) 
        } else { 
            return
        }
    } else { 
        await setDoc(doc(database, ref, name), {name, score})
    }
}

//Read - highscore from database with parameter ref for Firebase document reference 
//The function should return the data that belongs to the Firebase document that was put in the parameter ref. 
export const getAllScores = async (ref) => { 
    const data = await getDocs(collection(database, ref))
    return data 
}

//Read - personal highscore from database with parameter docName for Firebase document name and name for player name 
//The function should return the Score that belongs to the current user of the game. 
export const getPersonalScore = async (docName, name) => { 
    const docRef = doc(database, docName, name);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data().score
    } else {
        return "No Score yet!";
    }
}

import {database} from "../firebase"; 
import {collection, getDocs, updateDoc, doc, setDoc, getDoc} from "firebase/firestore"; 

//CRUD functions
//Create
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
//Read
//Read highscore from database 
export const getAllScores = async (ref) => { 
    const data = await getDocs(collection(database, ref))
    return data 
}

//Read personal highscore from database 
export const getPersonalScore = async (docName, name) => { 
    const docRef = doc(database, docName, name);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data().score
    } else {
        return "No Score yet!";
    }
}

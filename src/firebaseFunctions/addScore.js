import firebase from 'firebase/compat/app';

import {database} from "../firebase"; 
import {collection, getDocs, updateDoc, doc, setDoc, getDoc} from "firebase/firestore"; 

//CRUD functions
const userCollectionRefModeTen = collection(database, "sumTen"); 
const userCollectionRefModeHundred = collection(database, "sumHundred"); 
const userCollectionRefModeThousand = collection(database, "sumThousand"); 

//Create
export const addScoreTen = async (name, score) => { 
    const docRef = doc(database, "sumTen", name);
    const docSnap = await getDoc(docRef)
    if(docSnap.exists()) {
        if(docSnap.data().score < score) {
            await updateDoc(docRef, {name, score}) 
        } else { 
            return
        }
    } else { 
        await setDoc(doc(database, "sumTen", name), {name, score})
    }
}

export const addScoreHundred = async(name, score) => { 
    const docRef = doc(database, "sumHundred", name);
    const docSnap = await getDoc(docRef)
    if(docSnap.exists()) {
        if(docSnap.data().score < score) {
            await updateDoc(docRef, {name, score}) 
        } else { 
            return
        }
    } else { 
        await setDoc(doc(database, "sumHundred", name), {name, score})
    }
}
export const addScoreThousand = async(name, score) => { 
    const docRef = doc(database, "sumThousand", name);
    const docSnap = await getDoc(docRef)
    if(docSnap.exists()) {
        if(docSnap.data().score < score) {
            await updateDoc(docRef, {name, score}) 
        } else { 
            return
        }
    } else { 
        await setDoc(doc(database, "sumThousand", name), {name, score})
    }
}

//Read
//Read highscore from database 
export const getAllScoresSumTen = async () => { 
    const data = await getDocs(userCollectionRefModeTen)
    return data 
}
export const getAllScoresSumHundred = async () => { 
    const data = await getDocs(userCollectionRefModeHundred)
    return data 
}
export const getAllScoresSumThousand = async () => { 
    const data = await getDocs(userCollectionRefModeThousand)
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

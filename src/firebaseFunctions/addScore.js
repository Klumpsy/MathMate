import {database} from "../firebase"; 
import {collection, getDocs, updateDoc, doc, setDoc, getDoc} from "firebase/firestore"; 

//CRUD functions
const userCollectionRefModeTen = collection(database, "sumTen"); 
const userCollectionRefModeHundred = collection(database, "sumHundred"); 
const userCollectionRefModeThousand = collection(database, "sumThousand"); 

const userCollectionRefModeMultiplyThree = collection(database, "multiplyThree")
const userCollectionRefModeMultiplyFive = collection(database, "multiplyFive"); 
const userCollectionRefModeMultiplySeven = collection(database, "multiplySeven")

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
export const getAllScoresMultiplyThree = async () => { 
    const data = await getDocs(userCollectionRefModeMultiplyThree)
    return data 
}
export const getAllScoresMultiplyFive = async () => { 
    const data = await getDocs(userCollectionRefModeMultiplyFive)
    return data 
}
export const getAllScoresMultiplySeven = async () => { 
    const data = await getDocs(userCollectionRefModeMultiplySeven)
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

import {firestore} from "./firebaseConfig";
import { 
    addDoc, 
    collection, 
    onSnapshot, 
    doc, 
    updateDoc,
    query, 
    where, 
    setDoc, 
    deleteDoc 
} from 'firebase/firestore';


let postRef = collection(firestore, "users");



export const getPosts = (setAllStatus) =>{
    onSnapshot(postRef, response =>{
        setAllStatus(response.docs.map((docs)=>{
            return {...docs.data(), id: docs.id}
        }))
        // console.log(response.docs.map((docs)=>{
        //     return {...docs.data(), id: docs.id}
        // }));
    })
}
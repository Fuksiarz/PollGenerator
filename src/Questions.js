import React, { useState} from 'react';
import {firestore} from "./firebase"
import{addDoc,collection} from "firebase/firestore";

function Questions() {

    const [mess,setMess] = useState("");
    const ref = collection(firestore,"messages");

    const handleSave = async(e)=>{
        e.preventDefault();
        console.log(mess);
        try{
            addDoc(ref,data)
        }catch (e){
            console.log(e);
        }
    }

    let data ={
        message:mess
    };


    return(
        <div>
            <form onSubmit={handleSave}>
                <label>
                    Enter message
                </label>
                <input type="text" onChange={event =>setMess( event.target.value)}/>
                <button type="submit">save</button>
                <h1>{mess}</h1>
            </form>
        </div>
    );
}

export default Questions;
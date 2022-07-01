import * as React from 'react';
import {useEffect, useReducer, useState} from 'react';
import {collection, deleteDoc, doc, getDocs, updateDoc} from "firebase/firestore"
import {firestore} from "./firebase";
import "./Home.css"
import {Link, useLocation} from "react-router-dom";

function Home() {

    const [postList, setPostList] = useState([]);

    const ref = collection(firestore, "polls");
    const [state,setState]=useState([])

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(ref);

            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            setState(data.docs.map(entry=> entry.data()));

        }

        getPosts()

    })
    const handleUpdate = async (id,open) => {
        const userDoc = doc(firestore, "polls", id)


        await updateDoc(userDoc, {open: !open})

    }

    const deletePost = async (id) => {

        const postDoc = doc(firestore, "polls", id);
        await deleteDoc(postDoc);

    }
    const toggle=(x)=>{
        return(!x)
    }

    //
    return (

        <div className="homeContainer">
            {postList.map((post, index) => {


                return (
                    <div className="fromBase" key={post.id}>

                        <div className="pollInfo">
                            <div>
                                <h1 key={index} className="question">
                                    {post.question}


                                </h1>
                            </div>
                            {post.answer.map((data, index) => {

                                return (
                                    <div className="homeAnswers">
                                        <div key={index}>
                                            <button className="answer-btn"><h2>{data.answer}</h2></button>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                        <div className="homePartTwo">
                        <div className="homeSecondDyv">
                            <div className="homePostSet">
                                <div className="homeDelete-btnDiv">
                                    <button className="homeDelete-btn" onClick={() => deletePost(post.id)}>delete
                                    </button>
                                </div>
                                <div className="homeEdit-btnDiv">
                                    <button className="homeEdit-btn"><Link to="/update/:id" state={{
                                        id: post.id,
                                        answers: post.answer,
                                        question: post.question
                                    }}>edit</Link></button>

                                </div>
                            </div>
                            <div className="stateAnswerContainer">
                                <div className="pollAnswer">
                                    {post.open===true&&<button className="pollAnswer-btn"><Link to="/vote/:id" state={{
                                        id: post.id,
                                        answers: post.answer,
                                        question: post.question
                                    }}><h1>Answer!</h1></Link></button>}
                                </div>
                                <div className="homeState">
                                    <button onClick={()=>handleUpdate(post.id,post.open)} className="homeState-btn">{post.open ? "OPEN" : "CLOSED"}</button>

                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>


    );
}
export default Home;
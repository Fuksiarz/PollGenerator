import * as React from 'react';
import {useEffect, useState} from 'react';
import {collection, deleteDoc, doc, getDocs} from "firebase/firestore"
import {firestore} from "./firebase";
import "./Home.css"
import {Link} from "react-router-dom";

function Home() {

    const [postList, setPostList] = useState([]);

    const ref = collection(firestore, "polls");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(ref);

            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

        }

        getPosts()
    })


    const deletePost = async (id) => {

        const postDoc = doc(firestore, "polls", id);
        await deleteDoc(postDoc);

    }

    //
    return (

        <div className="homeContainer">
            {postList.map((post, index) => {


                return (
                    <div className="fromBase" key={post.id}>

                        <div className="pollInfo">
                            <div>
                                <h1 className="question">
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
                                    <button className="pollAnswer-btn"><Link to="/vote/:id" state={{
                                        id: post.id,
                                        answers: post.answer,
                                        question: post.question
                                    }}><h1>Answer!</h1></Link></button>
                                </div>
                                <div className="homeState">
                                    <button className="homeState-btn">OPEN</button>

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
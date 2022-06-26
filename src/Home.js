import * as React from 'react';
import {useEffect, useState} from "react";
import {getDocs} from "firebase/firestore"
import {collection, deleteDoc, doc} from "firebase/firestore";
import {firestore} from "./firebase";
import Parser from "./Parser";
import "./Home.css"
import {Link,useParams} from "react-router-dom";

function Home() {

    const [postList, setPostList] = useState([]);

    const ref = collection(firestore, "polls");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(ref);

            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));


        }

        getPosts()
        // console.log({postList})
    }, [])


    const deletePost = async (id) => {

        const postDoc = doc(firestore, "polls", id);
        await deleteDoc(postDoc);
        window.location.reload();
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
                                            <button className="answer-btn"><h2> {data.answer}</h2></button>

                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                        <div className="homeSecondDyv">
                            <div className="homePostSet">
                                <div className="homeDelete-btnDiv">
                                    <button className="homeDelete-btn" onClick={() => deletePost(post.id)}>delete
                                    </button>
                                </div>
                                <div className="homeEdit-btnDiv">
                                    <button className="homeEdit-btn">edit</button>
                                </div>
                            </div>
                            <div className="homeState">
                                <button className="homeState-btn"><Link to="/update/:id" state={post.id}>edit</Link></button>

                            </div>
                        </div>
                    </div>
                )
            })}
        </div>


    );
};
export default Home;
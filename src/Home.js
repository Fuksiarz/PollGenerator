import * as React from 'react';
import {useEffect, useState} from "react";
import {getDocs} from "firebase/firestore"
import {collection} from "firebase/firestore";
import {firestore} from "./firebase";
import Parser from "./Parser";

function Home() {

    const [postList, setPostList] = useState([]);
    const [postList2, setPostList2] = useState();
    const [postList3, setPostList3] = useState([]);
    const [question, setQuestion] = useState();
    const [answer1, setAnswer1] = useState();
    const [answer2, setAnswer2] = useState();
    const [answer3, setAnswer3] = useState();
    const [answer4, setAnswer4] = useState();
    const ref = collection(firestore, "polls");
    const ObjectKeys = (postList) => {
        return Object.keys(postList);
    }
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(ref);

            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));


        }

        getPosts()
        // cos();
    })
    // const cos=()=>{
    // return(
    //
    //     <div>{postList.map((post)=> {
    //         setQuestion(post.question);
    //         const answer = JSON.stringify(post.answer[0]);
    //         console.log(answer);
    //         let answerText=JSON.parse(answer);
    //         console.log(answerText);
    //         // setAnswer1(answer)
    //         // setAnswer1(JSON.parse(JSON.stringify(post.answer[0])));
    //
    //
    //         // setAnswer1(JSON.parse(answer2))
    //         // setAnswer2(post.answer[1])
    //         // setAnswer3(post.answer[2])
    //         // setAnswer4(post.answer[3])
    // })};
    //
    //         </div>
    // )
    // }

    return (

        <div>
            {postList.map((post, index) => {


                return (
                    <div key={index}>
                        <h1>
                            {post.question}
                        </h1>
                        {post.answer.map((data,index)=>{
                            return(
                                <li key={index}>
                                    {data.answer}
                                </li>
                                    )
                        })}
                    </div>
                )
            })}
        </div>


    );
};
export default Home;
import * as React from 'react';
import {useEffect, useState} from 'react';
import "./Home.css"
import {useLocation} from "react-router-dom";


function Vote() {

    const [serviceList, setServiceList] = useState([{answer: ""}]);

    const location = useLocation();
    const params = location.state.id;
    const [question, setQuestion] = useState(location.state.question);
    useEffect(() => {


            setServiceList(location.state.answers);

        }
    )


    return (

        <div className="homeContainer">



            <div className="fromBase">

                <div className="pollInfo">
                    <div>
                        <h1 className="question">
                            {question}


                        </h1>
                    </div>
                    {serviceList.map((post, index) => {

                        return (
                            <div className="homeAnswers">
                                <div key={index}>
                                    <button className="answer-btn"><h2>{post.answer}</h2></button>
                                </div>
                            </div>

                        )
                    })}

                </div>

            </div>

        </div>


    );


    // return (
    // <div>
    //
    //     <div>
    //         <h1>{question}</h1>
    //     </div>
    //     <div>
    //         {serviceList.map((data, index) => {
    //
    //             return (
    //                 <div className="homeAnswers">
    //                     <div key={index}>
    //                         <button className="answer-btn"><h2>{data.answer}</h2></button>
    //                     </div>
    //                 </div>
    //             )
    //         })}
    //
    //     </div>
    // </div>
    // );
}

export default Vote;
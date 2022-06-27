
import './App.css';
import Poll from "./Poll";
import React, {useState} from "react";
import Home from "./Home";


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Questions from "./Questions";
import UpdatePoll from "./UpdatePoll";
import Vote from "./Vote";



function App() {

    return (
        <Router>
            <nav className="nav">
                <div className="navDiv">
                <Link to="/createPoll">create poll</Link>
                </div >
                <div className="navDiv">
                    <Link to="/update:id">update</Link>
                </div>
                <div className="navDiv">
                <Link to="/">home</Link>
                </div>
                <div className="navDiv">
                <Link to="/login"> login</Link>
                </div>
                </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>

                <Route path="/createPoll" element={<Poll />} />
                <Route path="/contact" element={<Questions />} />
                <Route path="/update/:id" element={<UpdatePoll/>} />
                <Route path="/update/:id" element={<UpdatePoll/>} />
                <Route path="/vote/:id" element={<Vote/>} />
            </Routes>
        </Router>


    );
}

export default App;

import React from "react";
import "./assets/styles/App.css";
import Header from "./components/Header.js";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
    return (
        <>
            <Header></Header>
            <div className="App">
                <div className="main-bg"></div>
            </div>
        </>
    );
}

export default App;

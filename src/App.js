import React from "react";
import "./assets/styles/App.css";
import Header from "./components/Header.js";
import Direction from "./components/Directions.js";
import Representative from "./components/Representative.js";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <div className="main-bg"></div>
            <Representative id="representative-section"></Representative>
            <Direction id="direction-section"></Direction>
        </div>
    );
}

export default App;

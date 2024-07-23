import React from "react";
import "../assets/styles/App.css";
import Review from "../components/Review.js";
import Direction from "../components/Directions.js";
import Representative from "../components/Representative.js";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function Main() {
    return (
        <div>
            <div className="main-bg"></div>
            <Review id="review-section"></Review>
            <Representative id="representative-section"></Representative>
            <Direction id="direction-section"></Direction>
        </div>
    );
}

export default Main;

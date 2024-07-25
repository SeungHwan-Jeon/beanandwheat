import { React, useState } from "react";
import "./assets/styles/App.css";
import Header from "./components/Header.js";
import Main from "./pages/Main.js";
import FullMenu from "./pages/FullMenu.js";
import Questions from "./pages/Questions.js";
import Announcement from "./pages/Announcement.js";
import Footer from "./components/Footer.js";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
    let [menuTab, setMenuTab] = useState(0);
    console.log(window.innerWidth);
    return (
        <div className="App">
            <Header menuTab={menuTab}></Header>
            <Routes>
                <Route path="/" element={<Main></Main>}></Route>
                <Route
                    path="/fullmenu"
                    element={<FullMenu menuTab={menuTab}></FullMenu>}
                ></Route>
                <Route
                    path="/questions"
                    element={<Questions></Questions>}
                ></Route>
                <Route
                    path="/announcement"
                    element={<Announcement></Announcement>}
                ></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;

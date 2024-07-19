import { React, useState } from "react";
import "./assets/styles/App.css";
import Header from "./components/Header.js";
import Main from "./pages/Main.js";
import Footer from "./components/Footer.js";
import FullMenu from "./pages/FullMenu.js";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
    let [menuTab, setMenuTab] = useState(0);

    return (
        <div className="App">
            <Header menuTab={menuTab}></Header>
            <Routes>
                <Route path="/" element={<Main></Main>}></Route>
                <Route
                    path="/fullmenu"
                    element={<FullMenu menuTab={menuTab}></FullMenu>}
                ></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;

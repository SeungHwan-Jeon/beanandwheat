import { useEffect, useState } from "react";
import "../assets/styles/FullMenu.css";
import { Nav, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../store";
import Drinks from "../components/menuCategory/Drinks";

function FullMenu() {
    let menuTab = useSelector((state) => state.menuTab);
    let dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [menuTab]);

    return (
        <div className="full-menu">
            <Nav
                className="menu-tab"
                variant="tabs"
                activeKey={`link${menuTab}`}
            >
                <Nav.Item>
                    <Nav.Link
                        className="nav-link"
                        onClick={() => {
                            dispatch(changeTab(0));
                        }}
                        eventKey="link0"
                    >
                        베이커리
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        className="nav-link"
                        onClick={() => {
                            dispatch(changeTab(1));
                        }}
                        eventKey="link1"
                    >
                        커피/음료
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        className="nav-link"
                        onClick={() => {
                            dispatch(changeTab(2));
                        }}
                        eventKey="link2"
                    >
                        디저트
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent></TabContent>
        </div>
    );
}

function TabContent() {
    let menuTab = useSelector((state) => state.menuTab);
    return [<div>내용0</div>, <Drinks></Drinks>, <div>내용2</div>][menuTab];
}

export default FullMenu;

import { useEffect } from "react";
import "../assets/styles/FullMenu.css";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../store";

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
    console.log(menuTab);
    return [<div>내용0</div>, <Coffee></Coffee>, <div>내용2</div>][menuTab];
}

function Coffee() {
    return (
        <div>
            <ul className="coffee-tabs">
                <li>COFFEE</li>
                <li>ADE & SMOOTHIE</li>
                <li>LATTE</li>
                <li>TEA</li>
                <li>HERB</li>
            </ul>
        </div>
    );
}

export default FullMenu;

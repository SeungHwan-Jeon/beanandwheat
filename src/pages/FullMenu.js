import { useState } from "react";
import "../assets/styles/FullMenu.css";
import { Container, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function FullMenu() {
    let [tab, setTab] = useState(0);
    let menuTab = useSelector((state) => state.menuTab);

    return (
        <div className="full-menu">
            <Nav
                className="menu-tab"
                variant="tabs"
                activeKey={`link${menuTab}`}
            >
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(0);
                        }}
                        eventKey="link0"
                    >
                        베이커리
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(1);
                        }}
                        eventKey="link1"
                    >
                        커피/음료
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(2);
                        }}
                        eventKey="link2"
                    >
                        디저트
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab}></TabContent>
        </div>
    );
}

function TabContent({ tab }) {
    return [<div>내용0</div>, <Coffee></Coffee>, <div>내용2</div>][tab];
}

function Coffee() {
    return (
        <div>
            <ul>
                <li>에스프레소</li>
                <li>아메리카노</li>
                <li>카페라떼</li>
                <li>시나몬 카푸치노</li>
                <li>바닐라라떼</li>
                <li>헤이즐넛 라떼</li>
                <li>카페모카(no 휘핑)</li>
                <li>더치 아메리카노</li>
                <li>핸드 드립</li>
            </ul>
        </div>
    );
}

export default FullMenu;

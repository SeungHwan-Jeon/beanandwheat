import { useEffect } from "react";
import "../assets/styles/FullMenu.css";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../store";
import drinksData from "../assets/data/drinksData";

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

function Drinks() {
    const coffeeData = drinksData.filter((item) => item.category === "COFFEE");
    const adeNSmoothieData = drinksData.filter(
        (item) => item.category === "ADE & SMOOTHIE"
    );
    const latteData = drinksData.filter((item) => item.category === "LATTE");
    const teaData = drinksData.filter((item) => item.category === "TEA");
    const herbData = drinksData.filter((item) => item.category === "HERB");

    function createMenuDiv(menu) {
        return menu.map((a, i) => {
            return (
                <>
                    <tr>
                        <td>{a.item}</td>
                        <td>{a.hotPrice}</td>
                        <td>{a.icePrice}</td>
                    </tr>
                </>
            );
        });
    }

    function MenuTable({ menu }) {
        return (
            <>
                <div>
                    {menu[0].category}
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Hot Price</th>
                                <th>Ice Price</th>
                            </tr>
                        </thead>
                        <tbody>{createMenuDiv(menu)}</tbody>
                    </table>
                </div>
            </>
        );
    }

    return (
        <div>
            <div className="coffee-tabs">
                <MenuTable menu={coffeeData}></MenuTable>
                <MenuTable menu={adeNSmoothieData}></MenuTable>
                <MenuTable menu={latteData}></MenuTable>
                <MenuTable menu={teaData}></MenuTable>
                <MenuTable menu={herbData}></MenuTable>
            </div>
        </div>
    );
}

export default FullMenu;

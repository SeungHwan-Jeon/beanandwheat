import drinksData from "../../assets/data/drinksData";
import Header from "../Header";
import { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function Drinks() {
    const coffeeData = drinksData.filter((item) => item.category === "COFFEE");
    const adeNSmoothieData = drinksData.filter(
        (item) => item.category === "ADE & SMOOTHIE"
    );
    const latteData = drinksData.filter((item) => item.category === "LATTE");
    const teaData = drinksData.filter((item) => item.category === "TEA");
    const herbData = drinksData.filter((item) => item.category === "HERB");

    return (
        <>
            <div className="drinks-tab">
                <ul>
                    <li>커피</li>
                    <li>에이드 & 스무디</li>
                    <li>라떼</li>
                    <li>티</li>
                    <li>허브</li>
                </ul>
                <div className="menu-cards">
                    <DrinkMenu menu={coffeeData}></DrinkMenu>
                </div>
            </div>
        </>
    );
}

function DrinkMenu({ menu }) {
    return menu.map((a, i) => {
        return (
            <div>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={a.img} />
                    <Card.Body>
                        <Card.Title>{a.item}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    });
}

export default Drinks;

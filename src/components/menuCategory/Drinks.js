import drinksData from "../../assets/data/drinksData";
import { useState } from "react";

function Drinks() {
    const coffeeData = drinksData.filter((item) => item.category === "COFFEE");
    const adeNSmoothieData = drinksData.filter(
        (item) => item.category === "ADE & SMOOTHIE"
    );
    const latteData = drinksData.filter((item) => item.category === "LATTE");
    const teaData = drinksData.filter((item) => item.category === "TEA");
    const herbData = drinksData.filter((item) => item.category === "HERB");

    const [selectedCategory, setSelectedCategory] = useState("COFFEE");
    const categories = [...new Set(drinksData.map((item) => item.category))];
    const filteredMenu = drinksData.filter(
        (item) => item.category === selectedCategory
    );

    return (
        <>
            <div className="drinks-tab">
                <ul>
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
                <div className="menu-card-container">
                    <DrinkMenu menu={filteredMenu} />
                </div>
            </div>
        </>
    );
}

function DrinkMenu({ menu }) {
    return menu.map((a, i) => {
        return (
            <div key={i} className="menu-card">
                <div className="content">
                    <div className="icon">
                        <i className={a.icon}></i>
                    </div>
                    <h3>{a.item}</h3>
                </div>
                <div className="price">
                    <div>
                        <strong>Hot</strong>
                        {a.hotPrice ? `${a.hotPrice}` : "-"}
                    </div>
                    <div>
                        <strong>Ice</strong>
                        {a.icePrice ? `${a.icePrice}` : "-"}
                    </div>
                </div>
            </div>
        );
    });
}

export default Drinks;

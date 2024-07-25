import breadsData from "../../assets/data/breadsData";
import { useState } from "react";
function Breads() {
    const { 카스테라 } = breadsData;
    const { 롤 } = breadsData;
    const { 바게트 } = breadsData;
    const { 식빵 } = breadsData;
    const { 페스트리 } = breadsData;
    const { 깜빠뉴 } = breadsData;
    const { 빵 } = breadsData;
    const { 혼합빵 } = breadsData;
    const { 기타 } = breadsData;

    const [selectedCategory, setSelectedCategory] = useState("카스테라");
    const categories = [...new Set(Object.keys(breadsData))];
    const filteredMenu = breadsData[selectedCategory];

    return (
        <>
            <div className="menu-detail-tab">
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
                    <BreadMenu menu={filteredMenu} />
                </div>
            </div>
        </>
    );
}

function BreadMenu({ menu }) {
    return menu.map((a, i) => {
        return (
            <div key={i} className="menu-card">
                <div className="content">
                    <div className="bread-img">
                        <img src={a.img}></img>
                    </div>
                    <h3>{a.name}</h3>
                </div>
                <div className="price">
                    <div>
                        <strong>Price</strong>
                        {a.price} 천원
                    </div>
                </div>
            </div>
        );
    });
}
export default Breads;

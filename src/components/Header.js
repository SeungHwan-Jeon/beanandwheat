import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/Header.css";
import { useNavigate, useLocation } from "react-router-dom";
import { changeTab } from "../store";

function Header(props) {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let location = useLocation();
    let menuTab = useSelector((state) => state.menuTab);

    function scrollToTop() {
        if (location.pathname !== "/") {
            navigate("/");
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }

    function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);

        if (element) {
            const headerOffset = document.querySelector(".header").offsetHeight;
            const elementPosition =
                element.getBoundingClientRect().top - 10 + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        } else {
            console.error(`Element with id ${sectionId} not found.`);
        }
    }

    function isMainPage(sectionId) {
        if (location.pathname !== "/") {
            navigate("/");
            scrollToSection(sectionId);
        } else {
            scrollToSection(sectionId);
        }
    }
    return (
        <div className="header">
            <div
                onClick={() => {
                    navigate("/");
                }}
                className="nav-logo"
            ></div>
            <ul className="nav-sub">
                <li className="nav-item" onClick={scrollToTop}>
                    매장 소개
                </li>
                <li
                    className="nav-item nav-menu"
                    onClick={() => {
                        isMainPage("representative-section");
                    }}
                >
                    메뉴
                    <ul className="dropdown-content">
                        <li>대표 메뉴</li>
                        <li
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch(changeTab(0));
                                navigate("/fullmenu");
                            }}
                        >
                            베이커리
                        </li>
                        <li
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch(changeTab(1));
                                navigate("/fullmenu");
                            }}
                        >
                            커피/음료
                        </li>
                        <li
                            onClick={(e) => {
                                e.stopPropagation();
                                dispatch(changeTab(2));
                                navigate("/fullmenu");
                            }}
                        >
                            디저트
                        </li>
                    </ul>
                </li>
                <li
                    className="nav-item"
                    onClick={() => isMainPage("direction-section")}
                >
                    오시는 길<span></span>
                </li>
                <li className="nav-item" onClick={() => navigate("/questions")}>
                    문의
                </li>
                <li
                    className="nav-item"
                    onClick={() => navigate("/announcement")}
                >
                    공지
                </li>
            </ul>
        </div>
    );
}

export default Header;

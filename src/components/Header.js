import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../assets/styles/Header.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
function Header() {
    // const scrollToSection = (sectionId) => {
    //     document.getElementById(sectionId).scrollIntoView({
    //         behavior: "smooth",
    //     });
    // };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = document.querySelector(".header").offsetHeight;
            const elementPosition =
                element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        } else {
            console.error(`Element with id ${sectionId} not found.`);
        }
    };
    return (
        <div className="header">
            <div onClick={scrollToTop} className="nav-logo"></div>
            <ul className="nav-sub">
                <li className="nav-item" onClick={scrollToTop}>
                    매장 소개
                </li>
                <li
                    className="nav-item"
                    onClick={() => scrollToSection("representative-section")}
                >
                    메뉴
                </li>
                <li
                    className="nav-item"
                    onClick={() => scrollToSection("direction-section")}
                >
                    오시는 길
                </li>
                <li
                    className="nav-item"
                    onClick={() => scrollToSection("section4")}
                >
                    문의
                </li>
                <li
                    className="nav-item"
                    onClick={() => scrollToSection("section5")}
                >
                    공지
                </li>
            </ul>
        </div>
    );
}

export default Header;

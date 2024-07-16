import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../assets/styles/Header.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function Header() {
    let navigate = useNavigate();

    return (
        <div className="header">
            <div className="nav-logo"></div>
            <ul className="nav-sub">
                <li className="nav-item ">매장 소개</li>
                <li className="nav-item ">메뉴</li>
                <li className="nav-item ">오시는 길</li>
                <li className="nav-item ">문의</li>
                <li className="nav-item ">공지</li>
            </ul>
        </div>
    );
}
export default Header;

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../assets/styles/Header.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function Header() {
    let navigate = useNavigate();

    return (
        <div className="nav-menu">
            <a
                className="nav-logo"
                onClick={() => {
                    navigate("/");
                }}
            ></a>
            <div className="nav-sub">
                <a className="nav-item nav-introduce">매장 소개</a>
                <a className="nav-item nav-menu">메뉴</a>
                <a className="nav-item nav-directions">오시는 길</a>
                <a className="nav-item nav-about">문의</a>
                <a className="nav-item nav-notice">공지</a>
            </div>
        </div>
    );
}
export default Header;

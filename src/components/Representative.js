import "../assets/styles/Representative.css";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Representative(props) {
    let navigate = useNavigate();

    return (
        <div id={props.id} className="representative">
            <h4>대표 메뉴</h4>
            <button
                onClick={() => {
                    navigate("/fullmenu");
                }}
            >
                전체 메뉴
                <FontAwesomeIcon style={{ marginLeft: 5 }} icon={faPlus} />
            </button>
            <div className="menu-list">
                <MenuCard></MenuCard>
                <MenuCard></MenuCard>
                <MenuCard></MenuCard>
                <MenuCard></MenuCard>
            </div>
        </div>
    );
}

function MenuCard() {
    const sampleImg =
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_190c3fe5ac2%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_190c3fe5ac2%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.19140625%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
    return (
        <Card className="menu-card" style={{ width: "18rem" }}>
            <Card.Img className="menu-img" variant="top" src={sampleImg} />
            <Card.Body className="menu-body">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default Representative;

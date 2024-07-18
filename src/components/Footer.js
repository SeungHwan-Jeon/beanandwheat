import "../assets/styles/Footer.css";

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo"></div>
                <div className="footer-middle">
                    <ul>
                        <li>콩과밀 커피&베이커리</li>
                        <li>|</li>
                        <li>대표 : 이화성</li>
                        <li>|</li>
                        <li>주소 : 경북 경산시 장산로18길 4-2</li>
                        <li>|</li>
                        <li>전화 : 053-812-3567</li>
                        <li>|</li>
                        <li>사업자등록번호 : 755-20-00767</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/2012_bean_wheat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                <i class="fa-brands fa-instagram"></i>{" "}
                                인스타그램
                            </a>
                        </li>
                        <li>
                            <i class="fa-regular fa-comment"></i> 카카오톡
                        </li>
                    </ul>
                </div>
                <div className="copyright">
                    <p>© 2024 BakeryName. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

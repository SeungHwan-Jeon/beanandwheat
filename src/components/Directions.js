import React from "react";
import "../assets/styles/Directions.css";

function Directions(props) {
    return (
        <>
            <div id={props.id} className="directions">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d808.8228906829469!2d128.73445575548027!3d35.817321569882274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3566090c9c17b45d%3A0x577910ac05be71c4!2z7L2p6rO867CAIGNvZmZlZSAmIGJha2VyeQ!5e0!3m2!1sko!2skr!4v1721042003879!5m2!1sko!2skr"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="direction-info">
                    <div className="direction-header">
                        <h2></h2>
                        <p>오시는 길</p>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th className="tb1">전화번호</th>
                                <td className="tb1">053-812-3567</td>
                            </tr>
                            <tr>
                                <th>주소</th>
                                <td>경북 경산시 장산로18길 4-2 콩과밀</td>
                            </tr>
                            <tr>
                                <th>영업시간</th>
                                <td>월-토 10:00-21:30 (21:00 라스트오더)</td>
                            </tr>
                            <tr>
                                <th className="tb4">주차여부</th>
                                <td className="tb4">
                                    매장 앞 4대 가능 (주차 공간 협소)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <a
                            className="naver-place"
                            href="https://naver.me/xrPd98ch"
                        >
                            <i class="fa-solid fa-location-dot"></i>
                            네이버 지도 바로가기
                        </a>
                        <a className="openkakao" href="#">
                            <i class="fa-solid fa-comment"></i>
                            카카오톡 채널 바로가기
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Directions;

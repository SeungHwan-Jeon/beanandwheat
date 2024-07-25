const sampleImg =
    "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_190c3fe5ac2%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_190c3fe5ac2%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.19140625%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

const breadsData = {
    카스테라: [
        { name: "보리 카스테라", price: 7.0, img: sampleImg, content: "" },
        { name: "밀봉 카스테리", price: 2.5, img: sampleImg, content: "" },
    ],
    롤: [
        { name: "초코롤", price: 7.0, img: sampleImg, content: "" },
        { name: "아몬드롤", price: 7.0, img: sampleImg, content: "" },
    ],
    바게트: [
        {
            name: "우리밀 소프트바게트",
            price: 3.8,
            img: sampleImg,
            content: "",
        },
    ],
    식빵: [
        {
            name: "쌀식빵",
            price: 6.0,
            img: "/images/full-menu/breads/쌀식빵.jpg",
            content: "",
        },
    ],
    페스트리: [
        { name: "크랜베리 페스트리", price: 5.5, img: sampleImg, content: "" },
        { name: "모카 페스트리", price: 5.5, img: sampleImg, content: "" },
        { name: "밤 페스트리", price: 5.5, img: sampleImg, content: "" },
    ],
    깜빠뉴: [
        { name: "통밀깜빠뉴", price: 5.0, img: sampleImg, content: "" },
        { name: "호밀깜빠뉴", price: 5.0, img: sampleImg, content: "" },
    ],
    빵: [
        { name: "호밀빵", price: 7.5, img: sampleImg, content: "" },
        { name: "통팥빵", price: 2.5, img: sampleImg, content: "" },
        { name: "소금 치즈 먹물 빵", price: 3.0, img: sampleImg, content: "" },
        { name: "모카볼", price: 3.8, img: sampleImg, content: "" },
        { name: "잡곡크림치즈", price: 4.8, img: sampleImg, content: "" },
        { name: "팥만쥬", price: 7.5, img: sampleImg, content: "" },
        { name: "감자빵", price: 6.5, img: sampleImg, content: "" },
        { name: "통밀빵", price: 7.5, img: sampleImg, content: "" },
    ],
    혼합빵: [
        { name: "팥, 밤 호두", price: 6.5, img: sampleImg, content: "" },
        {
            name: "무화과호두아몬드크림",
            price: 5.5,
            img: sampleImg,
            content: "",
        },
    ],
    기타: [
        { name: "몽블랑", price: 5.5, img: sampleImg, content: "" },
        { name: "전병", price: 4.5, img: sampleImg, content: "" },
    ],
};

export default breadsData;

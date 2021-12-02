import "./Portfolio.scss"
import PortfolioList from "./PortfolioList/PortfolioList";
import { useState } from "react";

export default function Portfolio() {
    const list = [
        {
            id: 'Featured',
            title: 'Featured',
        },
        {
            id: 'Web App',
            title: 'Web App',
        },
        {
            id: 'Mobile',
            title: 'Mobile',
        },
    ];

    const [selected, setSelected] = useState("Featured")

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map((item, index) => (
                    <PortfolioList key={index}title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
                ))}</ul>
            <div className="container">
                <div className="item">
                    <img src="assets/images/tenor.png" alt="pic" />
                    <h3>LaoMa Spicy</h3>
                </div>
                <div className="item">
                    <img src="assets/images/tenor.png" alt="pic" />
                    <h3>LaoMa Spicy</h3>
                </div>
                <div className="item">
                    <img src="assets/images/tenor.png" alt="pic" />
                    <h3>LaoMa Spicy</h3>
                </div>
                <div className="item">
                    <img src="assets/images/tenor.png" alt="pic" />
                    <h3>LaoMa Spicy</h3>
                </div>
            </div>
        </div>
    );
}
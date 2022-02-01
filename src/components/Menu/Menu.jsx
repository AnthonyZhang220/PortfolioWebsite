import React from 'react'
import { useState } from 'react';
import { HashLink } from "react-router-hash-link";
import "./Menu.scss"

export default function Menu() {


    const menuList = [
        {
            id: 1,
            item: "HOME",
        },
        {
            id: 2,
            item: "ABOUT",
        },
        {
            id: 3,
            item: "PORTFOLIO",
        },
        {
            id: 4,
            item: "PROJECT",
        },
        {
            id: 5,
            item: "CONTACT",
        },
    ];

    const [menu, setMenu] = useState(null)



    return (
        <div className='menu' id="menu">
            <div className="side-menu" id="side-menu" onClick={() => setMenu(menu)}>
                {menuList.map(({ id, item }) => {
                    return <HashLink to={`/#${item.toLowerCase()}`} key={id}>{item}</HashLink>
                })}
                <HashLink to="/blogs">BLOGS</HashLink>
            </div>
        </div>
    )
}

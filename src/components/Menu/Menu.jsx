import React from 'react'
import { useState } from 'react';
import { HashLink } from "react-router-hash-link";
import "./Menu.scss"

export default function Menu() {


    const menuList = ["HOME", "ABOUT", "PORTFOLIO", "PROJECT", "CONTACT"]
    const [menu, setMenu] = useState(null)



    return (
        <div className='menu' id="menu">
            <div className="side-menu" id="side-menu" onClick={() => setMenu(menu)}>
                {menuList.map((list) => {
                    return <HashLink to={`/#${list.toLowerCase()}`}>{list}</HashLink>
                })}
                <HashLink to="/blogs">BLOGS</HashLink>
            </div>
        </div>
    )
}

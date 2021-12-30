import React from 'react'
import { useEffect, useRef, useState } from 'react';
import "./Menu.scss"

export default function Menu() {


    const menuList = ["HOME", "ABOUT", "PORTFOLIO", "PROJECT", "CONTACT", "BLOG"]
    const [menu, setMenu] = useState(null)



    return (
        <div className='menu' id="menu">
            <div className="side-menu" id="side-menu" onClick={() => setMenu(menu)}>
                {menuList.map((list) => {
                    return <a href={`#${list.toLowerCase()}`}>{list}</a>
                })}
            </div>
        </div>
    )
}

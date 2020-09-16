import React, { useState } from 'react';

export const NavItem = (props) => {
    const [open, setOpen] = useState(false);


    return (
        <div>
            <li className="">
                <a href="/#" className="icon-button" onClick={() => setOpen(!open)}>
                    {props.icon}
                </a>
                {open && props.children}
            </li>
        </div>
    )
}

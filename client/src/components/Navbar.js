

import { ReactComponent as BellIcon } from '../icons/bell.svg';
import { ReactComponent as CaretIcon } from '../icons/caret.svg';

import React from 'react';

import { DropdownMenu } from './DropdownMenu';
import { NavItem } from './NavItem';
import { Header } from './Header';


export const Navbar = (props) => {
    return (
        <>
        <nav className="navbar">
          
              <Header/>

          <ul className="navbar-nav">

            {props.children}
            <NavItem icon={<BellIcon />} />

            <NavItem icon={<CaretIcon />}>
                <DropdownMenu/>
            </NavItem>

          </ul>
        </nav>

        </>
      );
}


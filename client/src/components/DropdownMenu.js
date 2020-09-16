
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../icons/bolt.svg';
import {useAuth0} from '@auth0/auth0-react';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
// import { DropdownMenuItem } from './DropdownMenuItem';

export const DropdownMenu = () => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
    const {loginWithRedirect, logout, isAuthenticated} = useAuth0();
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }

    const DropdownMenuItem = (props) => {
        return (
            <a href="/#" className="menu-item" onClick={props.action}>
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
      }
  
    return (

          <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      
      
        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">

            <DropdownMenuItem leftIcon="👤"  action={!isAuthenticated && (() => loginWithRedirect())} >Google Login</DropdownMenuItem>

            <DropdownMenuItem leftIcon="👤">My Profile</DropdownMenuItem>

            <DropdownMenuItem
              action={() => "apps" && setActiveMenu("apps")}
              leftIcon="📳"
              rightIcon="➔"
              goToMenu="apps">
              Apps
            </DropdownMenuItem>
            <DropdownMenuItem
              action={() => "settings" && setActiveMenu("settings")}
              leftIcon={<CogIcon />}
              rightIcon="➔"
              goToMenu="settings">
              Settings
            </DropdownMenuItem>
            

            <DropdownMenuItem leftIcon="🔓" action={isAuthenticated && (() => logout())} >Logout</DropdownMenuItem>
  
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'settings'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownMenuItem action={() => "main" && setActiveMenu("main")} leftIcon={<ArrowIcon />}>
              <h2>Settings</h2>
            </DropdownMenuItem>
            <DropdownMenuItem leftIcon={<BoltIcon />}>Account</DropdownMenuItem>
            <DropdownMenuItem leftIcon={<BoltIcon />}>Security & Privacy</DropdownMenuItem>
            <DropdownMenuItem leftIcon={<BoltIcon />}>Language</DropdownMenuItem>
            <DropdownMenuItem leftIcon={<BoltIcon />}>Subscription</DropdownMenuItem>
            <DropdownMenuItem leftIcon={<BoltIcon />}>Setting 5</DropdownMenuItem>
            <DropdownMenuItem leftIcon={<BoltIcon />}>Setting 6</DropdownMenuItem>
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'apps'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownMenuItem action={() => "main" && setActiveMenu("main")} leftIcon={<ArrowIcon />}>
              <h2>Apps</h2>
            </DropdownMenuItem>
            <DropdownMenuItem leftIcon="💲">Expense Tracker</DropdownMenuItem>
            <DropdownMenuItem leftIcon="✍">My Stories</DropdownMenuItem>
            <DropdownMenuItem leftIcon="🌎">Travel</DropdownMenuItem>
            <DropdownMenuItem leftIcon="❓">Something Else</DropdownMenuItem>
            <DropdownMenuItem leftIcon="⛅️">Weather</DropdownMenuItem>
          </div>
        </CSSTransition>
      </div>
    );

    
  }


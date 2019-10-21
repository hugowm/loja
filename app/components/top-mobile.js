import React from 'react';
import IconButton from '../components/icon-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faTree } from '@fortawesome/free-solid-svg-icons';

export default (props) => (
    <header className="header-site-mobile">
        <div>
            LOGO <FontAwesomeIcon icon={faTree}  />          
        </div>
        <IconButton icon={faBars} onClick={props.openMobileMenu} cls={props.menuMobileClass === "closed" ? 'button-menu-mobile' : 'button-menu-mobile hide'} />
    </header>
);
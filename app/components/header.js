import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faShoppingBasket, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import ButtonMenuMobile from '../components/button-menu-mobile';
import Menu from '../components/menu';
import IconButton from '../components/icon-button'

export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.openCloseMenu = this.openCloseMenu.bind(this);
        this.state = {
            menuOpened : false
        }
    }

    openCloseMenu(){
        this.setState(
            {
                ...this.state,
                menuOpened : !this.state.menuOpened
            }
        );
    }

    render(){
        return (
            <header className="header-site-mobile">
                <div className={this.state.menuOpened ? 'top-mobile change' : 'top-mobile'}>
                    <div>
                        LOGO <FontAwesomeIcon icon={faTree}  />          
                    </div>
                    <div className="buttons">
                        <IconButton cls="button-account" icon={faUserCircle} onClick={()=>{}} />
                        <IconButton cls="button-cart" icon={faShoppingBasket} onClick={()=>{}} />
                        <ButtonMenuMobile onClick={this.openCloseMenu} cls={this.state.menuOpened ? 'change' : ''} />
                    </div>
                </div>
                <Menu cls={this.state.menuOpened ? '' : 'closed'} />
            </header>
            )
        }
}
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';

import ButtonMenuMobile from '../components/button-menu-mobile';
import Menu from '../components/menu';


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
                <div className="top-mobile">
                    <div>
                        LOGO <FontAwesomeIcon icon={faTree}  />          
                    </div>
                    <ButtonMenuMobile onClick={this.openCloseMenu} cls={this.state.menuOpened ? 'change' : ''} />
                </div>
                <Menu cls={this.state.menuOpened ? '' : 'closed'} />
            </header>
            )
        }
}
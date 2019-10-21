import React from 'react';
import HomePage from '../pages/hompage';
import MenuMobile from '../components/menu-mobile';
import IconButton from '../components/icon-button';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.openMobileMenu = this.openMobileMenu.bind(this);
        this.closeMobileMenu = this.closeMobileMenu.bind(this);
        this.state = {
            menuMobileClass : 'closed'
        }
    }

    openMobileMenu(){
        this.setState({
            menuMobileClass : ''
        })
    }

    closeMobileMenu(){
        this.setState({
            menuMobileClass : 'closed'
        })
    }

    render(){
        return (
            <div>
                <IconButton icon={faBars} onClick={this.openMobileMenu} cls={this.state.menuMobileClass === "closed" ? 'button-menu-mobile' : 'button-menu-mobile hide'} />
                <MenuMobile cls={this.state.menuMobileClass} closeMobileMenu={this.closeMobileMenu} />
                <HomePage />
            </div>
        )
    }
}
import React from 'react';
import HomePage from '../pages/hompage';
import MenuMobile from '../components/menu-mobile';
import TopoMobile from '../components/top-mobile.js';
import Footer from '../components/footer';

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
                <TopoMobile menuMobileClass={this.state.menuMobileClass} openMobileMenu={this.openMobileMenu} />
                <MenuMobile cls={this.state.menuMobileClass} closeMobileMenu={this.closeMobileMenu} />
                <HomePage />
                <Footer />
            </div>
        )
    }
}
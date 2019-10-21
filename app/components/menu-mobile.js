import React from 'react';
import IconButton from '../components/icon-button';
import { faSearch , faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default class MenuMobile extends React.Component {
    render(){
        return(
            <div className={`menu-mobile ${this.props.cls}`}>
                <header className="search-box">
                    <input type="text" placeholder="Encontre no site" />
                    <IconButton icon={faSearch} />
                </header>
                {/* <nav>
                    <div>categoria 1</div>
                    <div>categoria 2</div>
                    <div>categoria 3</div>
                    <div>categoria 4</div>
                </nav>*/}
                <footer className="footer-menu">
                    <IconButton onClick={this.props.closeMobileMenu} icon={faTimesCircle} />
                </footer>
            </div> 
        )
    }
}
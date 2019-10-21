import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default class Menu extends React.Component {
    render(){
        return(
            <div className="menu-mobile">
                <div className="search-box">
                    <input type="text" placeholder="Encontre no site" />
                    <button>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <nav>
                    <div>categoria 1</div>
                    <div>categoria 2</div>
                    <div>categoria 3</div>
                    <div>categoria 4</div>
                </nav>
            </div>
        )
    }
}
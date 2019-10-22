import React from 'react';

export default (props) => (
    <div className={`button-menu-mobile ${props.cls}`} onClick={props.onClick}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
    </div>
)
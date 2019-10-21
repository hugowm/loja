import React from 'react';
import HomePage from '../pages/hompage';
import Menu from '../components/menu';

export default class Main extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Menu />
                <HomePage />
            </div>
        )
    }
}
import React from 'react';
import HomePage from '../pages/hompage';
import Header from '../components/header';
import Footer from '../components/footer';

export default class Main extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Header />
                <HomePage />
                <Footer />
            </div>
        )
    }
}
import React from 'react';
import '../styles/header.css';

const Header = props => (
    <header>
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="title-wrap">
                        <h1 className="center-align">Click A Haring</h1>
                        <p className="center-align">Start clicking images to score points. Just don't click the same image twice!</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                <h5 className="right-align">Score: {props.wins}</h5>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
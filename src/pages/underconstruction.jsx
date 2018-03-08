import React from 'react';
import Link from 'gatsby-link';

import penguin from "../img/penguin.svg";

class UnderConstruction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="under-construction">
                <h1>Under Construction</h1>
                <img src={penguin} />
            </div>
        );
    }
}

export default UnderConstruction;
import React from 'react';
import Link from 'gatsby-link';

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
                <img src="/img/penguin.svg" />
            </div>
        );
    }
}

export default UnderConstruction;
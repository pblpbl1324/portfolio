import React, { Component } from "react";

class SortingVisualizer extends Component {

    state = { array: [] }

    componentDidMount() {
        this.resetArray();
    }

    //initialize array to random values
    resetArray() {
        const array = [];
        for(let i = 0; i < 190; i++)
        {
            array.push(randomInt(100, 600));
        }
        this.setState({array});
    }

    render() {
        const { array } = this.state;
        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div className="array-bar" key={idx} style={{ height: `${value}px` }}></div>
                ))}
            </div>
        )
    }
}

//random int in the range [min, max]
function randomInt(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

export default SortingVisualizer;
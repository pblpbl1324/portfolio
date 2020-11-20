import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import * as sortingAlgorithms from "./SortingAlgorithm";

class SortingVisualizer extends Component {

    state = { array: [] }

    componentDidMount() {
        this.resetArray();
    }

    //initialize array to random values
    resetArray = () => {
        const width = window.innerWidth - 150;
        const n = Math.max(width/10, 10);
        const array = [];
        for(let i = 0; i < n; i++)
        {
            array.push(randomInt(100, 600));
        }
        this.setState({array});
    }

    bubbleSort = () => {

    }

    mergeSort = () => {
        sortingAlgorithms.mergeSort(this.state.array, 0, this.state.array.length-1);
        this.setState({array: this.state.array});
        console.log(this.state.array);
    }

    quickSort = () => {
        
    }

    heapSort = () => {
        
    }

    render() {
        const { array } = this.state;
        return (
            <div>
                <div className="array-container">
                {array.map((value, idx) => (
                    <div className="array-bar" key={idx} style={{ height: `${value/15}vh` }}></div>
                ))}
                </div>
                <hr/>
                <Button variant="success" onClick={this.resetArray}>New Array</Button>
                <Button variant="primary" onClick={this.bubbleSort}>Bubble Sort</Button>
                <Button variant="info" onClick={this.mergeSort}>Merge Sort</Button>
                <Button variant="secondary" onClick={this.quickSort}>Quick Sort</Button>
                <Button variant="dark" onClick={this.heapSort}>Heap Sort</Button>
            </div>
        )
    }
}

//random int in the range [min, max]
function randomInt(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

export default SortingVisualizer;
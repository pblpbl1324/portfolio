import React, { Component } from "react";

const TITLES = [
    "I learned ReactJS and created this website.",
    "It is a portfolio showcasing my projects.",
    "Feel free to contact me using links at the bottom!"
];

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true }

    //begin render event
    componentDidMount () {
        //change to fadeout after alarm (timeout)
        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 3000);
        this.animateTitles();
    }

    //unrender event
    componentWillUnmount () {
        //stops coroutine to stop taking up resources
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }
0
    animateTitles = () => {
        //call this function regularly every 4 seconds, it calls setstate so a rerender is triggered
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex, fadeIn: true });

            this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 3000);
        }, 4000);
    }

    render() {
        const { fadeIn, titleIndex } = this.state;

        //apply fadein/fadeout class to the paragraph
        return (
            <p className={ fadeIn ? "title-fade-in" : "title-fade-out" }>{TITLES[titleIndex]}</p>
        )
    }
}

export default Title;
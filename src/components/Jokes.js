import React, { Component } from "react";
import Button from "react-bootstrap/Button";

const Joke = ({ joke: { setup, punchline }}) => (
    <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
)

class Jokes extends Component {
    state = { joke: {}, jokes: [] };
    controller = new AbortController();

    //create event (asynchronous)
    componentDidMount() {
        //fetch an official joke (returns a json object)
        //after fetching, update the state (set joke property) to render it
        //remember that a json object has properties and fields so we can render those
        fetch("https://official-joke-api.appspot.com/random_joke", { signal: this.controller.signal })
        .then(response => response.json())
        .then(json => this.setState({ joke: json }))
        .catch(error => alert(error.message));
    }

    componentWillUnmount()
    {
        this.controller.abort();
    }

    //get 10 jokes
    fetchJokes = () => {
        fetch("https://official-joke-api.appspot.com/random_ten")
        .then(response => response.json())
        .then(json => this.setState({ jokes: json }))
        .catch(error => alert(error.message));
    }

    render() {
        return (
            <div>
                <h3>Random Joke</h3>
                <Joke joke={this.state.joke}/>
                <hr/>
                <Button variant="success" onClick={this.fetchJokes}>Show more jokes</Button>
                {
                    //if the jokes array isn't empty, render one joke at a time
                    this.state.jokes.map(bruh => <Joke key={bruh.id} joke={bruh}/>)
                }
            </div>
        )
    }
}

export default Jokes;
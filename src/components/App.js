import React, { Component } from "react";
import Home from "./Home";
import Jokes from "./Jokes";
import { HashRouter, Route } from "react-router-dom";

//this is the hub that manages the components
class App extends Component {

    render() {
        return (
            <HashRouter basename="/">
                <Route exact path="/" component={Home} />
                <Route path="/jokes" component={Jokes} />
            </HashRouter>
        );
    }
}

export default App;
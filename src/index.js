import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import PathfindingVisualizer from "./components/PathfindingVisualizer";
import Navigation from "./components/Navigation";
import { HashRouter, Route } from "react-router-dom";
import "./index.css";

//render everything in App as html code in the body of index.html
ReactDOM.render(
    <HashRouter basename="/">
        <Route exact path="/" render={() => <Navigation Component={Home} activeKey="#/"/>}/>
        <Route path="/graph" render={() => <Navigation Component={PathfindingVisualizer} activeKey="#/graph"/>}/>
    </HashRouter>, 
    document.getElementById("root")
);
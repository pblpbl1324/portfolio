import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Videos from "./components/Videos";
import About from "./components/About";
import Sort from "./components/SortingVisualizer";
import { HashRouter, Route } from "react-router-dom";
import "./index.css";

//render everything in App as html code in the body of index.html
ReactDOM.render(
    <HashRouter basename="/">
        <Route exact path="/" render={() => <Navigation Component={Home} activeKey="#/"/>}/>
        <Route path="/videos" render={() => <Navigation Component={Videos} activeKey="#/videos"/>}/>
        <Route path="/about" render={() => <Navigation Component={About} activeKey="#/about"/>}/>
    </HashRouter>, 
    document.getElementById("root")
);
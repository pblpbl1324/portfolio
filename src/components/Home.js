import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";
import profile from "../assets/profile.png";

//this is where everything should be to get rendered in index.html
class Home extends Component {

    //update state on initialization
    state = { displayBio : false };

    //use setState to change state, don't directly modify state
    //it calls render() again at the end of setState
    toggleBio = () => {
        this.setState({ displayBio : !this.state.displayBio });
    }

    render() {
        console.log("hi");
        return (
            <div>
                <img src={profile} style={{ width: 200, height: 200, marginBottom: ".5rem" }}alt="Profile" className="profile"/>
                <h1>Bill's Portfolio</h1>
                <p>Welcome to my profile.</p>
                <Title/>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I am an IB student from Milliken Mills HS.</p>
                            <p>I like math, computer science, developing games, and making music.</p>
                            <Button variant="primary" onClick={this.toggleBio}>Show less</Button>
                        </div>
                    ) : (
                        <div>
                            <Button variant="primary" onClick={this.toggleBio}>Read more</Button>
                        </div>
                    )
                }
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>
            </div>
        )
    }
}

export default Home;
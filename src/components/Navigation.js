import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import profile from "../assets/profile.png";

class Navigation extends Component {

    componentDidMount() {
        console.log("mounted");
    }

    componentWillUnmount() {
        console.log("unmounted");
    }

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#/">
                        <img src={profile} style={{ width: 35, height: 35 }} alt="Profile" className="profile"/>
                    </Navbar.Brand>
                    <Nav activeKey={this.props.activeKey} className="mr-auto">
                        <Nav.Link href="#/">Home</Nav.Link>
                        <Nav.Link href="#/jokes">About</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;
import React from 'react';
import styled from 'styled-components';
import Logout from "./Logout";

const NavStyle = styled.div`
  background-color: #40ac81;
`

function Navbar(props) {
    return (
        <div>
            <NavStyle>
                <div className="nav justify-content">
                    <a className="nav-link" href="/" style={{"color": "white"}}>Home</a>
                    <a className="nav-link" href="/list" style={{"color": "white"}}>See List</a>
                    <a className="nav-link" href="/register" style={{"color": "white"}}>Register</a>
                    <a className="nav-link" href="/login" style={{"color": "white"}}>Login</a>
                    <a className="nav-link" href="/" style={{"color": "white"}} onClick={Logout}>Logout</a>
                </div>
            </NavStyle>
        </div>
    );
}




export default Navbar;
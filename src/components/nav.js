import React from "react";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand mr-lg-auto" href="https://polar-mountain-74733.herokuapp.com/">
          <img src="https://static.thenounproject.com/png/215839-200.png" alt="logo" style={{width:"50px", height:"40px"}}/>  <span>ShareIdea</span>
          </a>
           <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#menu1">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#menu2">Contact Us</a>
          </li>
        </ul>
        </nav>
    )
}

export default Nav
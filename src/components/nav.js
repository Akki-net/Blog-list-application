import React from "react";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="navbar-brand">Navbar</div>
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
import React, { useState, useEffect } from 'react';

const App = () => {
 

  return(
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <a className="navbar-brand" href="#">Navbar</a>
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

  <div className="tab-content">
    <div id="home" className="container tab-pane active">
    <form>
    <div className="form-row">
      <div className="col">
        <label for="blogger" className="mr-sm-2">Name:</label>
        <input type="text" className="form-control" id="blogger" placeholder="Enter your name" name="blogger" />
      </div>
      <div className="col">
        <label for="title" className="mr-sm-2">Title:</label>
        <input type="text" className="form-control" placeholder="Enter title" id="title" name="title" />
      </div>
    </div>
      <label for="comment" className="mb-2 mr-sm-2">Description:</label>
      <textarea className="form-control mb-2 mr-sm-2" rows="5" id="comment" name="text"></textarea>
      <button type="submit" className="btn btn-primary">Submit</button>
  </form>
    </div>
    <div id="menu1" className="container tab-pane fade">
      <h3>Menu 1</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div id="menu2" className="container tab-pane fade">
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
  </div>
    </div>
  )
};

export default App;

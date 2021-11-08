import React from 'react'
import LoginForm from './loginForm'
import blogService from '../services/blogs'

const Nav = ({ user, setUser }) => {
  const handleLogout = () => {
    window.localStorage.removeItem('blogLoggedUser')
    blogService.setToken(null)
    setUser(null)
  }
  const login = () => <LoginForm/>

  return (<div>
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <a className="navbar-brand mr-lg-auto" href="https://polar-mountain-74733.herokuapp.com/">
        <img src="https://static.thenounproject.com/png/215839-200.png" alt="logo" style={{ width:'50px', height:'40px' }}/>  <span>ShareIdea</span>
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
    <div className="d-flex align-items-center justify-content-end bg-warning p-2">
      <div className="mr-2"> {user.name} logged in</div>
      <button className="btn btn-sm btn-danger" onClick={handleLogout}>logout</button>
    </div>
    {user === null && login()}
  </div>
  )
}

export default Nav
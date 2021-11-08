/* eslint-disable linebreak-style */
import React from 'react'
import SignUpForm from './signUpForm'

const LoginForm = ({
  handleSubmit,
  handleUsername,
  handlePassword,
  username,
  password,
  errMsg,
  name,
  handleName,
  errPwd,
  handleRepeatPassword,
  handleSignUp,
  repeatPassword
}) => {
  return (
    <div className="container p-5 bg-secondary mt-5">
      <h2 className="text-center text-warning mb-2">log in to application</h2>
      <form className="w-75 mx-auto bg-success p-3 rounded" onSubmit={handleSubmit} >
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" className="form-control" placeholder="Enter username" id="username" value={username} onChange={handleUsername} />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" placeholder="Enter password" id="pwd" value={password} onChange={handlePassword} />
        </div>
        <button type="submit" className="btn btn-outline-info btn-light">LogIn</button>

        <button type="button" className="btn btn-light btn-outline-danger float-right" data-toggle="modal" data-target="#myModal">
                    SignUp
        </button>
        <SignUpForm
          handleSignUp={handleSignUp}
          setName={handleName}
          name={name}
          setUsername={handleUsername}
          setPassword={handlePassword}
          username={username}
          password={password}
          repeatPassword={repeatPassword}
          setRepeatPassword={handleRepeatPassword}
          errPwd={errPwd}
        />
      </form>
      <div className="w-75 mx-auto mt-3">
        <strong> {errMsg} </strong>
      </div>
    </div>
  )
}

export default LoginForm
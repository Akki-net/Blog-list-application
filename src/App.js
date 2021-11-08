import React, { useState, useEffect } from 'react'
import LoginForm from './components/loginForm'
import BlogForm from './components/blogForm'
import blogService from './services/blogs'
import Welcome from './components/welcome'
import loginService from './services/login'
import userService from './services/user'

const App = () => {
  const [name, setName] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [errPwd, setErrPwd] = useState(null)
  const [user, setUser] = useState(null)
  const [signUp, setSignUp] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState(null)

  useEffect(() => {
    const blogUser = window.localStorage.getItem('blogLoggedUser')
    if (blogUser) {
      const user = JSON.parse(blogUser)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (Event) => {
    Event.preventDefault()

    try {
      const user = await loginService.login({
        username, password
      })
      blogService.setToken(user.token)
      window.localStorage.setItem('blogLoggedUser', JSON.stringify(user))
      setUser(user)
      setUsername('')
      setPassword('')
    }
    catch (exception) {
      setErrMsg('Wrong credentials')
      setTimeout(() => {
        setErrMsg(null)
      }, 5000)
    }
  }

  const handleSignUp = async Event => {
    Event.preventDefault()

    try {
      if (password === repeatPassword) {
        const userForSignup = {
          name, username, password
        }

        setSignUp(userForSignup)
        await userService.createUser(userForSignup)
        setName('')
        setUsername('')
        setPassword('')
        setRepeatPassword('')
      }
    }
    catch (exception) {
      setErrPwd('Password must be same')
      setTimeout(() => {
        setErrPwd(null)
      }, 5000)
    }
  }

  const signUpWelcome = () => <Welcome signUp={signUp} setSignUp={setSignUp} setUser={setUser} user={user} />

  const login = () => <LoginForm
    handleSubmit={handleLogin}
    handleUsername={({ target }) => setUsername(target.value)}
    handlePassword={({ target }) => setPassword(target.value)}
    username={username}
    password={password}
    repeatPassword={repeatPassword}
    errMsg={errMsg}
    name={name}
    handleName={({ target }) => setName(target.value)}
    errPwd={errPwd}
    handleRepeatPassword={({ target }) => setRepeatPassword(target.value)}
    handleSignUp={handleSignUp}
  />
  const blogs = () => <BlogForm user={user} setUser={setUser} />

  return (
    <div>
      {user !== null && blogs()}
      {user === null && signUp === null && login()}
      {user === null && signUp !== null && signUpWelcome()}
    </div>
  )

}

export default App
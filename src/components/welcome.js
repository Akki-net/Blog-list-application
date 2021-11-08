import React from 'react'
import loginService from '../services/login'
import blogService from '../services/blogs'
import App from '../App'

const Welcome = ({ signUp, setSignUp, setUser, user }) => {
  const stayNWait = () => {
    const handleLogin = async (Event) => {
      Event.preventDefault()
      console.log('object', signUp)
      const user = await loginService.login({
        username: signUp.username,
        password: signUp.password
      })

      window.localStorage.setItem('blogLoggedUser', JSON.stringify(user))
      blogService.setToken(user.token)
      setUser(user)
      setSignUp(null)
    }
    return(
      <div className="container d-flex flex-column align-items-center bg-light">
        <h1>Welcome {signUp.name} to ShareIdea</h1>
        <p><span onClick={handleLogin} className="text-info">Click Here</span> to go to the main page</p>
      </div>)
  }

  return (
    <div>
      {user!==null && <App />}
      {user === null && stayNWait()}
    </div>
  )
}



export default Welcome
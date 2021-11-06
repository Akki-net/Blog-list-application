import React, { useState,useEffect } from 'react';
import LoginForm from './components/loginForm';
import BlogForm from './components/blogForm';
import blogService from './services/blogs';

const App = () => {
const [ user, setUser ] = useState(null);
const [signUp, setSignUp] = useState(null);

useEffect(() => {
  const blogUser = window.localStorage.getItem('blogLoggedUser');
  if(blogUser){
    const user = JSON.parse(blogUser);
    setUser(user);
    blogService.setToken(user.token)
  }
}, [])

const signUpWelcome = () => (
  <div className="container d-flex">
    <h1 className="d-block mx-auto align-self-center">Welcome to ShareIdea</h1>
    <p>Go to the main page</p>
  </div>
)

  const login = () => <LoginForm setUser={setUser} setSignUp={setSignUp} />;
  const blogs = () => <BlogForm user={user} setUser={setUser}/>
  const showForm = () => {
    if(signUp){
      signUpWelcome()
    }
    else{
      user!== null && blogs();
      user === null && login();
    }
  }
  return(
    <div>
      {showForm()}
    </div>
  )
};

export default App;

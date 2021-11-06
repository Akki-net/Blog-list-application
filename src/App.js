import React, { useState,useEffect } from 'react';
import LoginForm from './components/loginForm';
import BlogForm from './components/blogForm';
import blogService from './services/blogs';
import Welcome from './components/welcome';

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

const signUpWelcome = () => <Welcome signUp={signUp} setSignUp={setSignUp} setUser={setUser} user={user} />

const login = () => <LoginForm setUser={setUser} setSignUp={setSignUp} />;
const blogs = () => <BlogForm user={user} setUser={setUser}/>

  return(
    <div>
      {user!== null && blogs()}
      {user === null && signUp==null && login()}
      {user === null && signUp!==null && signUpWelcome()}
    </div>
  )     

  }
 

export default App;

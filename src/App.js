import React, { useState,useEffect } from 'react';
import LoginForm from './components/loginForm';
import BlogForm from './components/blogForm';
import blogService from './services/blogs';

const App = () => {
const [ user, setUser ] = useState(null);

useEffect(() => {
  const blogUser = window.localStorage.getItem('blogLoggedUser');
  if(blogUser){
    const user = JSON.parse(blogUser);
    setUser(user);
    blogService.setToken(user.token)
  }
}, [])

  const login = () => <LoginForm setUser={setUser} />;
  const blogs = () => <BlogForm user={user} setUser={setUser}/>
  return(
    <div>
      {user!== null && blogs()}
      {user === null && login()}    
    </div>
  )
};

export default App;

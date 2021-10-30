import React, { useState } from 'react';
import LoginForm from './components/loginForm';
import BlogForm from './components/blogForm';

const App = () => {
const [ user, setUser ] = useState(null);

  const login = () => <LoginForm setUser={setUser} />;
  const blogs = () => <BlogForm user={user} />
  return(
    <div>
      {user!== null && blogs()}
      {user === null && login()}    
    </div>
  )
};

export default App;

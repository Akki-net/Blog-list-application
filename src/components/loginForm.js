import React,{ useState } from 'react';
import loginService from '../services/login';
import blogService from '../services/blogs'; 

const LoginForm = ({setUser}) => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errMsg, setErrMsg ] = useState(null);

    const handleLogin= async (Event) => {
        Event.preventDefault();
        
        try {
            const user =  await loginService.login({
                username, password
            });
            blogService.setToken(user.token);
            setUser(user);
            setUsername('');
            setPassword('');
        }
        catch(exception) {
            setErrMsg('Wrong credentials');
            setTimeout(() => {
                setErrMsg(null)
            }, 5000)
        }
    }

    return (
        <div className="container p-5 bg-secondary mt-5">
            <h2 className="text-center text-warning mb-2">log in to application</h2>
            <form className="w-75 mx-auto bg-success p-3 rounded" onSubmit={handleLogin} >
            <div className="form-group">
            <label for="username">Username:</label>
            <input type="text" className="form-control" placeholder="Enter username" id="username" value={username} onChange={(Event) => setUsername(Event.target.value)} />
            </div>
            <div className="form-group">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" placeholder="Enter password" id="pwd" value={password} onChange={(Event) => setPassword(Event.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="w-75 mx-auto mt-3">
            <strong> {errMsg} </strong>
            </div>
        </div>
    )
}

export default LoginForm
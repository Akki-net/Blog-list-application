import React, {useState} from 'react';
import userServices from '../services/user';

const SignUpForm = ({setSignUp}) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errPwd, setErrPwd] = useState(null);

    const handleSignUp = async Event => {
        Event.preventDefault();

        try{
            if(password === repeatPassword){
                const userForSignup = {
                    name, username, password
                };
                
                setSignUp(userForSignup);
                await userServices.createUser(userForSignup);
                setName('');
                setUsername('');
                setPassword('');
                setRepeatPassword(''); 
            }
        }
        catch(exception){
            setErrPwd('Password must be same');
            setTimeout(() => {
                setErrPwd(null)
            }, 5000)
        }

    }

    return (
        <div className="modal" id="myModal">
                    <div className="modal-dialog bg-light rounded p-4">

                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h1>Sign Up</h1>

                        <p>Please fill in this form to create an account.</p>

                        <div className="modal-content">
                             <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="name">Name:</label>
                                        <input type="text" className="form-control" placeholder="Enter Name" id="name" value={name} onChange={({target}) => setName(target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username">Username:</label>
                                        <input type="text" className="form-control" placeholder="Enter Username" id="username" value={username} onChange={({target}) => setUsername(target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">Password:</label>
                                        <input type="password" className="form-control" placeholder="Enter password" id="pwd" value={password} onChange={({target}) => setPassword(target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="rptpwd">Repeat Password:</label>
                                        <input type="password" className="form-control" placeholder="Repeat password" id="rptpwd" value={repeatPassword} onChange={({target}) => setRepeatPassword(target.value)} />
                                        <span className="text-warning"> {errPwd} </span>
                                    </div>
                                    <div className="form-group form-check">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" /> Remember me
                                        </label>
                                    </div>
                                    <p>By creating an account you agree to our <span className="text-info">Terms & Privacy</span>.</p>
                                    <button type="submit" className="btn btn-primary" onClick={handleSignUp} data-dismiss="modal" >Submit</button>
                                    <button type="button" className="btn btn-danger float-right" data-dismiss="modal">Cancel</button>
                            </div>

                        </div>
                    </div>
                </div>
    )
}

export default SignUpForm

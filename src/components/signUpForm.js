import React from 'react'

const SignUpForm = ({
    handleSignUp,
    setName,
    name,
    setUsername,
    setPassword,
    username,
    password,
    repeatPassword,
    setRepeatPassword,
    errPwd
}) => {
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
                            <input type="text" className="form-control" placeholder="Enter Name" id="name" value={name} onChange={setName} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className="form-control" placeholder="Enter Username" id="username" value={username} onChange={setUsername} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" placeholder="Enter password" id="pwd" value={password} onChange={setPassword} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rptpwd">Repeat Password:</label>
                            <input type="text" className="form-control" placeholder="Repeat password" id="rptpwd" value={repeatPassword} onChange={setRepeatPassword} />
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

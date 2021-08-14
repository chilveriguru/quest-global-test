import React, { Fragment, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

let LoginUser = () => {
    let [userdata, setuserdata] = useState({
        email: "",
        password: ""

    })
    let history = useHistory()

    //User login code
    let UserLogin = (e) => {
        e.preventDefault();
        console.log("User data", userdata)
        const registeredUsers = localStorage.getItem('registeredUsers') ? JSON.parse(localStorage.getItem('registeredUsers')) : [];
        console.log("registeredUsers", registeredUsers)
        let isUserExists = [];
        if (registeredUsers) {
            isUserExists = registeredUsers.filter((x) => x.password == userdata.password && x.email == userdata.email);
            console.log("isUserExists", isUserExists)

            if (isUserExists && isUserExists.length) {  // redirect to dashboard
                localStorage.setItem('loginUserData', JSON.stringify(isUserExists[0]))
                history.push('/product')
                // console.log("Login Successfully")
            } else {
                alert("Invalid Credential/User not exist")
                history.push('/register')

            }
        }
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers))
    }

    return (
        <Fragment>
            {/* {JSON.stringify(userdata)} */}
            <div className="container mt-5">
                <div className="jumbotron">
                    <h1>Login Here</h1>
                    <form onSubmit={UserLogin}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={(e) => setuserdata({ ...userdata, email: e.target.value })} required />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={(e) => setuserdata({ ...userdata, password: e.target.value })} required />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                        <div>
                            <Link to="/register">if don't have acount</Link>
                        </div>
                    </form>
                    
                </div>
                
            </div>
        </Fragment>
    )
}
export default LoginUser
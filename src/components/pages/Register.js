import React, { Fragment, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
let Register = () => {
    let history = useHistory()
    let [userdata, setuserdata] = useState({
        name: "",
        email: "",
        password: ""

    })
    let RegisterUser = (e) => {
        e.preventDefault()
        console.log(userdata)
        const registeredUsers = localStorage.getItem('registeredUsers') ? JSON.parse(localStorage.getItem('registeredUsers')) : [];
        let isUserExists = [];
        if (registeredUsers) {
            isUserExists = registeredUsers.filter(x => x.name == userdata.name && x.email == userdata.email);
            // console.log("isUserExists", isUserExists[0])

            if (isUserExists && !isUserExists.length) {
                registeredUsers.push(userdata);
                history.push('/')
            }
        }
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers))
    }

    return (
        <Fragment>
            {/* <pre>{JSON.stringify(userdata)}</pre> */}
            <div className="container mt-5">
                <div className="jumbotron">
                    <h1>Register Here</h1>
                    <form onSubmit={RegisterUser}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" name="name" onChange={(e) => setuserdata({ ...userdata, name: e.target.value })} required />
                        </div>
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
                            <Link to="/">if already have acount</Link>
                        </div>

                    </form>
                </div>
            </div>
        </Fragment>
    )
}
export default Register
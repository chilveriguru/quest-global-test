import React, { Fragment, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

let Navbar = () => {
    let history = useHistory()
    let [userinfo, setuserinfo] = useState()
    let [Authonticated, setAuthonticated] = useState(false)

    //LogOut user
    let UserLogout = () => {
        localStorage.removeItem('loginUserData')
        history.push("/")
    }

    //To check user is Authonticated or not
    try {
        useEffect(() => {
            const userdata = localStorage.getItem('loginUserData') ? JSON.parse(localStorage.getItem('loginUserData')) : null
            console.log('============>', userdata)
            setuserinfo(userdata)
        }, [])
    } catch (err) {
        console.error(err)
    }
    //Befor user Login
    let beforeLogin = (
        <Fragment>
            <Link className="btn btn-outline-success my-2 my-sm-0" to="/">Login</Link>
        </Fragment>
    )
    //After user Login
    let afterLogin = (
        <Fragment>
            {userinfo ? userinfo.email : null}&nbsp;&nbsp;&nbsp;&nbsp;<Link className="btn btn-outline-success my-2 my-sm-0" to="/" onClick={UserLogout} >LogOut</Link>
        </Fragment>
    )


    return (
        <Fragment>
            {/* {JSON.stringify(userinfo)} */}
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white rounded">
                    <Link to="/product" className="navbar-brand" >Technical Test</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            {
                                userinfo ? afterLogin : beforeLogin
                            }
                        </form>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}
export default Navbar
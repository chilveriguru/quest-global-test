import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

let Navbar = () => {
    return (
        <Fragment>
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
                            <Link className="btn btn-outline-success my-2 my-sm-0" to="/">Login</Link>
                        </form>
                    </div>
                </nav>
            </div>
        </Fragment>
    )

}
export default Navbar
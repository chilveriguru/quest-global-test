import React from 'react';
import { Redirect, Route } from 'react-router-dom'
let PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
        {
            return !localStorage.getItem('loginUserData') ? <Redirect to="/" /> : <Component{...props} />
        }
    }} />
}
export default PrivateRoute

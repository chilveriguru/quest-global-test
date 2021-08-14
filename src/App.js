// import logo from './logo.svg';
// import './App.css';
import LoginUser from './components/pages/Login';
import Product from './components/Product';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Layout/Navbar';
import Register from './components/pages/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="App">
      {/* <LoginUser /> */}
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/product" component={Product} />
          <Route exact path="/" component={LoginUser} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
      {/* <Product /> */}
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
import LoginUser from './components/Login';
import Product from './components/Product';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar';

function App() {
  localStorage.setItem("username", "admin");
  localStorage.setItem("password", "123456");
  return (
    <div className="App">
      {/* <LoginUser /> */}
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/product" component={Product} />
          <Route exact path="/" component={LoginUser} />
        </Switch>
      </Router>
      {/* <Product /> */}
    </div>
  );
}

export default App;

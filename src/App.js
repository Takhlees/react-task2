import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/home';
import Productspage from './Components/productspage';
import Cart from './Components/cart';
import Contactus from './Components/contactus';
import Signup from './Components/signup';
import Login from './Components/login';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/productspage" component={Productspage} />
      <Route path="/cart" component={Cart} />
      <Route path="/contactus" component={Contactus} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import SingleItem from './components/SingleItem/SingleItem';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
    <Navbar/>
    <main className="container">
      <Switch>
      <Route exact path="/" component={Products}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/product/:id" component={SingleItem} />
      </Switch>
    </main>
    </Router>
  );
}

export default App;

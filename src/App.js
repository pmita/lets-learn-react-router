import './App.css';
//Import components
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetail from './itemDetail';
//Import Router related modules
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    //For us to use the routing functionality in our code we first need
    //to wrap all the components that we require to have routing functionality, within
    //a BrowserRouter or Router tag.
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>

    </Router>
  );
}

const Home = () => {
  return(
    <div>
      <h1>Home page</h1>
    </div>
  );
}

export default App;

import './App.css';
//Import components
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
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
        //Switch allows us to render only the relative components based on our url
        <Switch>
          //Route allows us to direct the user to the correct component/page based
          //on the correct url. To avoid further configuring and future hastle
          //we can also define exact routes for our components.
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
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

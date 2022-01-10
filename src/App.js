import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddYourFriend from "./components/AddYourFriend";
import FindYourFriend from "./components/FindYourFriend";
import Home from "./components/Home";
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    
    <Router>
   <div className="background">
    <Navbar />
    <Switch>
        <Route exact path="/ayf">
          <AddYourFriend />
        </Route>
        <Route exact path="/fyf">
          <FindYourFriend />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
    </Switch>
    </div>
    </Router>
    </> 
  );

}

export default App;

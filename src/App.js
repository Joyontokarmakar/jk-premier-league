import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Nomatch from './components/Nomatch/Nomatch';
import ClubDetail from './components/ClubDetail/ClubDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>

        <Route path="/club-detail/:idTeam">
          <ClubDetail/>
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="*">
          <Nomatch/>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;

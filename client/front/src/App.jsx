import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Welcome from './pages/welcome';
import Home from './pages/home';
import Missing from './pages/Missing';
import "./App.css";

function App() {

  return (
    <div>
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path = "/welcome">
          <Welcome/>
        </Route>
        <Route path = "*" component = {Missing}/>
      </Switch>
    </div>
  )
}

export default App;

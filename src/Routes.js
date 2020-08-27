import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "Pages/Main/Main";
import Intro from "Pages/Intro/Intro";
import Projects from "Pages/Projects/Projects";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/intro" component={Intro} />
          <Route exact path="/projects" component={Projects} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

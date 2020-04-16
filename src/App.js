import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import   Home   from './Home'
import { ActivePlane } from './ActivePlane'
import { NoMatch } from './NoMatch'
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'
import { Jumbotron } from './components/Jumbotron'

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Jumbotron />
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/risco/" component={Home}/>
          <Route exact path="/risco/ActivePlane/" component={ActivePlane}/>
          <Route component={NoMatch} />
        </Switch>
      </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;

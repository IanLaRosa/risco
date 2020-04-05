import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home } from './Home'
import { ActivePlane } from './ActivePlane'
import { NoMatch } from './NoMatch'
import { Layout } from './components/Layout'

function App() {
  return (
    <React.Fragment>
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/ActivePlane" component={ActivePlane}/>
          <Route component={NoMatch} />
        </Switch>
      </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;

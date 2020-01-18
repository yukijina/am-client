import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

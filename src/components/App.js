import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import AddForm from '../containers/AddForm';
import NoMatch from './NoMatch';
import EditForm from '../containers/EditForm';
import TheMainSection from '../containers/MainSection';
import Header from './Header';

const readme = () => (
  <div>
    README
  </div>
);
const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={TheMainSection} />
        <Route exact path="/add" component={AddForm} />
        <Route exact path="/edit/:id" component={EditForm} />
        <Route exact path="/about" component={readme} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;

import React, { Component } from 'react';
import Header from './Header';
import MainSection from '../containers/MainSection';

class App extends Component {
  constructor() {
    super();
    this.state = {
      testRes: '',
    };
  }

  componentDidMount() {
    fetch('/api/hello')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          testRes: data.express,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">{this.state.testRes}</p>
        <Header />
        <MainSection />
      </div>
    );
  }
}

export default App;

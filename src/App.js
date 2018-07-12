import React, { Component } from 'react';
import AddForm from './Components/AddForm';
// import Component
import Header from './Components/Header';
import TableHeads from './Components/TableHeads';
import TableItems from './Components/TableItems';
import { heads } from './fakeData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tableHeads: [],
    };
  }

  // mount data before render
  componentWillMount() {
    this.setState({
      tableHeads: heads,
    });
  }

  render() {
    const { tableHeads } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="container">
          <AddForm />
          <table className="table mt-5">
            <TableHeads tableHeads={tableHeads} />
            <TableItems />
          </table>
        </div>
      </div>
    );
  }
}

export default App;

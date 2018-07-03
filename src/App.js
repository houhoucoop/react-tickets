import React, { Component } from 'react';
import uuid from 'uuid';
import './App.css';

// import Component
import Header from './Components/Header';
import TableHeads from './Components/TableHeads';
import TableItems from './Components/TableItems';
import AddForm from './Components/AddForm';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      tableHeads: [],
      tableItems: []
    }
  }

  componentWillMount() {
    this.setState({
      tableHeads: [{
        name: 'ID'
      }, {
        name: 'Category'
      }, {
        name: 'Subject'
      }, {
        name: 'Assignee'
      }, {
        name: 'Priority'
      }, {
        name: 'Status'
      }],
      tableItems: [{
        id: uuid.v4(),
        category: 'Marketing',
        subject: 'A new rating has been received',
        assignee: 'Erwin',
        priority: 'Medium',
        status: 'Open',
        update: false
      }, {
        id: uuid.v4(),
        category: 'Billing',
        subject: 'Billed twice',
        assignee: 'Jessica',
        priority: 'High',
        status: 'Pending',
        update: false
      }, {
        id: uuid.v4(),
        category: 'Service',
        subject: 'Verify email address',
        assignee: 'George',
        priority: 'Normal',
        status: 'Closed',
        update: false
      }]
    });
  }

  handleAddItem(item) {
    let tableItems = this.state.tableItems;
    tableItems.push(item);
    this.setState({
      tableItems: tableItems
    });
  }

  handleDeleteItem(id) {
    let tableItems = this.state.tableItems;
    let index = tableItems.findIndex(x => x.id === id);
    tableItems.splice(index, 1);
    this.setState({
      tableItems: tableItems
    });
  }

  handleSaveItem(item) {
    let id = item.id;
    let tableItems = this.state.tableItems;
    let index = tableItems.findIndex(x => x.id === id);
    tableItems[index] = item;
    this.setState({
      tableItems: tableItems
    });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="Wrapper">
          <AddForm addItem={this.handleAddItem.bind(this)}/>
          <table className="App-table">
            <TableHeads tableHeads={this.state.tableHeads} />
            <TableItems 
              tableItems={this.state.tableItems} 
              onDelete={this.handleDeleteItem.bind(this)} 
              onSave={this.handleSaveItem.bind(this)}
            />
          </table>
        </div>
      </div>
    );
  }
}

export default App;

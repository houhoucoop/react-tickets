import React, { Component } from 'react';
import shortid from 'shortid';

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

  // mount data before render
  componentWillMount() {
    this.setState({
      tableHeads: [{
        name: 'ID',
        class: 'w-12'
      }, {
        name: 'Subject',
        class: 'w-25'
      }, {
        name: 'Category',
        class: 'w-12'
      }, {
        name: 'Assignee',
        class: 'w-10'
      }, {
        name: 'Priority',
        class: 'w-10'
      }, {
        name: 'Status',
        class: 'w-12'
      }, {
        name: 'Action',
        class: 'w-19'
      }],
      tableItems: [{
        id: shortid.generate(),
        category: 'Marketing',
        subject: 'A new rating has been received',
        assignee: 'Erwin',
        priority: 'Medium',
        status: 'Open',
        update: false
      }, {
        id: shortid.generate(),
        category: 'Billing',
        subject: 'Billed twice',
        assignee: 'Jessica',
        priority: 'High',
        status: 'Pending',
        update: false
      }, {
        id: shortid.generate(),
        category: 'Service',
        subject: 'Verify email address',
        assignee: 'George',
        priority: 'Normal',
        status: 'Closed',
        update: false
      }, {
        id: shortid.generate(),
        category: 'Service',
        subject: 'Security alert for account',
        assignee: 'Jose',
        priority: 'Low',
        status: 'Open',
        update: false
      }, {
        id: shortid.generate(),
        category: 'Dev',
        subject: 'PHP 5.3 is not working',
        assignee: 'Luke',
        priority: 'High',
        status: 'Processing',
        update: false
      }]
    });
  }

  // ADD: push item to tableItems
  handleAddItem = (item) => {
    const tableItems = this.state.tableItems;
    tableItems.push(item);
    this.setState({
      tableItems: tableItems
    });
  }

  // Delete: find index by id, then delete it
  handleDeleteItem = (id) => {
    const tableItems = this.state.tableItems;
    const index = tableItems.findIndex(x => x.id === id);
    tableItems.splice(index, 1);
    this.setState({
      tableItems: tableItems
    });
  }

  // Save: find item by id, then set it equal to new item 
  handleSaveItem = (item) => {
    const id = item.id;
    const tableItems = this.state.tableItems;
    const index = tableItems.findIndex(x => x.id === id);
    tableItems[index] = item;
    this.setState({
      tableItems: tableItems
    });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <AddForm addItem={this.handleAddItem}/>
          <table className="table mt-5">
            <TableHeads tableHeads={this.state.tableHeads} />
            <TableItems 
              tableItems={this.state.tableItems} 
              onDelete={this.handleDeleteItem} 
              onSave={this.handleSaveItem}
            />
          </table>
        </div>
      </div>
    );
  }
}

export default App;

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
      tableItems: [],
    };

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleSaveItem = this.handleSaveItem.bind(this);
  }

  // mount data before render
  componentWillMount() {
    this.setState({
      tableHeads: [{
        name: 'ID',
        class: 'w-12',
      }, {
        name: 'Subject',
        class: 'w-25',
      }, {
        name: 'Category',
        class: 'w-12',
      }, {
        name: 'Assignee',
        class: 'w-10',
      }, {
        name: 'Priority',
        class: 'w-10',
      }, {
        name: 'Status',
        class: 'w-12',
      }, {
        name: 'Action',
        class: 'w-19',
      }],
      tableItems: [{
        id: shortid.generate(),
        subject: 'A new rating has been received',
        category: 'Marketing',
        assignee: 'Erwin',
        priority: 'Medium',
        status: 'Open',
        update: false,
      }, {
        id: shortid.generate(),
        subject: 'Billed twice',
        category: 'Billing',
        assignee: 'Jessica',
        priority: 'High',
        status: 'Pending',
        update: false,
      }, {
        id: shortid.generate(),
        subject: 'Verify email address',
        category: 'Service',
        assignee: 'George',
        priority: 'Normal',
        status: 'Closed',
        update: false,
      }, {
        id: shortid.generate(),
        subject: 'Security alert for account',
        category: 'Service',
        assignee: 'Jose',
        priority: 'Low',
        status: 'Open',
        update: false,
      }, {
        id: shortid.generate(),
        subject: 'PHP 5.3 is not working',
        category: 'Dev',
        assignee: 'Luke',
        priority: 'High',
        status: 'Processing',
        update: false,
      }],
    });
  }

  // ADD: push item to tableItems
  handleAddItem(item) {
    const { tableItems } = this.state;
    tableItems.push(item);
    this.setState({
      tableItems,
    });
  }

  // Delete: find index by id, then delete it
  handleDeleteItem(id) {
    const { tableItems } = this.state;
    const index = tableItems.findIndex(x => x.id === id);
    tableItems.splice(index, 1);
    this.setState({
      tableItems,
    });
  }

  // Save: find item by id, then set it equal to new item
  handleSaveItem(item) {
    const id = item.id;
    const { tableItems } = this.state;
    const index = tableItems.findIndex(x => x.id === id);
    tableItems[index] = item;
    this.setState({
      tableItems,
    });
  }

  render() {
    const { tableHeads, tableItems } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="container">
          <AddForm addItem={this.handleAddItem} />
          <table className="table mt-5">
            <TableHeads tableHeads={tableHeads} />
            <TableItems
              tableItems={tableItems}
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

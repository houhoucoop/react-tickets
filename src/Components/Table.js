import React, { Component } from 'react';
import './Table.css';

// import Component
import TableHeads from './TableHeads';
import TableItems from './TableItems';

class Table extends Component {
  constructor(){
    super();
    this.state = {
      tableHeads: [],
      tableItems: []
    }
  }

  componentWillMount(){
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
        id: '1',
        category: 'Marketing',
        subject: 'A new rating has been received',
        assignee: 'Erwin',
        priority: 'Medium',
        status: 'Open'
      }, {
        id: '2',
        category: 'Billing',
        subject: 'Billed twice',
        assignee: 'Jessica',
        priority: 'High',
        status: 'Pending'
      }, {
        id: '3',
        category: 'Service',
        subject: 'Verify email address',
        assignee: 'George',
        priority: 'Normal',
        status: 'Closed'
      }, {
        id: '4',
        category: 'Service',
        subject: 'Security alert for account',
        assignee: 'Jose',
        priority: 'Low',
        status: 'Open'
      }, {
        id: '5',
        category: 'Dev',
        subject: 'PHP 5.3 is not working',
        assignee: 'Luke',
        priority: 'High',
        status: 'Processing'
      }]
    });
  }

  render() {
    return (
      <div className="Wrapper">
        <table className="App-table">
          <TableHeads tableHeads={this.state.tableHeads} />
          <TableItems tableItems={this.state.tableItems} />
        </table>
      </div>
    );
  }
}

export default Table;

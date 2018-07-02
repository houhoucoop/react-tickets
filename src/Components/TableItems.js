import React, { Component } from 'react';

// import Component
import TableItem from './TableItem';

class TableItems extends Component {

  constructor() {
    super();
    this.state = {
      tableItems: []
    }
  }

  deleteItem(id) {
    this.props.onDelete(id);
  }

  render() {
    let tableItems;
    tableItems = this.props.tableItems.map((tableItem, index) => {
      return (
        <TableItem key={index} tableItem={tableItem} onDelete={this.deleteItem.bind(this)} />
      );
    });

    return (
      <tbody>
        {tableItems}
      </tbody>
    );
  }
}

export default TableItems;

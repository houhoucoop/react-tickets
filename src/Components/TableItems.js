import React, { Component } from 'react';

// import Component
import TableItem from './TableItem';

class TableItems extends Component {
  render() {
    let tableItems;
    tableItems = this.props.tableItems.map((tableItem, index) => {
      return (
        <TableItem key={index} tableItem={tableItem}/>
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

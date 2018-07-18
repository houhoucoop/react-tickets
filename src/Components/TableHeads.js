import React, { Component } from 'react';

// import Component
import TableHead from './TableHead';

class TableHeads extends Component {
  render() {
    let tableHeads;
    tableHeads = this.props.tableHeads.map((tableHead, index) => {
      return (
        <TableHead key={index} tableHead={tableHead}/>
      );
    });
    return (
      <thead>
        <tr>
          {tableHeads}
        </tr>
      </thead>
    );
  }
}

export default TableHeads;

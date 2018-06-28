import React, { Component } from 'react';

class TableHead extends Component {
  render() {
    return (
      <th>{this.props.tableHead.name}</th>
    );
  }
}

export default TableHead;

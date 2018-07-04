import React, { Component } from 'react';

class TableHead extends Component {
  render() {
    return (
      <th className={this.props.tableHead.class}>
        {this.props.tableHead.name}
      </th>
    );
  }
}

export default TableHead;

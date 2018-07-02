import React, { Component } from 'react';

class TableItem extends Component {

  deleteItem(id) {
    this.props.onDelete(id);
  }

  render() {
    return (
      <tr>
        <td>{this.props.tableItem.id}</td>
        <td>{this.props.tableItem.category}</td>
        <td>{this.props.tableItem.subject}</td>
        <td>{this.props.tableItem.assignee}</td>
        <td>{this.props.tableItem.priority}</td>
        <td>{this.props.tableItem.status}</td>
        <td>
          <button onClick={this.deleteItem.bind(this, this.props.tableItem.id) }>Delete</button>
        </td>
      </tr>
    );
  }
}

export default TableItem;

import React, { Component } from 'react';

// import Component
import TableItem from './TableItem';

class TableItems extends Component {
  constructor() {
    super();

    this.deleteItem = this.deleteItem.bind(this);
    this.handleSaveItem = this.handleSaveItem.bind(this);
  }

  deleteItem(id) {
    const { onDelete } = this.props;
    onDelete(id);
  }

  handleSaveItem(item) {
    const { onSave } = this.props;
    onSave(item);
  }

  render() {
    const { tableItems } = this.props;
    const allTableItems = tableItems.map((tableItem, index) => {
      return (
        <TableItem
          key={index} 
          tableItem={tableItem}
          onDelete={this.deleteItem}
          saveItem={this.handleSaveItem}
        />
      );
    });

    return (
      <tbody>
        {allTableItems}
      </tbody>
    );
  }
}

export default TableItems;

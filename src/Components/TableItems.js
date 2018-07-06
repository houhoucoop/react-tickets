import PropTypes from 'prop-types';
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

    const allTableItems = tableItems.map(
      tableItem => <TableItem key={tableItem.id} tableItem={tableItem} onDelete={this.deleteItem} saveItem={this.handleSaveItem} />,
    );

    return (
      <tbody>
        {allTableItems}
      </tbody>
    );
  }
}

TableItems.propTypes = {
  tableItems: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
};
TableItems.defaultProps = {
  tableItems: {
    id: 'Hyq2-P3GQ',
    subject: 'A new rating has been received',
    category: 'Marketing',
    assignee: 'Erwin',
    priority: 'Medium',
    status: 'Open',
    update: false,
  },
  onDelete: (id) => {
    const { tableItems } = this.state;
    const index = tableItems.findIndex(x => x.id === id);
    tableItems.splice(index, 1);
    this.setState({
      tableItems,
    });
  },
  onSave: (item) => {
    const theId = item.id;
    const { tableItems } = this.state;
    const index = tableItems.findIndex(x => x.id === theId);
    tableItems[index] = item;
    this.setState({
      tableItems,
    });
  },
};

export default TableItems;

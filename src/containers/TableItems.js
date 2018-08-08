import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import TableItem from './TableItem';

class TableItems extends PureComponent {
  render() {
    const { tableItems, deleteItem, saveItem } = this.props;
    const allTableItems = tableItems.map(
      tableItem => (
        <TableItem
          key={tableItem.id}
          tableItem={tableItem}
          deleteItem={deleteItem}
          saveItem={saveItem}
        />
      ),
    );
    return (
      <tbody>
        {allTableItems}
      </tbody>
    );
  }
}

// props validation
TableItems.propTypes = {
  tableItems: PropTypes.arrayOf(PropTypes.object),
  deleteItem: PropTypes.func,
  saveItem: PropTypes.func,
};
TableItems.defaultProps = {
  tableItems: [{
    id: 'Hyq2-P3GQ',
    subject: 'A new rating has been received',
    category: 'Marketing',
    assignee: 'Erwin',
    priority: 'Medium',
    status: 'Open',
    update: false,
  }],
};

export default TableItems;

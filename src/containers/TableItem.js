import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableItem extends Component {
  // if status is closed, set text to gray color
  // if <tr> has been edited, add className 'update'
  static handleTrClass(update, status) {
    let trClassName;
    if (update) {
      trClassName = 'update';
      if (status === 'Closed') {
        trClassName = 'update closed';
      }
    }
    return trClassName;
  }

  constructor() {
    super();
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  // Delete: props tableItem.id
  handleDeleteItem() {
    const { tableItem, deleteItem } = this.props;
    const theId = tableItem.id;
    deleteItem(theId);
  }

  render() {
    const { tableItem } = this.props;
    // set badge color
    const priorityClass = classNames('badge badge-pill', {
      'badge-secondary': (tableItem.priority === 'Normal'),
      'badge-success': (tableItem.priority === 'Low'),
      'badge-warning': (tableItem.priority === 'Medium'),
      'badge-danger': (tableItem.priority === 'High'),
    });

    const statusClass = classNames('badge badge-pill', {
      'badge-primary': (tableItem.status === 'Open'),
      'badge-warning': (tableItem.status === 'Pending'),
      'badge-success': (tableItem.status === 'Processing'),
      'badge-light': (tableItem.status === 'Closed'),
    });

    return (
      <tr className={TableItem.handleTrClass(tableItem.update, tableItem.status)}>
        <td>
          <span>
            {tableItem.id}
          </span>
        </td>
        <td>
          <span>
            {tableItem.subject}
          </span>
        </td>
        <td>
          <span>
            {tableItem.category}
          </span>
        </td>
        <td>
          <span>
            {tableItem.assignee}
          </span>
        </td>
        <td>
          <span className={priorityClass}>
            {tableItem.priority}
          </span>
        </td>
        <td>
          <span className={statusClass}>
            {tableItem.status}
          </span>
        </td>
        <td>
          <Link
            to={
              {
                pathname: `/edit/${tableItem.id}`,
                state: {
                  id: tableItem.id,
                  subject: tableItem.subject,
                  category: tableItem.category,
                  assignee: tableItem.assignee,
                  priority: tableItem.priority,
                  status: tableItem.status,
                },
              }
            }
            className="btn btn-dark btn-sm mr-2 edit-btn"
          >
            Edit
          </Link>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm delete-btn"
            onClick={this.handleDeleteItem}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

// props validation
TableItem.propTypes = {
  tableItem: PropTypes.shape({
    id: PropTypes.string,
    subject: PropTypes.string,
    category: PropTypes.string,
    assignee: PropTypes.string,
    priority: PropTypes.string,
    status: PropTypes.string,
    update: PropTypes.bool,
  }),
  deleteItem: PropTypes.func,
};
TableItem.defaultProps = {
  tableItem: {
    id: 'Hyq2-P3GQ',
    subject: 'A new rating has been received',
    category: 'Marketing',
    assignee: 'Erwin',
    priority: 'Medium',
    status: 'Open',
    update: false,
  },
};
export default TableItem;

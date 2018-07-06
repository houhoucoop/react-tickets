import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { Component } from 'react';

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

  static optionGenerator(optionList) {
    return optionList.map(opt => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ));
  }

  constructor() {
    super();
    this.state = {
      savedItem: {},
      isEditing: false,
      categories: [],
      assignees: [],
      priorities: [],
      status: [],
    };

    this.editItem = this.editItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  // mount data before render
  componentWillMount() {
    const { tableItem } = this.props;
    this.setState({
      savedItem: tableItem,
      categories: ['Billing', 'Dev', 'Marketing', 'Service'],
      assignees: ['Erwin', 'Jessica', 'George', 'Jose', 'Luke'],
      priorities: ['Normal', 'Low', 'Medium', 'High'],
      status: ['Open', 'Pending', 'Processing', 'Closed'],
    });
  }

  // Edit: set savedItem to new tableItem
  editItem() {
    const { tableItem } = this.props;
    this.setState({
      savedItem: tableItem,
      isEditing: true,
    });
  }

  // get new value when editing
  handleChange() {
    const { savedItem } = this.state;
    this.setState({
      savedItem: {
        ...savedItem,
        category: this.category.value,
        subject: this.subject.value,
        assignee: this.assignee.value,
        priority: this.priority.value,
        status: this.status.value,
      },
    });
  }

  // Save: set update to true and props saveItem, then set is editing to false
  saveItem() {
    if (this.subject.value === '') {
      alert('Subject can\'t be empty');
    } else {
      const { savedItem } = this.state;
      this.setState({
        savedItem: {
          ...savedItem,
          update: true,
        },
      }, function sendProps() {
        const { savedItem } = this.state;
        const { saveItem } = this.props;
        saveItem(savedItem);
        this.setState({
          isEditing: false,
        });
      });
    }
  }

  // Cancel: reset saveItem to original props data
  cancelEdit() {
    const { tableItem } = this.props;
    this.setState({
      isEditing: false,
      savedItem: tableItem,
    });
  }

  // Delete: props tableItem.id
  deleteItem() {
    const { tableItem, onDelete } = this.props;
    const theId = tableItem.id;
    onDelete(theId);
  }

  render() {
    const {
      isEditing, savedItem, categories, assignees, priorities, status,
    } = this.state;
    // set badge color
    const priorityClass = classNames('badge badge-pill', {
      'badge-secondary': (savedItem.priority === 'Normal'),
      'badge-success': (savedItem.priority === 'Low'),
      'badge-warning': (savedItem.priority === 'Medium'),
      'badge-danger': (savedItem.priority === 'High'),
    });

    const statusClass = classNames('badge badge-pill', {
      'badge-primary': (savedItem.status === 'Open'),
      'badge-warning': (savedItem.status === 'Pending'),
      'badge-success': (savedItem.status === 'Processing'),
      'badge-light': (savedItem.status === 'Closed'),
    });

    if (isEditing) {
      return (
        <tr className={
          TableItem.handleTrClass(savedItem.update, savedItem.status)}
        >
          <td>
            <span>
              {savedItem.id}
            </span>
          </td>
          <td>
            <span>
              <textarea
                className="form-control"
                ref={(c) => { this.subject = c; }}
                value={savedItem.subject}
                onChange={this.handleChange}
              />
            </span>
          </td>
          <td>
            <span>
              <select
                className="form-control"
                ref={(c) => { this.category = c; }}
                value={savedItem.category}
                onChange={this.handleChange}
              >
                {TableItem.optionGenerator(categories)}
              </select>
            </span>
          </td>
          <td>
            <span>
              <select
                className="form-control"
                ref={(c) => { this.assignee = c; }}
                value={savedItem.assignee}
                onChange={this.handleChange}
              >
                {TableItem.optionGenerator(assignees)}
              </select>
            </span>
          </td>
          <td>
            <span>
              <select
                className="form-control"
                ref={(c) => { this.priority = c; }}
                value={savedItem.priority}
                onChange={this.handleChange}
              >
                {TableItem.optionGenerator(priorities)}
              </select>
            </span>
          </td>
          <td>
            <span>
              <select
                className="form-control"
                ref={(c) => { this.status = c; }}
                value={savedItem.status}
                onChange={this.handleChange}
              >
                {TableItem.optionGenerator(status)}
              </select>
            </span>
          </td>
          <td>
            <button
              type="button"
              className="btn btn btn-info btn-sm mr-2 save-btn"
              onClick={this.saveItem}
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-outline-dark btn-sm cancel-btn"
              onClick={this.cancelEdit}
            >
              Cancel
            </button>
          </td>
        </tr>
      );
    }
    return (
      <NormalContent
        savedItem={savedItem}
        priorityClass={priorityClass}
        statusClass={statusClass}
        editItem={this.editItem}
        deleteItem={this.deleteItem}
      />
    );
  }
}

function NormalContent(props) {
  const {
    savedItem, priorityClass, statusClass, editItem, deleteItem,
  } = props;
  return (
    <tr className={TableItem.handleTrClass(savedItem.update, savedItem.status)}>
      <td>
        <span>
          {savedItem.id}
        </span>
      </td>
      <td>
        <span>
          {savedItem.subject}
        </span>
      </td>
      <td>
        <span>
          {savedItem.category}
        </span>
      </td>
      <td>
        <span>
          {savedItem.assignee}
        </span>
      </td>
      <td>
        <span className={priorityClass}>
          {savedItem.priority}
        </span>
      </td>
      <td>
        <span className={statusClass}>
          {savedItem.status}
        </span>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-dark btn-sm mr-2 edit-btn"
          onClick={editItem}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm delete-btn"
          onClick={deleteItem}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

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
  onDelete: PropTypes.func,
  saveItem: PropTypes.func,
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
  onDelete: (id) => {
    const { tableItems } = this.state;
    const index = tableItems.findIndex(x => x.id === id);
    tableItems.splice(index, 1);
    this.setState({
      tableItems,
    });
  },
  saveItem: (item) => {
    const { onSave } = this.props;
    onSave(item);
  },
};

export default TableItem;

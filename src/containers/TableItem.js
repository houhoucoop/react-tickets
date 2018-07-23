import classNames from 'classnames';
import PropTypes from 'prop-types';
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
      subject: '',
      category: '',
      assignee: '',
      priority: '',
      status: '',
      savedItem: {},
      isEditing: false,
      categories: [],
      assignees: [],
      priorities: [],
      statusOpt: [],
    };

    this.editItem = this.editItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSaveItem = this.handleSaveItem.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  // mount data before render
  componentWillMount() {
    const { tableItem } = this.props;
    this.setState({
      subject: tableItem.subject,
      category: tableItem.category,
      assignee: tableItem.assignee,
      priority: tableItem.priority,
      status: tableItem.status,
      savedItem: tableItem,
      categories: ['Billing', 'Dev', 'Marketing', 'Service'],
      assignees: ['Erwin', 'Jessica', 'George', 'Jose', 'Luke'],
      priorities: ['Normal', 'Low', 'Medium', 'High'],
      statusOpt: ['Open', 'Pending', 'Processing', 'Closed'],
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
  handleChange(e) {
    const { savedItem } = this.state;
    const name = e.target.id;
    this.setState({
      [name]: e.target.value,
      savedItem: {
        ...savedItem,
        [name]: e.target.value,
      },
    });
  }

  // Save: set update to true and props saveItem, then set is editing to false
  handleSaveItem() {
    const { subject } = this.state;
    if (subject === '') {
      alert('Subject can\'t be empty');
    } else {
      const { saveItem } = this.props;
      const { savedItem } = this.state;
      this.setState({
        savedItem: {
          ...savedItem,
          update: true,
        },
        isEditing: false,
      });
      saveItem(savedItem);
    }
  }

  // Cancel: reset saveItem to original props data
  cancelEdit() {
    const { tableItem } = this.props;
    this.setState({
      subject: tableItem.subject,
      category: tableItem.category,
      assignee: tableItem.assignee,
      priority: tableItem.priority,
      status: tableItem.status,
      savedItem: tableItem,
      isEditing: false,
    });
  }

  // Delete: props tableItem.id
  handleDeleteItem() {
    const { tableItem, deleteItem } = this.props;
    const theId = tableItem.id;
    deleteItem(theId);
  }

  render() {
    const {
      subject, category, assignee, priority, status, isEditing, savedItem, categories, assignees, priorities, statusOpt,
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
        <tr className={TableItem.handleTrClass(savedItem.update, savedItem.status)}>
          <td>
            <span>
              {savedItem.id}
            </span>
          </td>
          <td>
            <span>
              <textarea
                className="form-control"
                id="subject"
                value={subject}
                onChange={this.handleChange}
              />
            </span>
          </td>
          <td>
            <span>
              <select
                className="form-control"
                id="category"
                value={category}
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
                id="assignee"
                value={assignee}
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
                id="priority"
                value={priority}
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
                id="status"
                value={status}
                onChange={this.handleChange}
              >
                {TableItem.optionGenerator(statusOpt)}
              </select>
            </span>
          </td>
          <td>
            <button
              type="button"
              className="btn btn btn-info btn-sm mr-2 save-btn"
              onClick={this.handleSaveItem}
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
        handleDeleteItem={this.handleDeleteItem}
      />
    );
  }
}

function NormalContent(props) {
  const {
    savedItem, priorityClass, statusClass, editItem, handleDeleteItem,
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
          onClick={handleDeleteItem}
        >
          Delete
        </button>
      </td>
    </tr>
  );
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
  deleteItem: () => {},
  saveItem: () => {},
};


NormalContent.propTypes = {
  savedItem: PropTypes.shape({
    id: PropTypes.string,
    subject: PropTypes.string,
    category: PropTypes.string,
    assignee: PropTypes.string,
    priority: PropTypes.string,
    status: PropTypes.string,
    update: PropTypes.bool,
  }),
  priorityClass: PropTypes.string,
  statusClass: PropTypes.string,
  editItem: PropTypes.func,
  handleDeleteItem: PropTypes.func,
};

NormalContent.defaultProps = {
  savedItem: {
    id: 'Hyq2-P3GQ',
    subject: 'A new rating has been received',
    category: 'Marketing',
    assignee: 'Erwin',
    priority: 'Medium',
    status: 'Open',
    update: false,
  },
  priorityClass: 'badge badge-pill badge-secondary',
  statusClass: 'badge badge-pill badge-primary',
  editItem: () => {},
  handleDeleteItem: () => {},
};

export default TableItem;

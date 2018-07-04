import React, { Component } from 'react';

class TableItem extends Component {

  constructor() {
    super();
    this.state = {
      saveItem: {},
      isEditing: false
    }
  }

  // mount data before render
  componentWillMount() {
    this.setState({
      saveItem: this.props.tableItem
    });
  }

  static defaultProps = {
    categories: ['Billing', 'Dev', 'Marketing', 'Service'],
    assignees: ['Erwin', 'Jessica', 'George', 'Jose', 'Luke'],
    priorities: ['Normal', 'Low', 'Medium', 'High'],
    status: ['Open', 'Pending', 'Processing', 'Closed']
  }
  
  // Edit: set saveItem to new tableItem
  editItem = () => {
    this.setState({
      saveItem: this.props.tableItem,
      isEditing: true
    })
  }

  // get new value when editing
  handleChange = () => {
    this.setState({
      saveItem: {
        ...this.state.saveItem,
        category: this.refs.category.value,
        subject: this.refs.subject.value,
        assignee: this.refs.assignee.value,
        priority: this.refs.priority.value,
        status: this.refs.status.value
      }
    });
  }

  // Save: set update to true and props saveItem, then set is editing to false
  saveItem = (item) => {
    if (this.refs.subject.value === '') {
      alert('Subject can\'t be empty');
    } else {
      this.setState({
        saveItem: {
          ...this.state.saveItem,
          update: true
        }
      }, function () {
        this.props.saveItem(this.state.saveItem);
        this.setState({
          isEditing: false
        })
      });
    }
  }

  // Cancel: reset saveItem to original props data
  cancelEdit = () => {
    this.setState({
      isEditing: false,
      saveItem: this.props.tableItem
    });
  }

  // Delete: props tableItem.id
  deleteItem = (id) => {
    id = this.props.tableItem.id;
    this.props.onDelete(id);
  }

  // styling: set different badge color
  handlePriorityColor(priority) {
    if (priority === 'Low') {
      return 'badge badge-pill badge-success'
    } else if (priority === 'Medium') {
      return 'badge badge-pill badge-warning'
    } else if (priority === "High") {
      return 'badge badge-pill badge-danger'
    } else {
      return 'badge badge-pill badge-secondary'
    }
  }

  // styling: set different badge color
  handleStatusColor(status) {
    if (status === 'Pending') {
      return 'badge badge-pill badge-warning'
    } else if (status === 'Processing') {
      return 'badge badge-pill badge-success'
    } else if (status === "Closed") {
      return 'badge badge-pill badge-light'
    } else {
      return 'badge badge-pill badge-primary'
    }
  }

  // if status is closed, set text to gray color
  // if <tr> has been edited, add className 'update'
  handleTrClass(update, status) {
    if (status === "Closed") {
      return 'closed'
    }
    if (update) {
      return 'update'
    }
  }

  render() {
    const categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>{category}</option>
      );
    });
    const assigneeOptions = this.props.assignees.map(assignee => {
      return (
        <option key={assignee} value={assignee}>{assignee}</option>
      );
    });
    const priorityOptions = this.props.priorities.map(priority => {
      return (
        <option key={priority} value={priority}>{priority}</option>
      );
    });
    const statusOptions = this.props.status.map(status => {
      return (
        <option key={status} value={status}>{status}</option>
      );
    });


    if (this.state.isEditing) {
      return (
        <tr className = {
          this.handleTrClass(this.props.tableItem.update, this.props.tableItem.status)
        }>
          <td>
            <span>
              {this.props.tableItem.id}
            </span>
          </td>
          <td>
            <span>
              <textarea
                className="form-control"
                ref="subject"
                value={this.state.saveItem.subject}
                onChange={this.handleChange} >
              </textarea>
            </span>
          </td>
          <td>
            <span>
              <select
                className="form-control"
                ref="category"
                value={this.state.saveItem.category}
                onChange={this.handleChange} >
                {categoryOptions}
              </select>
            </span>
          </td>
          <td>
            <span>
              <select
                className="form-control"
                ref="assignee"
                value={this.state.saveItem.assignee}
                onChange={this.handleChange} >
                {assigneeOptions}
              </select>
            </span>
          </td>
          <td>
            <span>
              <select
                className="form-control"
                ref="priority"
                value={this.state.saveItem.priority}
                onChange={this.handleChange} >
                {priorityOptions}
              </select>
            </span>
          </td>
          <td>
            <span>
              <select
                className="form-control"
                ref="status"
                value={this.state.saveItem.status}
                onChange={this.handleChange} >
                {statusOptions}
              </select>
            </span>
          </td>
          <td>
            <button 
              className="btn btn btn-info btn-sm mr-2" 
              onClick={this.saveItem}>
              Save
            </button>
            <button 
              className="btn btn-outline-dark btn-sm" 
              onClick={this.cancelEdit}>
              Cancel
            </button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr className = {
          this.handleTrClass(this.props.tableItem.update, this.props.tableItem.status)
        }>
          <td>
            <span>
              {this.props.tableItem.id}
            </span>
          </td>
          <td>
            <span>
              {this.props.tableItem.subject}
            </span>
          </td>
          <td>
            <span>
              {this.props.tableItem.category}
            </span>
          </td>
          <td>
            <span>
              {this.props.tableItem.assignee}
            </span>
          </td>
          <td>
            <span className={this.handlePriorityColor(this.props.tableItem.priority)}>
              {this.props.tableItem.priority}
            </span>
          </td>
          <td>
            <span className={this.handleStatusColor(this.props.tableItem.status)}>
              {this.props.tableItem.status}
            </span>
          </td>
          <td>
            <button 
              className="btn btn-dark btn-sm mr-2" 
              onClick={this.editItem}>
              Edit
            </button>
            <button 
              className="btn btn-outline-danger btn-sm" 
              onClick={this.deleteItem}>
              Delete
            </button>
          </td>
        </tr>
      );
    }
  }
}

export default TableItem;

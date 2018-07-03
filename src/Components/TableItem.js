import React, { Component } from 'react';

class TableItem extends Component {

  constructor() {
    super();
    this.state = {
      saveItem: {},
      isEditing: false
    }
    
    this.editItem = this.editItem.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this)
  }

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

  editItem() {
    this.setState({ 
      saveItem: this.props.tableItem,
      isEditing: true 
    })
  }

  handleChange() {
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
  
  saveItem(item) {
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

  cancelEdit() {
    this.setState({
      isEditing: false,
      saveItem: this.props.tableItem
    });
  }

  deleteItem(id) {
    this.props.onDelete(id);
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>{category}</option>
      );
    });
    let assigneeOptions = this.props.assignees.map(assignee => {
      return (
        <option key={assignee} value={assignee}>{assignee}</option>
      );
    });
    let priorityOptions = this.props.priorities.map(priority => {
      return (
        <option key={priority} value={priority}>{priority}</option>
      );
    });
    let statusOptions = this.props.status.map(status => {
      return (
        <option key={status} value={status}>{status}</option>
      );
    });
    if (this.state.isEditing) {
      return (
        <tr className={this.props.tableItem.update ? 'update' : ''}>
          <td>
            <span>
              {this.props.tableItem.id}
            </span>
          </td>
          <td>
            <span>
              <select
                ref="category"
                value={this.state.saveItem.category}
                onChange={this.handleChange} >
                {categoryOptions}
              </select>
            </span>
          </td>
          <td>
            <span>
              <textarea
                rows="3"
                cols="20"
                ref="subject"
                value={this.state.saveItem.subject}
                onChange={this.handleChange} >
              </textarea>
            </span>
          </td>
          <td>
            <span>
              <select
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
                ref="status"
                value={this.state.saveItem.status}
                onChange={this.handleChange} >
                {statusOptions}
              </select>
            </span>
          </td>
          <td>
            <button onClick={this.saveItem}>Save</button>
            <button onClick={this.cancelEdit}>Cancel</button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr className={this.props.tableItem.update ? 'update' : ''}>
          <td>
            <span>
              {this.props.tableItem.id}
            </span>
          </td>
          <td>
            <span>
              {this.props.tableItem.category}
            </span>
          </td>
          <td>
            <span>
              {this.props.tableItem.subject}
            </span>
          </td>
          <td>
            <span>
              {this.props.tableItem.assignee}
            </span>
          </td>
          <td>
            <span>
              {this.props.tableItem.priority}
            </span>
          </td>
          <td>
            <span>
              {this.props.tableItem.status}
              {this.props.tableItem.update}
            </span>
          </td>
          <td>
            <button onClick={this.editItem}>Edit</button>
            <button onClick={this.deleteItem.bind(this, this.props.tableItem.id)}>Delete</button>
          </td>
        </tr>
      );
    }
  }
}

export default TableItem;

import React, { Component } from 'react';
import uuid from 'uuid';

class AddForm extends Component {
  constructor() {
    super();
    this.state = {
      addItem: {}
    }
  }

  static defaultProps = {
    categories: ['Billing', 'Dev', 'Marketing', 'Service'],
    assignees: ['Erwin', 'Jessica', 'George', 'Jose', 'Luke'],
    priorities: ['Normal', 'Low', 'Medium', 'High']
  }

  handleSubmit(e){
    if (this.refs.subject.value === '') {
      alert('Subject can\'t be empty' );
    } else {
      this.setState({
        addItem: {
          id: uuid.v4(),
          category: this.refs.category.value,
          subject: this.refs.subject.value,
          assignee: this.refs.assignee.value,
          priority: this.refs.priority.value,
          status: 'Open'
        }
      }, function () {
        this.props.addItem(this.state.addItem);
      });
    }
    e.preventDefault();
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
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <fieldset>
            <label>Category</label>
            <select ref="category">
              {categoryOptions}
            </select>
          </fieldset>
          <fieldset>
            <label>Subject</label>
            <input type="text" ref="subject"/>
          </fieldset>
          <fieldset>
            <label>Assignee</label>
            <select ref="assignee">
              {assigneeOptions}
            </select>
          </fieldset>
          <fieldset>
            <label>Priority</label>
            <select ref="priority">
              {priorityOptions}
            </select>
          </fieldset>
          <input type="submit" value="Add Ticket"/>
        </form>
      </div>
    );
  }
}

export default AddForm;

import React, { Component } from 'react';
import shortid from 'shortid';

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

  // if form submit, props addItem and reset the form
  handleSubmit = (e) => {
    if (this.refs.subject.value === '') {
      alert('Subject can\'t be empty' );
    } else {
      this.setState({
        addItem: {
          id: shortid.generate(),
          category: this.refs.category.value,
          subject: this.refs.subject.value,
          assignee: this.refs.assignee.value,
          priority: this.refs.priority.value,
          status: 'Open',
          update: false
        }
      }, function () {
        this.props.addItem(this.state.addItem);
        document.getElementById('close-btn').click();
        this.formReset();
      });
    }
    e.preventDefault();
  }

  // form rest
  formReset = () => {
    this.refs.subject.value = '';
    this.refs.category.value = 'Billing';
    this.refs.assignee.value = 'Erwin';
    this.refs.priority.value = 'Normal';
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
    return (
      <div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ticket Info</h5>
                <button type="button" className="close" id="close-btn" data-dismiss="modal" aria-label="Close" onClick={this.formReset}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <textarea 
                      className="form-control" 
                      id="subject" 
                      rows="3"
                      ref="subject">
                    </textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select 
                      className="form-control" 
                      id="category"
                      ref="category">
                      {categoryOptions}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="assignee">Assignee</label>
                    <select 
                      className="form-control" 
                      id="assignee"
                      ref="assignee">
                      {assigneeOptions}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="priority">Priority</label>
                    <select
                      className="form-control" 
                      id="priority"
                      ref="priority">
                      {priorityOptions}
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <input type="submit" className="btn btn-info" value="Save"/>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default AddForm;

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import * as actions from '../actions';

class EditForm extends Component {
  //  the method doesn’t use this, so make it a static method
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
      id: '',
      subject: '',
      category: '',
      assignee: '',
      priority: '',
      status: '',
      categories: [],
      assignees: [],
      priorities: [],
      statusOpt: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSaveItem = this.handleSaveItem.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  // mount data before render
  componentWillMount() {
    const { location } = this.props;
    const {
      id, subject, category, assignee, priority, status,
    } = location.state;
    this.setState({
      id,
      subject,
      category,
      assignee,
      priority,
      status,
      categories: ['Billing', 'Dev', 'Marketing', 'Service'],
      assignees: ['Erwin', 'Jessica', 'George', 'Jose', 'Luke'],
      priorities: ['Normal', 'Low', 'Medium', 'High'],
      statusOpt: ['Open', 'Pending', 'Processing', 'Closed'],
    });
  }

  handleChange(e) {
    const name = e.target.id;
    this.setState({
      [name]: e.target.value,
    });
  }

  // Save: set update to true and props saveItem, then set is editing to false
  handleSaveItem(e) {
    const { subject } = this.state;
    if (subject === '') {
      alert('Subject can\'t be empty');
    } else {
      const { actionsConnect } = this.props;
      const {
        id, category, assignee, priority, status,
      } = this.state;
      const savedItem = {
        id,
        subject,
        category,
        assignee,
        priority,
        status,
        update: true,
      };
      actionsConnect.saveItem(savedItem);
    }
    e.preventDefault();
  }

  // Cancel: reset saveItem to original props data
  cancelEdit() {
    const { location } = this.props;
    const {
      subject, category, assignee, priority, status,
    } = location.state;
    this.setState({
      subject,
      category,
      assignee,
      priority,
      status,
    });
  }

  render() {
    const {
      id,
      subject,
      category,
      assignee,
      priority,
      status,
      categories,
      assignees,
      priorities,
      statusOpt,
    } = this.state;
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSaveItem}>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="item-id">
                Id
              </label>
              <input
                className="form-control"
                id="item-id"
                value={id}
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">
                Subject
              </label>
              <textarea
                className="form-control"
                id="subject"
                rows="3"
                value={subject}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">
                Category
              </label>
              <select
                className="form-control"
                id="category"
                value={category}
                onChange={this.handleChange}
              >
                {EditForm.optionGenerator(categories)}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="assignee">
                Assignee
              </label>
              <select
                className="form-control"
                id="assignee"
                value={assignee}
                onChange={this.handleChange}
              >
                {EditForm.optionGenerator(assignees)}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="priority">
                Priority
              </label>
              <select
                className="form-control"
                id="priority"
                value={priority}
                onChange={this.handleChange}
              >
                {EditForm.optionGenerator(priorities)}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="status">
                Status
              </label>
              <select
                className="form-control"
                id="status"
                value={status}
                onChange={this.handleChange}
              >
                {EditForm.optionGenerator(statusOpt)}
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-dark btn-sm"
              onClick={this.cancelEdit}
            >
              Cancel
            </button>
            <input type="submit" className="btn btn-info btn-sm" value="Save" />
          </div>
        </form>
      </div>
    );
  }
}

// props validation
EditForm.propTypes = {
  actionsConnect: PropTypes.shape({
    actionsConnect: PropTypes.func,
  }),
};

const mapDispatchToProps = dispatch => ({
  actionsConnect: bindActionCreators(actions, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(EditForm);

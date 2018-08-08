import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import shortid from 'shortid';
import { addItem } from '../actions';

export class AddForm extends Component {
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
      subject: '',
      category: 'Billing',
      assignee: 'Erwin',
      priority: 'Normal',
      categories: [],
      assignees: [],
      priorities: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formReset = this.formReset.bind(this);
  }

  componentWillMount() {
    this.setState({
      categories: ['Billing', 'Dev', 'Marketing', 'Service'],
      assignees: ['Erwin', 'Jessica', 'George', 'Jose', 'Luke'],
      priorities: ['Normal', 'Low', 'Medium', 'High'],
    });
  }

  handleChange(e) {
    const name = e.target.id;
    this.setState({
      [name]: e.target.value,
    });
  }

  // if form submit, props addItem and reset the form
  handleSubmit(e) {
    const {
      subject, category, assignee, priority,
    } = this.state;
    if (subject === '') {
      alert('Subject can\'t be empty');
    } else {
      const { addItemConnect } = this.props;
      const item = {
        id: shortid.generate(),
        subject,
        category,
        assignee,
        priority,
        status: 'Open',
        update: false,
      };
      addItemConnect(item);
      this.formReset();
    }
    e.preventDefault();
  }

  // close modal and rest the form
  formReset() {
    this.setState({
      subject: '',
      category: 'Billing',
      assignee: 'Erwin',
      priority: 'Normal',
    });
  }

  render() {
    const {
      subject, category, assignee, priority, categories, assignees, priorities,
    } = this.state;
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSubmit}>
          <div className="modal-body">
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
                {AddForm.optionGenerator(categories)}
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
                {AddForm.optionGenerator(assignees)}
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
                {AddForm.optionGenerator(priorities)}
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <input type="submit" className="btn btn-info" value="Save" />
          </div>
        </form>
      </div>
    );
  }
}

// props validation
AddForm.propTypes = {
  addItemConnect: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  addItemConnect: bindActionCreators(addItem, dispatch),
});

// export default AddForm;
export default connect(
  null,
  mapDispatchToProps,
)(AddForm);

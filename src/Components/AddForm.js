import './AddForm.css';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import shortid from 'shortid';

// action
import { addItem } from '../actions';

class AddForm extends Component {
  //  the method doesn’t use this, so make it a static method
  static showModal() {
    const modal = document.getElementById('myModal');
    modal.classList.add('show');
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
      categories: [],
      assignees: [],
      priorities: [],
    };

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

  // if form submit, props addItem and reset the form
  handleSubmit(e) {
    if (this.subject.value === '') {
      alert('Subject can\'t be empty');
    } else {
      const { addItem } = this.props;
      const item = {
        id: shortid.generate(),
        subject: this.subject.value,
        category: this.category.value,
        assignee: this.assignee.value,
        priority: this.priority.value,
        status: 'Open',
        update: false,
      };
      addItem(item);
      this.formReset();
    }
    e.preventDefault();
  }

  // close modal and rest the form
  formReset() {
    const modal = document.getElementById('myModal');
    modal.classList.remove('show');
    this.subject.value = '';
    this.category.value = 'Billing';
    this.assignee.value = 'Erwin';
    this.priority.value = 'Normal';
  }

  render() {
    const { categories, assignees, priorities } = this.state;
    return (
      <div className="mt-3">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={AddForm.showModal}
        >
          Add Ticket
        </button>
        <div className="modal fade" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Ticket Info
                </h5>
                <button type="button" className="close" id="close-btn" onClick={this.formReset}>
                  <span aria-hidden="true">
                    &times;
                  </span>
                </button>
              </div>
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
                      ref={(x) => { this.subject = x; }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">
                      Category
                    </label>
                    <select
                      className="form-control"
                      id="category"
                      ref={(x) => { this.category = x; }}
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
                      ref={(x) => { this.assignee = x; }}
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
                      ref={(x) => { this.priority = x; }}
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
          </div>
        </div>

      </div>
    );
  }
}

// props validation
AddForm.propTypes = {
  addItem: PropTypes.func,
};
AddForm.defaultProps = {
  addItem: item => ({
    type: 'ADD_ITEM',
    item,
  }),
};

const mapDispatcgToProps = dispatch => ({
  addItem: bindActionCreators(addItem, dispatch),
});

// export default AddForm;
export default connect(null, mapDispatcgToProps)(AddForm);

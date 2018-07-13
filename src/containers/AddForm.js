import PropTypes from 'prop-types';
import React, { Component } from 'react';
import shortid from 'shortid';
import './AddForm.css';

class AddForm extends Component {
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
      isOpen: false,
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
    this.showModal = this.showModal.bind(this);
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
      const { fetchItem, addItem } = this.props;
      const item = {
        id: shortid.generate(),
        subject,
        category,
        assignee,
        priority,
        status: 'Open',
        update: false,
      };
      addItem(item);
      fetchItem();
      this.formReset();
    }
    e.preventDefault();
  }

  // close modal and rest the form
  formReset() {
    const modal = document.getElementById('myModal');
    modal.classList.remove('show');
    this.setState({
      isOpen: false,
      subject: '',
      category: 'Billing',
      assignee: 'Erwin',
      priority: 'Normal',
    });
  }

  showModal() {
    this.setState({
      isOpen: true,
    });
  }

  render() {
    const {
      isOpen, subject, category, assignee, priority, categories, assignees, priorities,
    } = this.state;
    return (
      <div className="mt-3">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={this.showModal}
        >
          Add Ticket
        </button>
        <div className={`modal fade ${isOpen ? 'show' : 'hide'}`} id="myModal">
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
  addItem: () => {},
};

export default AddForm;

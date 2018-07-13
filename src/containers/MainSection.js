import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import TableHeads from '../components/TableHeads';
import heads from '../staticData';
import AddForm from './AddForm';
import TableItems from './TableItems';

export class MainSection extends Component {
  constructor() {
    super();
    this.state = {
      tableHeads: [],
    };
  }

  // mount data before render
  componentWillMount() {
    const { actionsConnect } = this.props;
    this.setState({
      tableHeads: heads,
    });
    actionsConnect.fetchItem();
  }

  render() {
    const { tableHeads } = this.state;
    const { tableItems, actionsConnect } = this.props;
    return (
      <div className="container">
        <AddForm fetchItem={actionsConnect.fetchItem} addItem={actionsConnect.addItem} />
        <table className="table mt-5">
          <TableHeads tableHeads={tableHeads} />
          <TableItems
            tableItems={tableItems}
            fetchItem={actionsConnect.fetchItem}
            deleteItem={actionsConnect.deleteItem}
            saveItem={actionsConnect.saveItem}
          />
        </table>
      </div>
    );
  }
}

// props validation
MainSection.propTypes = {
  tableItems: PropTypes.arrayOf(PropTypes.object),
  actionsConnect: PropTypes.shape({
    addItem: PropTypes.func,
    deleteItem: PropTypes.func,
    saveItem: PropTypes.func,
  }),
};
MainSection.defaultProps = {
  tableItems: [{
    id: 'Hyq2-P3GQ',
    subject: 'A new rating has been received',
    category: 'Marketing',
    assignee: 'Erwin',
    priority: 'Medium',
    status: 'Open',
    update: false,
  }],
  actionsConnect: {
    addItem: () => {},
    deleteItem: () => {},
    saveItem: () => {},
  },
};

const mapStateToProps = state => ({
  tableItems: state.tableItems,
});

const mapDispatchToProps = dispatch => ({
  actionsConnect: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainSection);

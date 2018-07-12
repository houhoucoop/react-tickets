import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import Component
import TableItem from './TableItem';

export class TableItems extends PureComponent {
  render() {
    const { tableItems } = this.props;
    const allTableItems = tableItems.map(
      tableItem => <TableItem key={tableItem.id} tableItem={tableItem} />,
    );
    return (
      <tbody>
        {allTableItems}
      </tbody>
    );
  }
}

// props validation
TableItems.propTypes = {
  tableItems: PropTypes.arrayOf(PropTypes.object),
};
TableItems.defaultProps = {
  tableItems: {
    id: 'Hyq2-P3GQ',
    subject: 'A new rating has been received',
    category: 'Marketing',
    assignee: 'Erwin',
    priority: 'Medium',
    status: 'Open',
    update: false,
  },
};

const mapStateToProps = state => ({
  tableItems: state.tableItems,
});
export default connect(mapStateToProps)(TableItems);

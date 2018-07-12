import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
// import Component
import TableHead from './TableHead';

class TableHeads extends PureComponent {
  render() {
    const { tableHeads } = this.props;
    const tableHeadList = tableHeads.map(
      tableHead => <TableHead key={tableHead.id} tableHead={tableHead} />,
    );
    return (
      <thead>
        <tr>
          { tableHeadList }
        </tr>
      </thead>
    );
  }
}

// props validation
TableHeads.propTypes = {
  tableHeads: PropTypes.arrayOf(PropTypes.object),
};
TableHeads.defaultProps = {
  tableHeads: [{
    id: '1',
    name: 'ID',
    class: 'w-12',
  }, {
    id: '2',
    name: 'Subject',
    class: 'w-25',
  }, {
    id: '3',
    name: 'Category',
    class: 'w-12',
  }, {
    id: '4',
    name: 'Assignee',
    class: 'w-10',
  }, {
    id: '5',
    name: 'Priority',
    class: 'w-10',
  }, {
    id: '6',
    name: 'Status',
    class: 'w-12',
  }, {
    id: '7',
    name: 'Action',
    class: 'w-19',
  }],
};

export default TableHeads;

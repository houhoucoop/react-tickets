import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableHead extends PureComponent {
  render() {
    const { tableHead } = this.props;
    return (
      <th className={tableHead.class}>
        {tableHead.name}
      </th>
    );
  }
}

// props validation
TableHead.propTypes = {
  tableHead: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    class: PropTypes.string,
  }),
};
TableHead.defaultProps = {
  tableHead: {
    id: '1',
    name: 'ID',
    class: 'w-12',
  },
};

export default TableHead;

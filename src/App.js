import React, { Component } from 'react';
import { heads, items } from './fakeData';

// import Component
import Header from './Components/Header';
import TableHeads from './Components/TableHeads';
import TableItems from './Components/TableItems';
import AddForm from './Components/AddForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tableHeads: [],
      tableItems: [],
    };

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleSaveItem = this.handleSaveItem.bind(this);
  }

  // mount data before render
  componentWillMount() {
    this.setState({
      tableHeads: heads,
      tableItems: items,
    });
  }

  // ADD: push item to tableItems
  handleAddItem(item) {
    const { tableItems } = this.state;
    tableItems.push(item);
    this.setState({
      tableItems,
    });
  }

  // Delete: find index by id, then delete it
  handleDeleteItem(id) {
    const { tableItems } = this.state;
    const index = tableItems.findIndex(x => x.id === id);
    tableItems.splice(index, 1);
    this.setState({
      tableItems,
    });
  }

  // Save: find item by id, then set it equal to new item
  handleSaveItem(item) {
    const theId = item.id;
    const { tableItems } = this.state;
    const index = tableItems.findIndex(x => x.id === theId);
    tableItems[index] = item;
    this.setState({
      tableItems,
    });
  }

  render() {
    const { tableHeads, tableItems } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="container">
          <AddForm addItem={this.handleAddItem} />
          <table className="table mt-5">
            <TableHeads tableHeads={tableHeads} />
            <TableItems
              tableItems={tableItems}
              onDelete={this.handleDeleteItem}
              onSave={this.handleSaveItem}
            />
          </table>
        </div>
      </div>
    );
  }
}

export default App;

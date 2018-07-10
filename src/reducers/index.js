export default (state, action) => {
  // console.log(action);
  // console.log(state);

  switch (action.type) {
    case 'ADD_ITEM':
      return {
        tableItems: [...state.tableItems, action.item],
      };
    case 'DELETE_ITEM':
      return {
        tableItems: [...state.tableItems.filter(item => item.id !== action.id)],
      };
    case 'SAVE_ITEM':
      return {
        tableItems: [...state.tableItems.map((item) => {
          if (item.id !== action.item.id) {
            return item;
          }
          return {
            ...item,
            ...action.item,
          };
        })],
      };

    default:
      return state;
  }
};
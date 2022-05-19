import { createSlice } from "@reduxjs/toolkit";

const calTotalPrice = (listItem) => {
  return listItem.reduce(
    (preValue, item) => preValue + item.amount * item.price,
    0
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
    listItem: [],
    totalPrice: 0,
  },
  reducers: {
    closeCart: (state) => {
      state.isOpen = false;
    },
    openCart: (state) => {
      state.isOpen = true;
    },
    setListItem: (state, action) => {
      return {
        ...state,
        listItem: action.payload,
        totalPrice: calTotalPrice(action.payload),
      };
    },
    addItem: (state, action) => {
      const addItemId = action.payload.id;
      let checkExistItem = false;

      let newListItem = state.listItem.map((item) => {
        if (item.id === addItemId) {
          checkExistItem = true;
          return { ...item, amount: item.amount + 1 };
        }

        return item;
      });
      console.log(checkExistItem);
      if (!checkExistItem)
        newListItem = [...state.listItem, { ...action.payload, amount: 1 }];

      return {
        ...state,
        listItem: newListItem,
        totalPrice: calTotalPrice(newListItem),
      };
    },
    subtractItem: (state, action) => {
      const subItemId = action.payload.id;
      let checkRemoveItem = false;
      let indexRemoveItem = -1;

      let newListItem = state.listItem.map((item, index) => {
        if (item.id === subItemId) {
          if (item.amount === 1) {
            checkRemoveItem = true;
            indexRemoveItem = index;
          }
          return { ...item, amount: item.amount - 1 };
        }

        return item;
      });

      if (checkRemoveItem) newListItem.splice(indexRemoveItem, 1);

      return {
        ...state,
        listItem: newListItem,
        totalPrice: calTotalPrice(newListItem),
      };
    },
    removeItem: (state, action) => {
      const removeItemId = action.payload.id;
      const newListItem = state.listItem.filter(
        (item) => item.id !== removeItemId
      );

      return {
        ...state,
        listItem: newListItem,
        totalPrice: calTotalPrice(newListItem),
      };
    },
  },
});

const { reducer, actions } = cartSlice;
export const {
  closeCart,
  openCart,
  setListItem,
  addItem,
  subtractItem,
  removeItem,
} = actions;
export default reducer;

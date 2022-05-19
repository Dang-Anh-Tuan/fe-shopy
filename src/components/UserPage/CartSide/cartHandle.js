import { addItem, closeCart, removeItem, subtractItem } from "../../../slices/cartSlice";

export const handleCloseCartSide = (dispatch) => {
  const action = closeCart();
  dispatch(action);
};

export const handleAddItem = (item, dispatch) => {
  const action = addItem(item);
  dispatch(action);

  // Call API update list cart
};

export const handleSubtractItem = (item, dispatch) => {
  const action = subtractItem(item);
  dispatch(action);

  // Call API update list cart
};

export const handleRemoveItem = (item, dispatch) => {
  const action = removeItem(item);
  dispatch(action);

  // Call API update list cart
};
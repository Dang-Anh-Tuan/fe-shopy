import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAddItem,
  handleRemoveItem,
  handleSubtractItem
} from "../../CartSide/cartHandle";
import CartItem from "../../CartSide/CartItem";

function ListCart() {
  const { listItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(listItem);
  return (
    <div>
      {listItem &&
        listItem.map((item, index) => (
          <CartItem
            key={item.id}
            cartItem={item}
            dispatch={dispatch}
            handleAddItem={handleAddItem}
            handleSubtractItem={handleSubtractItem}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
    </div>
  );
}

export default ListCart;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  return (
    <div className="cartIcon" onClick={() => dispatch(cartActions.setShowCart())}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;

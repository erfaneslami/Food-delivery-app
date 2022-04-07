import { useContext } from "react";
import CartContext from "../../../Store/cart-context";

import Modal from "../../UI/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const addAmountHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeAmountHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          amount={item.amount}
          name={item.name}
          onAdd={addAmountHandler.bind(null, item)}
          onRemove={removeAmountHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onCloseModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseModal}>
          Close
        </button>

        {cartCtx.items.length > 0 && (
          <button className={classes.button} onClick={props.onOrder}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;

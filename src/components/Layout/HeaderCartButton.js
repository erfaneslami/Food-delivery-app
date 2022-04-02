import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);

  const numberOfCartItems = cartCtx.items.reduce((sumOfItems, item) => {
    return (sumOfItems += item.amount);
  }, 0);

  const btnClasses = `${classes.button} ${isBtnHighlighted && classes.bump}`;

  useEffect(() => {
    if (cartCtx.items.length > 0) setIsBtnHighlighted(true);

    const timer = setTimeout(() => {
      setIsBtnHighlighted(false);
    }, 300);

    return () => clearInterval(timer);
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

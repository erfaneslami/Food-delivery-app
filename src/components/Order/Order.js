import { useState } from "react";
import Checkout from "./Cart/Checkout";
import Cart from "./Cart/Cart";

const Order = (props) => {
  // const [cartIsShown, setCartIsShown] = useState(false);
  const [checkoutIsShown, setCheckoutIsShown] = useState(false);

  const showCheckout = () => {
    setCheckoutIsShown(true);
    props.onHideModal();
    // hideModalHandler();
  };

  const hideCheckoutHandler = () => {
    setCheckoutIsShown(false);
    props.onShowCart();
    // setCartIsShown(true);
  };

  return (
    <>
      {checkoutIsShown && <Checkout onCancel={hideCheckoutHandler} />}
      {props.cartIsShown && (
        <Cart onCloseModal={props.onHideModal} onOrder={showCheckout} />
      )}
    </>
  );
};

export default Order;

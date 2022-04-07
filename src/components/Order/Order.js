import { useContext, useState } from "react";
import Checkout from "./Cart/Checkout";
import Cart from "./Cart/Cart";
import CartContext from "../../Store/cart-context";
import Modal from "../UI/Modal";

const Order = (props) => {
  const cartCtx = useContext(CartContext);
  const [checkoutIsShown, setCheckoutIsShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [submit, setSubmit] = useState(false);

  const showCheckout = () => {
    setCheckoutIsShown(true);
  };

  const hideCheckoutHandler = () => {
    setCheckoutIsShown(false);
  };

  const sendOrder = async (user) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://foodordering-api-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({ user: user, order: cartCtx.items }),
        }
      );

      if (!response.ok)
        throw Error(` Something went wrong code : ${response.status}`);

      setIsLoading(false);
      cartCtx.reset();
      setSubmit(true);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  if (submit) {
    return (
      <Modal onClose={props.onHideModal}>
        <p>Success !</p>
      </Modal>
    );
  }

  return (
    <>
      {isLoading && (
        <Modal>
          <p>loading...</p>
        </Modal>
      )}
      {error && (
        <Modal nClose={props.onHideModal}>
          <p>{error}</p>
        </Modal>
      )}

      {checkoutIsShown && (
        <Checkout
          onCancel={hideCheckoutHandler}
          onGetUserData={sendOrder}
          onCloseModal={props.onHideModal}
        />
      )}

      <Cart onCloseModal={props.onHideModal} onOrder={showCheckout} />
    </>
  );
};

export default Order;

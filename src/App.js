import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [checkoutIsShown, setCheckoutIsShown] = useState(false);

  const showModalHandler = () => {
    setCartIsShown(true);
  };

  const hideModalHandler = () => {
    setCartIsShown(false);
  };

  const showCheckout = () => {
    setCheckoutIsShown(true);
    hideModalHandler();
  };

  return (
    <CartProvider>
      {checkoutIsShown && <Checkout />}
      {cartIsShown && (
        <Cart onCloseModal={hideModalHandler} onOrder={showCheckout} />
      )}
      <Header onShowCart={showModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

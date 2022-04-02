import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showModalHandler = () => {
    setCartIsShown(true);
  };

  const hideModalHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseModal={hideModalHandler} />}
      <Header onShowCart={showModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

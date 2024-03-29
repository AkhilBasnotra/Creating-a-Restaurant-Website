import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Card from "./components/UI/Card";
import { useState, Fragment } from "react";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart />}
      <Header onShowCartHandler={showCartHandler} />

      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;

import { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Layout/header';
import Menu from './components/Menu/menu';
import Cart from './components/Cart/cart';

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
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Menu />
      </main>
    </Fragment>
  );
}

export default App;

import { Fragment } from 'react';
import './App.css';
import Header from './components/Layout/header';
import Menu from './components/Menu/menu';
import Cart from './components/Cart/cart';

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Menu />
      </main>
    </Fragment>
  );
}

export default App;

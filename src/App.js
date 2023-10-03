import { Fragment } from 'react';
import './App.css';
import Header from './components/Layout/header';
import Menu from './components/Menu/menu';

function App() {
  return (
    <Fragment>
     <Header />
     <main>
      <Menu />
     </main>
    </Fragment>
  );
}

export default App;

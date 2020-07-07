import React from 'react';
import AppNavbar from './components/AppNavbar';
import ShopplingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
  <Provider store ={ store}>
    <div className="App">
      <AppNavbar/>
      <Container>
        <ItemModal/>
        <ShopplingList/>
      </Container>
    </div>
  </Provider>
  );
}

export default App;

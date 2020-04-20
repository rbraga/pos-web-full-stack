import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { ProductsList } from './views/Products';
import { Product } from './views/Product';
import { Provider } from 'react-redux';
import { Store } from './store';

function App() {
  return (
    <Provider store={Store} >
      <div id="main-app">
        <h1>Amazing Store</h1>
        <BrowserRouter>
          <Route exact path="/" component={ProductsList} />
          <Route path="/product/:id" component={Product} />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { ProductsList } from './views/Products';

function App() {
  return (
    <div id="main-app">\
      <h1>Amazing Store</h1>
      <BrowserRouter>
        <Route exact path="/" component={ProductsList}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

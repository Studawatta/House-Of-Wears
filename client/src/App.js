import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/main/Main';
import './App.css';
import FilteredProducts from './components/filteredProducts/FilteredProducts';
import SingleProduct from './components/filteredProducts/SingleProduct';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Main />}
          />
          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts />}
          />
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

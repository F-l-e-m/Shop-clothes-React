import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';

import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
  );
}

export default App;

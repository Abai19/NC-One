import React, {CSSProperties, useEffect, useState} from 'react';

import {createGlobalState} from 'react-hooks-global-state'

import {Routes , Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import ProductList from "./components/ProductsList/ProductList";


function App() {
  return (
    <Routes>
            <Route   path="/" element={<Layout/>}>
                <Route index path="/" element={<ProductList/>}/>
                <Route path="/product/:id" element={<SingleProduct/>}/>
            </Route>



    </Routes>
  );
}

export default App;

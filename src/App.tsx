import React, {CSSProperties, useEffect, useState} from 'react';

import {createGlobalState  } from 'react-hooks-global-state'

import {Routes , Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import ProductList from "./components/ProductsList/ProductList";

export  interface Props {
    arr: Item[],
    fav: Item[]
}
export interface Item {
    id: number;
    price: number;
    name: string;
    src: string
}
const initialState: Props = { arr: [], fav:[] };
const { useGlobalState } = createGlobalState(initialState);

function App() {
    const [data, setData] = useGlobalState('arr');
    const [fav, setFav] = useGlobalState('fav');
    useEffect(()=>{
        fetch('https://testbackend.nc-one.com/image')
            .then(response => response.json())
            .then(data=> setData(data))
    },[])
  return (

    <Routes>
            <Route   path="/" element={<Layout/>}>
                <Route index path="/" element={<ProductList/>}/>
                <Route path="/product/:id" element={<SingleProduct/>}/>
            </Route>
    </Routes>

  );

}
export {useGlobalState}
export default App;

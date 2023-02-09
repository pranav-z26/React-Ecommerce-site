// import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header.js";
import {Cart} from "./Cart.js";
import Product from "./Product.js";

function App() {
  const [user, setUser] = useState([]);
  const [newArray, setArray] = useState([]);

  // var xyzarr=[];
  const handleArrayChange = newArray => {
    setArray(newArray);
    // xyzarr=[...xyzarr,...newArray]
    console.log("newArray", newArray)
  };

  const fetchData = () => {
    //   return fetch("https://jsonplaceholder.typicode.com/users")
    return fetch("https://fakerapi.it/api/v1/products?_quantity=100&_taxes=12&_categories_type=uuid")
      .then((response) => response.json())
      .then((data) => setUser(data.data));
  }

  useEffect(() => {
    fetchData();
    // console.log(user);
  }, [])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/' element={
            <div className="App">
              <div className="product_rows">
                {user.map((myproduct, index) => (
                  <Product key={index} myproduct={myproduct} handleArrayChange={handleArrayChange}/>
                ))}
              </div>
            </div>} />

          <Route path='/cart' element={<Cart newArray={newArray}/>} />

          {/* <Route path='/cart' element={<>{xyzarr.map((newArray) => (
                  <Cart newArray={newArray} />
                ))}</>} /> */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

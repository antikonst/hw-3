import React, { useEffect, useState } from "react";

import { Navbar } from "@components/Navbar";
import { ProductContext } from "@context/context";
import { AboutUs } from "@pages/AboutUs";
import { Categories } from "@pages/Categories";
import { Products } from "@pages/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.module.scss";

function App() {
  const [productState, setProductState] = useState(true);
  const [idProd, setIdProd] = useState(1);
  const [relatedI, setRelatedI] = useState([]);

  const toggleProduct = () => {
    setProductState((all) => !all);
  };

  return (
    <ProductContext.Provider
      value={{
        productState,
        setProductState,
        toggleProduct,
        idProd,
        setIdProd,
        relatedI,
        setRelatedI,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  );
}

export default App;

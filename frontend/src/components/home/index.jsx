import React, { useEffect } from "react";
import Navbar from "../common/navbar/index";
import Footer from "../common/Footer";
// import Newsletter from "../common/Newsletter";
import Hero from "./hero";
import ProductList from "./ProductList";
import Banners from './Banners'
const HomeIndex = ({ products }) => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
     
      <Hero products={products} />
      <div className="w-[90%] md:w-[70%] mx-auto max-w-custom flex flex-col relative">
        <ProductList products={products} />
        <Banners />
        <Footer />
      </div>
    </div>
  );
};

export default HomeIndex;

import React from "react";
import Navbar from "../common/navbar/index";
import ProductRecommendation from "./ProductRecommendation";
import Footer from "../common/Footer";
export default function JournalIndex() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(319deg, #fff1eb, #ace0f9)"
      }}
      className="w-full"
    >
      <Navbar />
      <div className="pt-40">
        <div className="w-[90%] md:w-[70%] mx-auto max-w-custom flex flex-col relative">
          <ProductRecommendation />
          <Footer />
        </div>
      </div>
    </div>
  );
}

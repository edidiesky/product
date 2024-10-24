// import React from "react";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { productData } from "../../data/product";
import ProductCard from "../common/ProductCard";

const ProductList = ({ products }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  return (
    <div className="w-full">
      <div className="w-[100%] flex items-start flex-col h-full gap-8 justify-between max-w-custom mx-auto">
        <div ref={containerRef} className="w-full">
          {products?.slice(0, 3)?.map((data, index) => {
            const targetScale = 1 - (products?.length - 1) * 0.009;
            return (
              <ProductCard
                progress={scrollYProgress}
                targetScale={targetScale}
                range={[index * 0.25, 1]}
                data={data}
                index={index}
                key={`p_${index}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

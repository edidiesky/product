import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import Link from "next/link";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Image from "../common/Image";
import Curtain from "../../animations/Curatin";

const ProductCard = ({ data, index, progress, targetScale, range }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);
  return (
    <div className="w-full h-screen sticky top-0 left-0 flex items-center justify-center">
      <motion.div
        ref={containerRef}
        style={{
          // scale: cardScale,
          color: `${data?.color}`,
          top: `calc(15vh + ${index * 100}px) `,
        }}
        className="flex flex-col object-cover h-[700px] border-2 overflow-hidden border-[rgb(255,255,255)] lg:h-[700px] gap-4 relative rounded-t-[40px] w-full"
      >
        {data?.backgroundImage ? (
          <div className="absolute w-full h-full">
            <Image
              src={data?.backgroundImage}
              alt=""
              className="absolute z-10 object-cover w-full h-full"
            />
          </div>
        ) : (
          <div className="w-full p-16 bg-[#000] h-full">
            <Link to={`/products`} className="text-3xl text-white">
              See All Product
              {/* <Biar */}
            </Link>
          </div>
        )}
        <div className="w-full z-40 h-full absolute bg-[rgba(0,0,0,.2)]"></div>
        <div className="w-full h-full z-[60] pt-20 justify-center relative flex">
          <Link
            style={{ scale }}
            className="flex flex-col items-center justify-center bg-[#fff] h-[400px] w-[400px] rounded-[50%] z-20 gap-4"
            to={`/product/${data?.title}`}
          >
            <div className="flex flex-col justify-center items-center gap-1">
              <h4 className="text-3xl font-bold">{data?.title}</h4>
              <span className="text-sm text-grey capitalize family1">
                <span className="line-through"> $ 3.99 USD</span>$ 2.99 USD
              </span>
            </div>
            <div className="w-32">
              <Image src={data?.image} className="w-full object-cover" alt="" />
            </div>
            <button
              style={{
                backgroundColor: `${data?.background}`,
                transition: "all 1s",
              }}
              className="h-16 w-40 hover:text-white rounded-full uppercase family2 text-base md:text-base font-black"
            >
              <Curtain bgColor={"#000"}>View Product</Curtain>
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductCard;

import React, { useState, useEffect } from "react";
import Curtain from "../../animations/Curatin";
import { styled } from "styled-components";
import Image from "../common/Image";
import { Link } from "react-router-dom";
const Hero = ({ products }) => {
  const [tab, setTab] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setTab(tab === 2 ? 1 : tab + 1);
    }, 6000);
    return () => clearTimeout(interval);
  }, [setTab, tab]);
  // console.log(direction);
  // console.log(products)
  return (
    <div
      
      className="w-full overflow-hidden"
    >
      <div
        style={{
          gridTemplateColumns: "repeat(3, 100%)",
        }}
        className="min-h-[900px] w-full grid relative"
      >
        {products?.slice(0, 3).map((data, index) => {
          return (
            <div
              key={index}
              style={{
                transform: `translateX(-${tab === 0 ? 0 : tab * 100}%)`,
                transition: "all 1.5s var(--transition)",
              }}
              className="w-full"
            >
              <ProductHeroStyles
                style={{
                  background: `${data?.heroBgColor}`,
                }}
                className="flex w-[100%] pt-20 h-full relative justify-center items-center"
              >
                <div
                  key={index}
                  className="hero_wrapper max-w-custom mx-auto flex h-full py-4 w-full relative justify-center items-center gap-4 flex-col"
                >
                  <h1 className="w-[100%] z-20 text-7xl md:text-9xl family2 uppercase font-black text text-center text-white">
                    {data?.subtitle}
                  </h1>
                  <h3
                    // style={{ fontWeight: "300" }}
                    style={{ color: `${data?.heroColor}` }}
                    className="text-2xl z-20 font-normal text-center w-[80%] max-w-[600px] mx-auto"
                  >
                    {data?.description}
                  </h3>
                  <Link
                    to={`/product/${data?.id}`}
                    style={{
                      transition: "all 1.5s var(--transition)",
                      background: `${data?.heroColor}`,
                    }}
                    className="h-20 w-52 text-white rounded-full uppercase family2 text-lg md:text-xl font-black"
                  >
                    <Curtain bgColor={"#000"}>View Product</Curtain>
                  </Link>
                  <div className="image image_2">
                    <Image src={data?.images[2]} alt="" />
                  </div>
                  <div className="image image_3">
                    <Image src={data?.images[0]} alt="" />
                  </div>
                  <div className="image image_1">
                    <Image src={data?.images[1]} alt="" />
                  </div>
                </div>
              </ProductHeroStyles>
            </div>
          );
        })}
        <div className="absolute w-full z-40 flex items-center justify-center bottom-20 left-0">
          <div className="flex items-center justify-center  gap-2">
            {Array(3)
              ?.fill("")
              ?.map((data, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => setTab(index)}
                    className={`w-2 cursor-pointer ${
                      tab === index ? "bg-[#000]" : "bg-[#9d9999]"
                    } h-2 rounded-full`}
                  ></div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const ProductHeroStyles = styled.div`
  background-color: inherit;
  position: relative;
  .image {
    position: absolute;
    width: 13rem;
    height: 13rem;
    z-index: 1;
    &.image_1 {
      width: 55%;
      object-fit: cover;
      left: 400px;
      bottom: 40px;
      width: 14rem;
      height: 14rem;
      @media (max-width: 780px) {
        width: 12rem;
        height: 12rem;
        bottom: 40%;
        left: 0%;
      }
    }
    &.image_2 {
      right: 200px;
      top: 10%;
      width: 14rem;
      height: 14rem;
      z-index: 50 !important;
      @media (max-width: 780px) {
        width: 12rem;
        height: 12rem;
        bottom: 40%;
        right: 0%;
      }
    }
    &.image_3 {
      left: 200px;
      top: 180px;
      width: 10rem;
      /* height: 10rem; */
      z-index: 50 !important;
      @media (max-width: 780px) {
        left: 10%;
        width: 7rem;
        height: 7rem;
      }
    }
  }
  h3 {
    width: 75%;
    @media (max-width: 780px) {
      width: 95%;
      font-size: 24px;
    }
  }
  .hero_wrapper {
    position: relative;
  }
  .hero_info {
    z-index: 10;
    width: 70%;
    padding: 2rem 0;
  }
  .image_wrappers {
    width: 40%;
    @media (max-width: 780px) {
      width: 90%;
    }
  }
`;

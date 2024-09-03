import React, { useState, useEffect } from "react";
import Curtain from "../../animations/Curatin";
import { styled } from "styled-components";
import Image from "../common/Image";
const Hero = ({ products }) => {
  const [tab, setTab] = useState(1);

  useEffect(() => {
    const interval = setTimeout(() => {
      setTab(tab === 2 ? 0 : tab + 1);
    }, 4000);
    return () => clearTimeout(interval);
  }, [setTab, tab]);
  const direction = tab * 100;
  // console.log(direction);
  return (
    <div className="w-full overflow-hidden">
      <div
        style={{
          gridTemplateColumns: "repeat(3, 100%)",
        }}
        className="min-h-[500px] grid relative"
      >
        {products?.slice(0, 3).map((data, index) => {
          return (
            <ProductHeroStyles
              key={index}
              style={{
                transform: `translateX(-${direction}%)`,
                transition: "all 1.5s cubic-bezier(0.77, 0, 0.175, 1)",
              }}
              className="flex w-[100%] h-full relative justify-center items-center"
            >
              <div className="hero_wrapper max-w-custom mx-auto flex h-full py-4 w-full relative justify-center items-center gap-4 flex-col">
                <h1 className="w-[100%] z-20 text-7xl md:text-9xl family2 uppercase font-black text text-center text-white">
                  {data?.title} For Everyday
                </h1>
                <h3
                  // style={{ fontWeight: "300" }}
                  style={{ color: `${data?.color}` }}
                  className="text-2xl z-20 font-normal text-center w-[80%] max-w-[600px] mx-auto"
                >
                  {data?.description}
                </h3>
                <button
                  style={{
                    transition: "all 1.5s cubic-bezier(0.77, 0, 0.175, 1)",
                    background: `${data?.background}`,
                  }}
                  className="h-20 w-52 text-white rounded-full uppercase family2 text-lg md:text-xl font-black"
                >
                  <Curtain bgColor={"#000"}>View Product</Curtain>
                </button>
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
          );
        })}
        <div className="absolute w-full z-40 flex items-center justify-center bottom-3 left-0">
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
      bottom: -10px;
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
      right: 40px;
      top: 5%;
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

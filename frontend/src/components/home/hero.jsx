import React from "react";
import Button from "../common/Button";
import { styled } from "styled-components";
import Image from "../common/Image";
const Hero = ({ products }) => {
  return (
    <div className="w-full overflow-hidden">
      <div
        style={{
          gridTemplateColumns: "repeat(4, 1000px)",
        }}
        className="w-full min-h-[300px] grid items-center"
      >
        {products?.slice(0, 4).map((data, index) => {
          return (
            <ProductHeroStyles
              key={index}
              className="flex w-[100%] h-full relative justify-center items-center"
            >
              <div className="hero_wrapper flex h-full py-40 w-full justify-center items-center gap-24 flex-col">
                <h1 className="w-[85%] mx-auto family2 uppercase text text-center text-white">
                  {data?.title}
                </h1>
                <div className="hero_info mx-auto flex flex-col gap-12">
                  <div className="image_wrappers flex mx-auto flex-col justify-center items-center">
                    <div className="image_1">
                      <Image src={data?.images[0]} alt="" />
                    </div>
                  </div>
                  <div className="image image_2">
                    <Image src={data?.images[2]} alt="" />
                  </div>
                  <div className="image image_3">
                    <Image
                      src={data?.images[2]}
                      alt=""
                      className="image image_3"
                    />
                  </div>

                  <h3
                    // style={{ fontWeight: "300" }}
                    style={{ color: `${data?.color}` }}
                    className="text-2xl font-normal text-center w-[80%] max-w-[600px] mx-auto"
                  >
                    {data?.description}
                  </h3>
                </div>
              </div>
            </ProductHeroStyles>
          );
        })}
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
    &.image_2 {
      right: 10%;
      bottom: 30%;
      width: 24rem;
      height: 24rem;
      @media (max-width: 780px) {
        width: 12rem;
        height: 12rem;
        bottom: 40%;
        right: 0%;
      }
    }
    &.image_3 {
      left: 25%;
      top: 10%;
      width: 10rem;
      height: 10rem;
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
    .image_1 {
      width: 55%;
      object-fit: cover;
    }
  }

  h1 {
    width: 70%;
    font-size: 9rem;
    line-height: 0.9;
    z-index: 3;
    font-weight: 800;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 6%;

    @media (max-width: 980px) {
      font-size: 5rem;
      width: 80%;
    }
  }
`;

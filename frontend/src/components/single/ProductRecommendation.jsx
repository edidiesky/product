import React from "react";
import { styled } from "styled-components";
import Image from "../common/Image";
const recommendData = [
  {
    image:
      "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2c2f94d2e067c112a50fab_lime-p-500.png",
    text: "Key Slime",
    price: 40.1,
  },
  {
    image:
      "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2c2e658c2b172ab3b7acbd_peach-p-500.png",
    text: "Coconut",
    price: 40.1,
  },
];

const ProductRecommendation = ({ data, Products }) => {
  const recommendedData = Products?.filter(
    (product) => product?.id !== data?.id
  );
  // console.log(recommendedData);
  return (
    <ProductrecommendationStyles className="flex mx-auto justify-center item-center">
      <div className="Productrecommendation_wrapper w-[85%] mx-auto gap-12 flex flex-col">
        <h3
          style={{ color: "rgb(189, 189, 189)" }}
          className="uppercase text-center text-4xl md:text-6xl font-black family2"
        >
          MORE PRODUCTS WE RECOMMEND FOR YOU
        </h3>
        <div className="w-[85%] grid justify-center item-center mx-auto wrapper">
          {recommendedData?.slice(0, 2)?.map((x, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-4 item-center justify-center recommendCard"
              >
                <h3 className="text-xl md:text-3xl family3 text-center">
                  {x.title}
                  <span className="text-lg family1 block">${x.price}</span>
                </h3>
                <div className="w-[40%] mx-auto md:w-[50%] image_wrappers">
                  <Image src={x.images[0]} alt="" className="w-full" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ProductrecommendationStyles>
  );
};

const ProductrecommendationStyles = styled.div`
  width: 100%;
  position: relative;
  background-color: #fff;
  padding-top: 10rem;
  z-index: 30;
  .recommendCard {
    h3 {
      transform: translateY(50%);
      transition: all 0.3s ease;
      @media (max-width: 780px) {
        transform: translateY(0%);
      }
    }
    .image_wrappers {
      overflow: hidden;
      margin-top: 1rem;

      img {
        transform: translateY(30%);
        transition: all 0.3s ease;
        @media (max-width: 780px) {
          transform: translateY(0%);
        }
      }
    }
    &:hover {
      h3 {
        transform: translateY(0%);
      }
      .image_wrappers img {
        transform: translateY(0%);
      }
    }
  }

  .wrapper {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
    width: 80%;
  }
  .Productrecommendation_wrapper {
    width: 80%;
    overflow: hidden;
  }
`;

export default ProductRecommendation;

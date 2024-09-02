import React from "react";
import { styled } from "styled-components";
import Image from "../common/Image";
import { IoMdStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { productData } from "../../data/product";

const ProductRecommendation = ({ products }) => {
  // console.log(products);
  return (
    <ProductrecommendationStyles
      style={{ gap: ".2rem" }}
      className="flex w-full flex-col mx-auto justify-center item-center"
    >
      <div className="w-full bg-white px-8 md:px-32 py-32 max-w-custom mx-auto gap-32 flex flex-col">
        <h2 className="uppercase md:text-9xl text-6xl underline font-black text-start w-full mx-auto family2">
          GIFT BETTER
        </h2>
        {/* product list */}
        <div className="w-full flex flex-col gap-1">
          <div className="w-full flex items-center gap-2">
            <div className="flex items-center text-xs gap-2 family1 px-4 py-3 bg-[#eee]">
              <div className="w-2 h-2 rounded-full bg-[#000]"></div>
              Newest
            </div>
            <div className="flex items-center text-xs gap-2 family1 px-4 py-3 bg-[#eee]">
              <div className="w-2 h-2 rounded-full bg-[#000]"></div>
              Oldest
            </div>
          </div>
          <div className="w-full py-2 grid mx-auto gap-4 md:grid-cols-2">
            {productData.map((x, index) => {
              return (
                <ProductCard
                  backgroundColor={x.backgroundcolor}
                  className="flex w-full group item-center justify-center"
                  key={index}
                >
                  <div className="product_card_wrapper gap-4 mx-auto flex flex-col">
                    <div
                      className="flex header flex-col"
                      style={{ gap: ".5rem" }}
                    >
                      <h3
                        style={{ fontSize: "26px", color: `${x.color}` }}
                        color={x.color}
                        className=" family3 text-center"
                      >
                        {x.title}
                      </h3>
                      <h5 className="fs-14 text-light family3 text-center">
                        ${x.price} USD
                      </h5>
                    </div>
                    <div className=" md:w-[200px] min-h-[200px] mx-auto">
                      <div
                        style={{ transition: "all .6s" }}
                        className="w-full group-hover:translate-y-0 translate-y-24"
                      >
                        <Image src={x.image} alt="" />
                      </div>
                    </div>
                  </div>
                </ProductCard>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full bg-white  mx-auto py-24 gap-4 flex flex-col">
        <div className="w-[95%] md:w-[75%] py-2 mx-auto grid md:grid-cols-2 ">
          <div
            style={{ background: "#F5F5F5", padding: "5rem 0" }}
            className="flex item-center justify-center flex-col gap-4"
          >
            <div className="w-[95%] left px-4 mx-auto flex justify-center flex-col gap-4">
              <span className="block family1 font-bold text-xs ">
                IN THE GIVING MOOD?
              </span>
              <h3
                style={{
                  fontSize: "24px",
                  lineHeight: "1.4",
                }}
                className="fs-24 w-85 mx-auto text-dark"
              >
                Give them the gift of better. They'll thank you. We promise
              </h3>
              <h4
                style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                }}
                className="fs-16 w-85 mx-auto family1"
              >
                PS. Select "Make it a gift" at checkout to have it wrapped up
                with all the love.
              </h4>
            </div>
          </div>
          <div className="flex">
            <Image
              src="https://assets.website-files.com/5d820ccf1097dd2dccadc680/5e286bc83a68325fe189b150_dose-juice-KNU61gmh3fE-unsplash.jpg"
              alt=""
              className="w-100 h-100"
            />
          </div>
        </div>
      </div>
      <div className="min-h-[700px] relative w-85 mx-auto gap-4 flex flex-col">
        <div className="absolute w-full h-full">
          <Image
            src="https://assets.website-files.com/5d820ccf1097dd2dccadc680/5e2c2870ba7fff0f20992bfd_oriol-portell-AbwqpFnBDms-unsplash-(1).jpg"
            alt=""
            className=""
          />
        </div>
        <div
          style={{ zIndex: "40" }}
          className="w-[90%] md:w-[70%] py-40 grid mx-auto md:grid-cols-2"
        >
          <div className="flex item-center justify-center flex-col gap-4"></div>
          <div className="flex">
            <div
              style={{ background: "#F5F5F5", padding: "8rem 0" }}
              className="flex item-center justify-center flex-col gap-4"
            >
              <div className="w-[85%] left mx-auto flex item-center justify-center flex-col gap-4">
                <div className="flex text-base items-center ">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                </div>
                <h3
                  style={{
                    fontWeight: "300",
                    fontSize: "24px",
                    lineHeight: "1.4",
                  }}
                  className="fs-24 w-85 mx-auto text-dark"
                >
                  Great bubbles make for a great bath!
                </h3>
                <h4
                  style={{
                    fontWeight: "300",
                    fontSize: "14px",
                    lineHeight: "1.8",
                  }}
                  className="fs-16 w-85 mx-auto family3"
                >
                  I read several people say this doesn't bubble. I added a good
                  2+ tbsp to my tub and noticed it didn't really bubble a lot
                  under the running water. But boy oh boy did I get bubbles when
                  I turned
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductrecommendationStyles>
  );
};

const ProductCard = styled.div`
  position: relative;
  padding: 2rem 0;
  background-color: ${(props) => props.backgroundColor || "white"};
  /* Add more styles for the card here */
  .product_card_wrapper {
    z-index: 30;
    width: 60%;
    overflow: hidden;
    .header {
      h3 {
        font-weight: 500;
        color: ${(props) => props.color};
      }
    }

    .image_wrappers {
      width: 90%;
      position: relative;
      transform: translateY(40%);
      transition: all 0.4s ease;
      img {
        width: 100%;
      }
    }
  }
  &:hover {
    h3 {
      transform: translateY(0%);
    }
    .image_wrappers {
      transform: translateY(0%);
    }
  }
`;

const ProductrecommendationStyles = styled.div`
  position: relative;
  .left {
    width: 60%;
    @media (max-width: 780px) {
      width: 90%;
    }
  }

  .recommendCard {
    h3 {
      transform: translateY(50%);
      transition: all 0.3s ease;
      @media (max-width: 780px) {
        transform: translateY(0%);
      }
    }
    .image_wrappers {
      width: 55%;
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
  .Product_center,
  .Productrecommendation_wrapper {
    padding: 5rem 0;
    /* background-color: #Fff; */
  }
  .wrapper_1 {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.2rem;
    /* width:80%; */
    max-width: 1480px;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
    }
  }

  h2,
  .wrapper {
    /* width:70% !important; */
  }

  .wrapper {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.2rem;

    max-width: 1480px;
    @media (max-width: 780px) {
      grid-template-columns: repeat(mx-auto-fit, minmax(200px, 1fr));
    }
  }
`;

export default ProductRecommendation;

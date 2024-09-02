import React from "react";
import { styled } from "styled-components";
import Curtain from "../../animations/Curatin";
import { useDispatch, useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { onCartModal } from "../../features/modals/modalSlice";
import Image from "../common/Image";

const ProductInformation = ({ data }) => {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <ProductInformationStyles>
      <div className="product_info_top px-4 py-20 flex items-center justify-center flex-col gap-12">
        <h3 className="text-4xl text-center md:text-5xl family2 text-white">
          Milkfat 0% • Protein 11g • Calories 110 • Calcium 15% DV
        </h3>
        <form className="flex mx-auto h-[70px] md:h-[80px] w-[600px] items-center">
          <input type="number" className="family2" placeholder="1" />
          <div
            // type="submit"
            onClick={() => dispatch(onCartModal())}
            className="form_btn flex items-center justify-center text-white text-xl uppercase family2"
          >
            <Curtain> Add to Cart</Curtain>
          </div>
        </form>
      </div>
      <div className="product_info_center">
        <div className="w-[90%] mx-auto pb-20 gap-12 md:grid-cols-custom grid">
          <div className="flex flex-col gap-3">
            <h5 className="text-xl family1 font-bold uppercase">Nutrition</h5>
            <h3 className="text-base md:text-lg family1 text-light">
              Made with milk from cows not treated with rBST* Excellent source
              of protein Includes live & active cultures, and three types of
              probiotics No modified cornstarch or high fructose corn syrup Less
              than 5% lactose—a perfect part of a very low lactose diet
              Naturally low in sodium Contains live and active cultures: S.
              Thermophilus, L. Bulgaricus, L. Acidophilus, Bifidus and L. Casei
            </h3>
          </div>
          <div className="flex md:w-[300px] flex-col gap-3">
            <h5 className="text-xl family1 font-bold uppercase">Ingredients</h5>
            <h3 className="text-base md:text-lg family1 text-light">
              Made with milk from cows not treated with rBST* Excellent source
              of protein Includes live & active cultures, and three types of
              probiotics No modified cornstarch or high fructose corn syrup Less
              than 5% lactose—a perfect part of a very low lactose diet
              Naturally low in sodium Contains live and active cultures: S.
              Thermophilus, L. Bulgaricus, L. Acidophilus, Bifidus and L. Casei
            </h3>
          </div>
        </div>
        <div className="w-full gap-12 items-center justify-space grid md:grid-cols-2">
          <div className="w-full">
            <Image
              src="https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e284d1e01aae121dc9106f4_clear-glass-wine-cup-close-up-photography-2549275-p-800.jpeg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="w-full">
            <Image
              className="w-full"
              src="https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e284dda1210d18422233a50_dose-juice-PuoE_Bp5B6k-unsplash-p-800.jpeg"
            />
          </div>
        </div>
      </div>
    </ProductInformationStyles>
  );
};

const ProductInformationStyles = styled.div`
  width: 100%;
  position: relative;
  .product_info_center {
    padding-top: 7rem;
    background-color: #fff;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    .wrapper_bottom {
      grid-template-columns: 1fr 1fr;
      grid-gap: 4rem;
      place-items: center;
      display: grid;
      @media (max-width: 980px) {
        grid-template-columns: repeat(mx-auto-fit, minmax(200px, 1fr));
      }
    }
    .wrapper {
      grid-template-columns: 1fr 0.5fr;
      grid-gap: 3rem;
      place-items: start;
      display: grid;
      width: 80%;
      @media (max-width: 980px) {
        grid-template-columns: repeat(mx-auto-fit, minmax(200px, 1fr));
      }
    }
  }
  .product_info_top {
    background-color: #8d6e63;
    form {
      border-radius: 50px;
      background-color: #fff;
      width: 300px;
      .form_btn {
        /* padding: 0 2rem; */
        height: 100%;
        background: #3898ec;
        border-radius: 50px;
        width: 60%;
      }
      input {
        background-color: #fff;
        border: none;
        outline: none;
        height: 100%;
        padding: 0 1rem;
        width: 40%;
        font-size: 18px;
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
      }
    }
  }
`;

export default ProductInformation;

import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Curtain from "../../animations/Curatin";
import { useDispatch, useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { onCartModal, onLoginModal } from "../../slices/modalSlice";
import Image from "../common/Image";
import toast from "react-hot-toast";
import { addToCart } from "@/slices/cartSlice";

const ProductInformation = ({ data }) => {
  const { cart } = useSelector((store) => store.cart);
  const { currentUser } = useSelector((store) => store.auth);
  const [quantity, setQuantity] = useState(1);
  const [cartalert, setCartAlert] = useState(null);
  const dispatch = useDispatch();
  const isProductAvailable = quantity <= data?.availabilityCount ? true : false;
  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!currentUser) {
      dispatch(onLoginModal());
    } else {
      dispatch(addToCart({ quantity: Number(quantity), ...data }));
      // console.log({ quantity: Number(quantity), ...data });
      setCartAlert(false);
      const interval = setTimeout(() => {
        setCartAlert(true);
      }, 3000);
      return () => clearTimeout(interval);
    }
  };
  useEffect(() => {
    if (cartalert) {
      toast.success("Product added to Cart");
      dispatch(onCartModal());
    }
  }, [cartalert]);
  return (
    <ProductInformationStyles>
      <div className="product_info_top px-4 py-20 flex items-center justify-center flex-col gap-12">
        <h3 className="text-4xl text-center md:text-5xl family2 text-white">
          {data?.shortInfo}
        </h3>
        <form className="flex mx-auto h-[70px] md:h-[80px] w-[600px] items-center">
          <input
            name="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="family2"
            placeholder="1"
          />
          <button
            type="submit"
            disabled={!isProductAvailable}
            onClick={handleAddToCart}
            className="form_btn flex items-center justify-center text-white text-xl uppercase family2"
          >
            <Curtain>
              {cartalert === false ? "Adding to Cart ..." : "Add to Cart"}
            </Curtain>
          </button>
        </form>
      </div>
      <div className="product_info_center">
        <div className="w-[90%] md:w-[70%] mx-auto pb-20 gap-12 md:grid-cols-custom grid">
          <div className="flex flex-col gap-3">
            <h5 className="text-xl family1 font-bold uppercase">Nutrition</h5>
            <h3 className="text-xl md:text-2xl leading-[1.5] font-light family3">
              {data?.nutrientInfo}{" "}
            </h3>
          </div>
          <div className="flex md:w-[300px] flex-col gap-3">
            <h5 className="text-xl family1 font-bold uppercase">Ingredients</h5>
            <h3 className="text-xl md:text-2xl leading-[1.5] font-light family3">
              {data?.ingredients}{" "}
            </h3>
          </div>
        </div>
        <div className="w-full gap-12 items-center justify-space grid md:grid-cols-2">
          <div className="w-full">
            <Image
              src={data?.images && data?.images[4]}
              alt=""
              className="w-full"
            />
          </div>
          <div className="w-full">
            <Image className="w-full" src={data?.images && data?.images[3]} />
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

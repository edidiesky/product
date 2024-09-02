import { motion } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import Image from "../common/Image";
import { offCartModal } from "../../slices/modalSlice";
import { slideLeft } from "@/utils/framer";

export default function CartSidebar() {
  const { cartmodal } = useSelector((store) => store.modal);
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <motion.div
      initial="initial"
      animate={cartmodal ? "enter" : "exit"}
      exit={"exit"}
      variants={slideLeft}
      className="w-full fixed top-0 z-[20000] right-0 h-[100vh]"
    >
      <div
        onClick={() => dispatch(offCartModal())}
        className="absolute w-full h-full z-10 bg-[rgba(0,0,0,.6)]"
      ></div>
      <div className="w-[90%] md:w-[450px] z-20 relative shadow-lg flex h-full bg-white flex-col gap-4">
        <div className="py-6 px-4 border-b flex relative items-center justify-between w-full">
          <span className="text-2xl family2 font-bold">Your Cart</span>
          <span
            onClick={() => dispatch(offCartModal())}
            className="w-12 h-12 text-xl cursor-pointer hover:bg-[#eee] rounded-full flex items-center justify-center"
          >
            <RxCross1 />
          </span>
        </div>
        {cart?.length !== 0 ? (
          <div className="w-full flex flex-col gap-4"></div>
        ) : (
          <div className="flex w-full h-full items-center justify-center flex-col gap-8">
            <div className="w-40">
              <Image
                src={
                  "https://cdn.prod.website-files.com/5d820ccf1097dd2dccadc680/5d85ef3882aa6e5dc3a85e6f_empty-cart.svg"
                }
              />
            </div>
            <h4 className="text-4xl family2 font-bold max-w-[300px] mx-auto text-center">
              Your cart is empty Shop now
            </h4>
          </div>
        )}
      </div>
    </motion.div>
  );
}

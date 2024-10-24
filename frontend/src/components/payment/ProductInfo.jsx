"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BiCheck, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import FlutterPaymentButton from "./FlutterPaymentButton";
import { Link, NavLink } from "react-router-dom";
import { BillingInputData } from "@/data/formdata";
import { useSelector } from "react-redux";
import Image from "../common/Image";
import Curtain from "@/animations/Curatin";
export default function ProductInfo() {
  const [formvalue, setFormValue] = useState({
    phone: "",
    street: "",
    city: "",
    postalcode: "",
    country: "",
    zipcode: "",
  });
  const { cart } = useSelector((store) => store.cart);
  return (
    <div className="w-full py-40 min-h-[700px] items-center justify-center flex">
      <div className="w-[90%] flex flex-col gap-4 max-w-custom mx-auto">
        <div className="flex text-lg text-grey items-center gap-4">
          <NavLink to={"/"} className={"text-lg family1 text-grey"}>
            Home
          </NavLink>
          <BiChevronRight />
          <NavLink to={"/"} className={"text-lg family1 text-grey"}>
            Checkout
          </NavLink>
          <BiChevronRight />
          <NavLink to={"/checkout"} className={"text-lg family1 text-dark"}>
            Payment
          </NavLink>
        </div>
        <div className="w-[100%] grid grid-cols-custom items-start gap-12">
          <div className="w-full flex py-12 px-4 md:px-8 flex-col gap-12 border rounded-2xl">
            <h4 className="text-3xl font-black family2">
              Billing Address / Shipping Address
            </h4>
            <div className="w-full flex flex-col gap-4">
              {BillingInputData?.map((inputvalue, index) => {
                return (
                  <label
                    key={index}
                    htmlFor=""
                    className="flex flex-col gap-2 family1 text-base"
                  >
                    <span className="font-semibold">{inputvalue?.label}</span>
                    <input
                      name={inputvalue?.name}
                      value={formvalue[inputvalue?.value]}
                      placeholder={inputvalue?.label}
                      type="text"
                      className="input text-sm"
                    />
                  </label>
                );
              })}
            </div>
          </div>
          <div className="w-[400px] flex flex-col gap-8 py-12 px-4 md:px-8 border rounded-2xl">
            <h4 className="text-3xl font-black family2">Your Order</h4>
            {cart?.length !== 0 ? (
              <div className="w-full h-full flex justify-between flex-col gap-4">
                <div className="w-full flex flex-col gap-4">
                  {cart?.map((cartitems, index) => {
                    return (
                      <div className="w-full flex items-center gap-4">
                        <div className="w-16">
                          <Image src={cartitems?.images[0]} />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h5 className="text-lg font-bold">
                            {cartitems?.title}
                          </h5>
                          <h6 className="text-sm font-bold">
                            <span className="text-grey family1 font-normal">
                              Quantity:{" "}
                            </span>
                            {cartitems?.quantity}
                          </h6>
                        </div>
                      </div>
                    );
                  })}
                </div>
               
              </div>
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
        </div>
      </div>
    </div>
  );
}

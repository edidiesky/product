import React from "react";
import Productindex from "../components/products";
import { useGetAllProductQuery } from "@/slices/productApiSlice";
import Loader from "@/components/home/loader";

export default function Products() {
  const {
    isLoading,
    isError,
    data: Products,
  } = useGetAllProductQuery();
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h3 className="text-4xl md:text-5xl md:text-center family1 font-black">
          An error Occurred
          <span className="block text-lg md:text-xl text-grey font-normal">
            {isError?.data?.message || isError.error}
          </span>
        </h3>
      </div>
    );
  }
  return (
    <div>
      <Productindex products={Products} />
    </div>
  );
}

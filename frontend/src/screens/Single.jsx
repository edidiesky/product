import React from "react";
import HomeIndex from "../components/single";
import { useGetSingleProductQuery } from "@/slices/productApiSlice";
import { useParams } from "react-router-dom";
import Loader from "@/components/home/loader";
const Single = () => {
  const { id: ProductId } = useParams();
  const { isLoading, isError, isSuccess, data } = useGetSingleProductQuery(ProductId);
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h3 className="text-4xl md:text-5xl family1 font-black">
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
      <HomeIndex data={data} />
    </div>
  );
};

export default Single;

import React from "react";
import HomeIndex from "../components/single";
import {
  useGetAllProductQuery,
  useGetSingleProductQuery,
} from "@/slices/productApiSlice";
import { useParams } from "react-router-dom";
import Loader from "@/components/home/loader";
import { productData } from "@/data/product";
const Single = () => {
  const { id } = useParams();
  // console.log(id);

  let Products = productData;
  const data = productData?.find((data) => data?.id === id);
  // console.log(data);
  // let { isLoading, isError, isSuccess, data } = useGetSingleProductQuery(id);
  // const { data: Products } = useGetAllProductQuery();

  // if (isLoading) {
  //   return <Loader />;
  // }
  // if (isError) {
  //   return (
  //     <div className="w-full h-screen flex items-center justify-center">
  //       <h3 className="text-4xl md:text-5xl family1 font-black">
  //         An error Occurred
  //         <span className="block text-lg md:text-xl text-[#eee] font-normal">
  //           {isError?.data?.message || isError.error}
  //         </span>
  //       </h3>
  //     </div>
  //   );
  // }
  return (
    <div>
      <HomeIndex data={data} Products={Products} />
    </div>
  );
};

export default Single;

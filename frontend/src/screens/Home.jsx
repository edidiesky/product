import React from "react";
import HomeIndex from "../components/home";
import { useGetAllProductQuery } from "@/slices/productApiSlice";
import Loader from "@/components/home/loader";
const Home = () => {
  const { isLoading, isError, isSuccess, data:Products } = useGetAllProductQuery();
  if (isLoading) {
    return <Loader />;
  }
  // if (isError) {
  //   return (
  //     <div className="w-full h-screen flex items-center justify-center">
  //       <h3 className="text-4xl md:text-5xl family1 font-bold">
  //         An error Occurred
  //         <span className="block text-lg md:text-xl text-grey font-normal">
  //           {isError?.data?.message || isError.error}
  //         </span>
  //       </h3>
  //     </div>
  //   );
  // }
  return (
    <div data-scroll-container>
      <HomeIndex products={Products} />
    </div>
  );
};

export default Home;

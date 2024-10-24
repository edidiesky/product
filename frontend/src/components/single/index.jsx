// ;
import Navbar from "../common/navbar/index";
import ProductInformation from "./ProductInformation";
import ProductRecommendation from './ProductRecommendation'
import Hero from "./Hero";
import Footer from "../common/Footer";
export default function ProductItem({ data, Products }) {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(135deg, #f5f7fa, #fed6e3)",
      }}
      className="overflow-hidden"
    >
      <Navbar />
      <div className="mt-40 w-full">
        <Hero data={data} />
        <div className="w-[95%] md:w-[70%] mx-auto max-w-custom">
          <ProductInformation data={data} />
          <ProductRecommendation data={data} Products={Products} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

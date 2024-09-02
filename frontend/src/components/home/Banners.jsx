import React from "react";
import Curtain from "../../animations/Curatin";
import { journalList } from "../../data/journal";
import Image from "../common/Image";
const banner1List = [
  {
    image:
      "https://cdn.prod.website-files.com/5d820ccf1097dd2dccadc680/5d821b43a9e756fc2feb3995_fruit-5.png",

    subtext:
      "Kinbiome™ • Plant-based probiotic supports clear skin + a strong skin barrier. Learn more",
  },
  {
    image:
      "https://cdn.prod.website-files.com/5d820ccf1097dd2dccadc680/5d823ee3251dcc696beea811_fruit-5.png",
    subtext:
      "Hyaluronic Acid • Keeps skin deeply hydrated, looking plump + dewy. Learn more",
  },
  {
    image:
      "https://cdn.prod.website-files.com/5d820ccf1097dd2dccadc680/5d832052e8178d1ae662bc4e_cherry.svg",
    subtext:
      "Papaya • Brightening enzymes + nutrient-rich vitamins + antioxidants that purify and smooth. Learn more",
  },
  {
    image:
      "https://cdn.prod.website-files.com/5d820ccf1097dd2dccadc680/5d823ee3251dccf5faeea7fc_fruit-8.png",
    subtext:
      "Papaya • Brightening enzymes + nutrient-rich vitamins + antioxidants that purify and smooth. Learn more",
  },
  {
    image:
      "https://cdn.prod.website-files.com/5d820ccf1097dd2dccadc680/5e28628fadb8f74cd367f9ba_himbeere-1.png",
    subtext:
      "Kinbiome™ • Plant-based probiotic supports clear skin + a strong skin barrier. Learn more",
  },
];

const bannerlist2 = [
  {
    image:
      "https://cdn.prod.website-files.com/5d820ccf1097dd2dccadc680/5e23224f2e290c48b9c7b4b7_shop-bag.svg",
    title: "Make you Mark",
    subtext:
      "Sign up to receive convenient shipments for your beauty routine. Subscribe and you’ll receive 15% off your next order",
  },
  {
    image:
      "https://cdn.prod.website-files.com/5d820ccf1097dd2dccadc680/5e232257daefb875504b4048_letter.svg",
    title: "Receive Your Products",
    subtext:
      "We’ll send you a shipping label with your products. All you need to do is put your used bottles in the box and leave out for your mail carrier.",
  },
  {
    image:
      "https://cdn.prod.website-files.com/5d820ccf1097dd2dccadc680/5e232223b966d9fe1c82e826_label.svg",
    title: "Get Rewarded",
    subtext:
      "Each time you send in your empty bottles, you'll receive 15% off your next shipment.",
  },
];

export default function Banners() {
  return (
    <div className="w-full md:mt-48">
      <div className="min-h-[400px] py-20 w-full mx-auto flex items-center justify-center relative">
        <Image
          // src={data?.backgroundImage}
          src="https://assets.website-files.com/5d820ccf1097dd2dccadc680/5e2866783a68325c8d897d6d_dose-juice-mP0xREKwrqg-unsplash.jpg"
          alt=""
          className="absolute z-10 object-cover w-full h-full"
        />
        <div className="w-full px-8 z-20 h-full flex flex-col gap-12 items-center justify-center">
          <h2 className="text-5xl font-black family2">
            Say hello to good-for-you ingredients
          </h2>
          <div className="w-full md:w-[76%] mx-auto grid grid-cols-2 md:grid-cols-5 items-center justify-center gap-8">
            {banner1List?.map((data, index) => {
              return (
                <div className="flex flex-col gap-4">
                  <div className="w-24 h-24 flex items-center justify-center bg-white rounded-[50%]">
                    <Image
                      src={data?.image}
                      alt=""
                      className="w-20 h-20 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="min-h-[400px] py-20 bg-white w-full mx-auto flex items-center justify-center relative">
        <div className="w-full px-8 z-20 h-full flex flex-col gap-8 items-center justify-center">
          <h2 className="text-5xl font-black family2">For all well beings</h2>
          <span className="text-2xl max-w-[600px] mx-auto text-center">
            We are kind to people + planet with clean, cruelty-free products +
            conscious packaging.
          </span>
          <button
            style={{
              transition: "all 1s",
            }}
            className="h-20 w-40 bg-[var(--primary)] text-white rounded-full uppercase family2 text-base md:text-base font-black"
          >
            <Curtain bgColor={"#000"}>About Us</Curtain>
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundImage: "linear-gradient(319deg, #fff1eb, #ace0f9)",
        }}
        className="min-h-[400px] py-20 w-full mx-auto flex items-center justify-center relative"
      >
        <div className="w-full px-8 z-20 h-full flex flex-col gap-8 items-center justify-center">
          <div className="w-[80%] md:w-[75%] mx-auto max-w-custom grid md:grid-cols-3 items-center justify-center gap-2">
            {bannerlist2?.map((data, index) => {
              return (
                <div className="flex items-center justify-center p-8 bg-[#fff1eb38] flex-col gap-4">
                  <div className=" rounded-[50%]">
                    <Image
                      src={data?.image}
                      alt=""
                      className="w-20 h-20 object-cover"
                    />
                  </div>
                  <div className="w-full flex items-center justify-center flex-col gap-4">
                    <h5 className="text-base uppercase family1 text-[#257194]">
                      Step {index + 1}
                    </h5>
                    <h4 className="text-2xl md:text-3xl font-black family2">
                      {data?.title}
                    </h4>
                    <h4 className="text-xs md:text-sm text-center leading-[1.8] family3">
                      {data?.subtext}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="min-h-[400px] py-20 bg-white w-full mx-auto flex items-center justify-center relative">
        <div className="w-full px-8 md:w-[75%] max-w-custom mx-auto z-20 h-full flex flex-col gap-24 items-start justify-center">
          <h2 className="text-5xl md:text-8xl uppercase font-black family2">
            Journal
          </h2>
          <div className="w-full flex flex-col gap-2">
            {journalList?.slice(0, 2).map((data, index) => {
              return (
                <div className="grid md:grid-cols-custom cursor-pointer group justify-center">
                  <div className="w-full relative min-h-[500px] rounded-tl-[40px] rounded-bl-[40px] overflow-hidden">
                    <Image
                      src={data?.image}
                      alt=""
                      style={{
                        transition: "all .5s",
                      }}
                      className="w-full group-hover:scale-[1.2] absolute h-full object-cover"
                    />
                  </div>
                  <div className="md:w-[300px] p-8 rounded-tr-[40px] rounded-br-[40px] bg-[#fafafa] flex items-start justify-center flex-col gap-4">
                    <h5 className="text-base uppercase family1 text-[#257194]">
                      Step {index + 1}
                    </h5>
                    <h4 className="text-2xl md:text-4xl font-black family2">
                      {data?.title}
                    </h4>
                    <h4 className="text-xs md:text-sm text-start leading-[1.8] family3">
                      {data?.subtext}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

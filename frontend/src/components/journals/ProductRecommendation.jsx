import React from "react";
import { styled } from "styled-components";
import Image from "../common/Image";
import { journalList } from "../../data/journal";

const Journals = () => {
  return (
    <JournalStyles
      style={{ gap: ".2rem" }}
      className="flex w-full flex-col mx-auto justify-center item-center"
    >
      <div className="w-full bg-white px-8 lg:px-32 py-32 max-w-custom mx-auto gap-32 flex flex-col">
        <h2 className="uppercase lg:text-9xl text-6xl underline font-black text-start w-full mx-auto family2">
          Journals
        </h2>
        <div className="w-full flex flex-col gap-2">
          {journalList?.map((data, index) => {
            return (
              <div className="grid lg:grid-cols-custom cursor-pointer group justify-center">
                <div className="w-full relative min-h-[300px] lg:min-h-[600px] rounded-tl-[40px] rounded-bl-[40px] overflow-hidden">
                  <div
                    style={{
                      transition: "all .5s",
                    }}
                    className="w-full group-hover:scale-[1.2] absolute h-full object-cover"
                  >
                    <Image
                      src={data?.image}
                      alt=""
                      className="w-full group-hover:scale-[1.2] absolute h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-[400px] p-8 rounded-tr-[40px] rounded-br-[40px] bg-[#fafafa] flex items-start justify-center flex-col gap-4">
                  <h5 className="text-base uppercase family1 text-[#257194]">
                    Step {index + 1}
                  </h5>
                  <h4 className="text-3xl lg:text-5xl font-black family2">
                    {data?.title}
                  </h4>
                  <h4 className="text-xs lg:text-sm text-start leading-[1.8] family3">
                    {data?.subtext}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </JournalStyles>
  );
};

const JournalStyles = styled.div`
  position: relative;
  .left {
    width: 60%;
    @media (max-width: 780px) {
      width: 90%;
    }
  }

  h2,
  .wrapper {
    /* width:70% !important; */
  }
`;

export default Journals;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const linkData = [
  {
    title: "About",
    path: "",
  },
  {
    title: "Listings",
    path: "search",
  },
  {
    title: "Culture",
    path: "savedhomes",
  },
  {
    title: "Contact Us",
    path: "trips",
  },
];


export default function Sidebar({setBar, bar}) {
  const { currentUser } = useSelector((store) => store.auth);

  return (
    <div
      style={{ zIndex: "200" }}
      className={`${
        bar ? "left-0" : "-left-[100%]"
      } w-[300px] h-full transition-all ease duration-700 fixed flex lg:hidden top-0 bg-[#fff] shadow-2xl column gap-2`}
    >
      <div
        onClick={() => setBar(!bar)}
        style={{ zIndex: "200" }}
        className={`${
          bar ? "left-0" : "-left-[100%]"
        } w-full h-full transition-all ease duration-300 fixed flex lg:hidden top-0 bg-[#42424227] column gap-2`}
      ></div>

      <div
        style={{ zIndex: "200" }}
        className="w-full Header_wrapper h-full bg-white flex item-center flex-col gap-4"
      >
        <div className="flex p-4 items-center gap-2">
          {currentUser?.image ? (
            <img
              src={currentUser?.image}
              alt=""
              className="w-12 lg:w-12 h-12 lg:h-12 rounded-full"
            />
          ) : currentUser?.username ? (
            // <div className="w-12 h-12 text-white rounded-full bg-[#000] text-2xl flex items-center justify-center ">
            //   {currentUser?.username[0]}{" "}
            // </div>
            <img
              src="https://fundednext.fra1.digitaloceanspaces.com/dashboard/demo-avatar.jpg"
              alt=""
              className="w-12 lg:w-12 h-12 lg:h-12 rounded-full"
            />
          ) : (
            <img
              src="https://fundednext.fra1.digitaloceanspaces.com/dashboard/demo-avatar.jpg"
              alt=""
              className="w-12 lg:w-12 h-12 lg:h-12 rounded-full"
            />
          )}
          {currentUser && (
            <h4 className="text-base font-booking_font4 text-dark family1">
              {currentUser?.name}
              <span className="block font-normal font-booking_font text-sm text-grey">
                {currentUser?.email}
              </span>
            </h4>
          )}
        </div>
        <ul className="flex flex-col w-full">
          {currentUser
            ? linkData?.slice(0, 6)?.map((x, index) => {
                return (
                  <Link
                    to={`/${x.path}`}
                    key={index}
                    className="text-dark font-booking_font4
                    hover:bg-[rgba(0,0,0,.1)] py-[20px] border-b text-sm px-8"
                  >
                    {x.title}
                  </Link>
                );
              })
            : linkData?.map((x, index) => {
                return (
                  <Link
                    to={`/${x.path}`}
                    key={index}
                    className="text-dark font-booking_font4  hover:bg-[rgba(0,0,0,.1)] py-[20px] border-b text-sm px-8"
                  >
                    {x.title}
                  </Link>
                );
              })}
        </ul>
      </div>
    </div>
  );
}

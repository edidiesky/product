import { Link } from "react-router-dom";

const navbarList1 = ["Home", "About us", "Journal", "Reviews", "Contact"];
const navbarList2 = [
  "Terms and Conditions",
  "FAQ",
  "Changelog",
  "Image license info",
  "Style guide",
  "Instructions",
];
const navbarList3 = ["Shop all", "Yogurt", "Lactose•free"];
const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "linear-gradient(319deg, #fff1eb, #ace0f9)",
        }}
        className="w-full px-4 md:px-16 py-32 relative  grid lg:grid-cols-2 justify-center gap-8"
      >
        <div className="w-full flex flex-col gap-8 lg:border-r border-[rgba(0,0,0,.2)]">
          <h4 className="text-3xl family2 font-black">
            Keep in touch and receive fun updates!
          </h4>
          <div className="flex flex-col gap-4">
            <h5 className="text-xl">Customer Support Center</h5>
            <ul>
              <li className="text-base family1">Monday – Friday</li>{" "}
              <li className="text-base family1">9am – 5pm PST</li>{" "}
              <li className="text-base family1">
               hello@victorcancode.com
               <span className="block">+234 7532 7804</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full pl-2 grid sm:grid-cols-3 gap-4 justify-between">
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl family2 font-black">Company</h4>
            <div className="flex-col flex gap-1">
              {navbarList1?.map((data, index) => {
                return <div className="text-base">{data}</div>;
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-2xl family2 font-black">Customer Care</h4>
            <div className="flex-col flex gap-1">
              {navbarList2?.map((data, index) => {
                return <div className="text-base">{data}</div>;
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-2xl family2 font-black">Shop</h4>
            <div className="flex-col flex gap-1">
              {navbarList3?.map((data, index) => {
                return <div className="text-base">{data}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

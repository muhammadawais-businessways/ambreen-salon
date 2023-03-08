import React from "react";
import { ForthBanner, MainBanner, SecondBanner, ThirdBanner,LOGO } from "../../assets/index";

const Banner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${MainBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 765,
          width: "auto",
        }}
        className=""
      >
        <img src={LOGO} width='700px' height='700px' alt="logo"/>
        <div className="absolute left-[170px] w-[300px]">
        <h1 className="-mt-[8rem]  text-2xl font-semibold">Makes You Beautiful </h1>
        <div className=" mt-5	 text-left" >Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quae deserunt ut sunt nihil non beatae suscipit aliquid hic! </div>
        <button>Read More</button>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${SecondBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 900,
          width: "auto",
        }}
        className=""
      ></div>
      <div
        style={{
          backgroundImage: `url(${ThirdBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 1010,
          width: "auto",
        }}
        className=""
      ></div>
      <div
        style={{
          backgroundImage: `url(${ForthBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 1140,
          width: "auto",
        }}
        className="mt-5"
      ></div>
    </>
  );
};

export default Banner;
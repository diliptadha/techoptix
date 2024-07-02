import "../app/globals.css";

import { Images, Strings } from "@/constant";
import React, { useState } from "react";

import { Footer } from "@/Component/footer";
import Header from "@/Component/header";
import Image from "next/image";
import Link from "next/link";
import StarRating from "./StarRating";
import data from "../../public/data.json";

const StoreLocation = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Header setSearch={setSearch} />
      <div className=" px-[2rem] py-[2rem] md:px-[3rem] xl:px-[6rem]">
        {data.store.length > 0 ? (
          data.store.map((ele, index) => (
            <div
              key={index}
              className="border rounded-[10px] mb-[15px] lg:max-w-[80%] md:max-w-[90%] xl:max-w-[70%] md:mt-0 md:mx-auto flex-wrap md:flex-none text-justify	tracking-[0.5px] text-[12px] md:text-[15px] p-[20px] flex"
            >
              <div className="md:w-[250px] md:h-[250px] h-[220px] w-[100%] md:mr-[20px] mb-[10px] lg:mb-0">
                <img
                  src={ele.storeImg}
                  alt="shopImage"
                  className="w-[100%] h-[100%] rounded-[4px]"
                />
              </div>
              <div className="flex-1">
                <div className="mb-[15px] font-bold flex justify-between items-center ">
                  <h2 className="text-[15px] md:text-[18px] lg:text-[20px]">
                    {ele.name}
                  </h2>
                  <div className="flex items-center gap-[2px]">
                    <StarRating rating={ele.rating} />
                  </div>
                </div>
                <h3 className="mb-[6px] md:mb-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
                  {ele.address}
                </h3>
                <h4 className="mb-[10px] md:mb-[20px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
                  {ele.timing}
                </h4>
                <div className="flex gap-[10px] mb-[20px] items-center">
                  <Image
                    src={Images.PHONE_LOGO_BLUE}
                    width={20}
                    height={20}
                    alt="PhoneIcon"
                    className="h-[20px] w-[20px]"
                  />
                  <Link
                    href={`tel:-${ele.number}`}
                    className="underline text-[#000000] hover:text-[#42b7e9] md:text-[14px] lg:text-[16px] xl:text-[18px]"
                  >
                    +91 {ele.number}
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>{Strings.NO_DATA_FOUND}</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default StoreLocation;

"use client";

import { Images, Strings } from "@/constant";
import { useRef, useState } from "react";

import Image from "next/image";

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(
    "English"
  );
  const [rotateImage, setRotateImage] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [stringsArray, setStringsArray] = useState([
    {
      id: 0,
      menu: Strings.EYEGLASSES,
      image: Images.Downiconblack,
      megaMenuOpen: false,
      data: {
        gender: {
          submenuData: ["Gender"],
          genderheading: ["men", "women", "unisex"],
        },
        framestyle: {
          submenuData: ["Frame Style"],
          framestyleheading: ["Full Frame", "Half Frame", "Rimless "],
        },
        brands: {
          submenuData: ["Brands"],
          brandsheading: [
            "Iksana",
            "Tom Ford",
            "Maybach",
            "Scott",
            "K&D",
            "Visibilla",
            "Zoe Miller",
            "Page 4",
            "Swarovski",
            "Origin Virgin",
            "Maverick",
            "Femina Flaunt",
            "Gotti",
            "Kosch",
            "Gucci",
            "prada",
            "Moleskine",
            "Carrera",
            "Mozzati",
            "Intense Focus",
            "Esprit",
          ],
        },
        framecolor: {
          submenuData: ["Frame Color"],
          framecolorheading: [
            "Black",
            "Gold",
            "Transparent",
            "Brown",
            "Voilet",
            "Blue",
            "Silver",
            "Gunmetal",
            "Pink",
            "Yellow",
            "Red",
            "Green",
            "Tortoise",
            "Maroon",
            "Grey",
            "Purple",
            "Rosegold",
            "White",
          ],
        },
        frameshape: {
          submenuData: ["Frame Shape"],
          frameshapeheading: [
            "Avaiator",
            "Butterfly",
            "Cat Eye",
            "Club Master",
            "Hexagon",
            "Oval",
            "Rectangle",
            "Round",
            "Square",
            "Geometric",
            "Wayfarer",
          ],
        },
      },
    },
    {
      id: 1,
      menu: Strings.SUNGLASSES,
      image: Images.Downiconblack,
      megaMenuOpen: false,
      data: {
        gender: {
          submenuData: ["Gender"],
          genderheading: ["men", "women", "unisex"],
        },
        framestyle: {
          submenuData: ["Frame Style"],
          framestyleheading: ["Full Frame", "Half Frame", "Rimless "],
        },
        brands: {
          submenuData: ["Brands"],
          brandsheading: [],
        },
        framecolor: {
          submenuData: ["Frame Color"],
          framecolorheading: [],
        },
        frameshape: {
          submenuData: ["Frame Shape"],
          frameshapeheading: [],
        },
      },
    },
    {
      id: 2,
      menu: Strings.CONTACTLENS,
      image: Images.Downiconblack,
      megaMenuOpen: false,
      data: {
        gender: {
          submenuData: ["Usage"],
          genderheading: ["Daily", "Monthly", "Quarterly", "Yearly"],
        },
        framestyle: {
          submenuData: ["Frame Style"],
          framestyleheading: ["Full Frame", "Half Frame", "Rimless "],
        },
        brands: {
          submenuData: ["Brands"],
          brandsheading: [],
        },
        framecolor: {
          submenuData: ["Frame Color"],
          framecolorheading: [],
        },
        frameshape: {
          submenuData: ["Frame Shape"],
          frameshapeheading: [],
        },
      },
    },
    {
      id: 3,
      menu: Strings.KIDSWEAR,
      image: Images.Downiconblack,
      megaMenuOpen: false,
      data: {
        gender: {
          submenuData: ["Gender"],
          genderheading: ["men", "women", "unisex"],
        },
        framestyle: {
          submenuData: ["Frame Style"],
          framestyleheading: ["Full Frame", "Half Frame", "Rimless "],
        },
        brands: {
          submenuData: ["Brands"],
          brandsheading: [],
        },
        framecolor: {
          submenuData: ["Frame Color"],
          framecolorheading: [],
        },
        frameshape: {
          submenuData: ["Frame Shape"],
          frameshapeheading: [],
        },
      },
    },
    {
      id: 4,
      menu: Strings.SWIMMING_GLASSES,
      image: Images.Downiconblack,
      megaMenuOpen: false,
      data: {
        gender: {
          submenuData: ["Gender"],
          genderheading: ["men", "women", "unisex"],
        },
        framestyle: {
          submenuData: ["Frame Style"],
          framestyleheading: ["Full Frame", "Half Frame", "Rimless "],
        },
        brands: {
          submenuData: ["Brands"],
          brandsheading: [],
        },
        framecolor: {
          submenuData: ["Frame Color"],
          framecolorheading: [],
        },
        frameshape: {
          submenuData: ["Frame Shape"],
          frameshapeheading: [],
        },
      },
    },
    {
      id: 5,
      menu: Strings.READING_GLASS,
      image: Images.Downiconblack,
      megaMenuOpen: false,
      data: {
        gender: {
          submenuData: ["Gender"],
          genderheading: ["men", "women", "unisex"],
        },
        framestyle: {
          submenuData: ["Frame Style"],
          framestyleheading: ["Full Frame", "Half Frame", "Rimless "],
        },
        brands: {
          submenuData: ["Brands"],
          brandsheading: [],
        },
        framecolor: {
          submenuData: ["Frame Color"],
          framecolorheading: [],
        },
        frameshape: {
          submenuData: ["Frame Shape"],
          frameshapeheading: [],
        },
      },
    },
    {
      id: 6,
      menu: Strings.COMPUTER_GLASS,
      image: Images.Downiconblack,
      megaMenuOpen: false,
      data: {
        gender: {
          submenuData: ["Gender"],
          genderheading: ["men", "women", "unisex"],
        },
        framestyle: {
          submenuData: ["Frame Style"],
          framestyleheading: ["Full Frame", "Half Frame", "Rimless "],
        },
        brands: {
          submenuData: ["Brands"],
          brandsheading: [],
        },
        framecolor: {
          submenuData: ["Frame Color"],
          framecolorheading: [],
        },
        frameshape: {
          submenuData: ["Frame Shape"],
          frameshapeheading: [],
        },
      },
    },
    {
      id: 7,
      menu: Strings.BRANDS,
      image: Images.Downiconblack,
      megaMenuOpen: false,
      data: {
        gender: {
          submenuData: ["Gender"],
          genderheading: ["men", "women", "unisex"],
        },
        framestyle: {
          submenuData: ["Frame Style"],
          framestyleheading: ["Full Frame", "Half Frame", "Rimless "],
        },
        brands: {
          submenuData: ["Brands"],
          brandsheading: [],
        },
        framecolor: {
          submenuData: ["Frame Color"],
          framecolorheading: [],
        },
        frameshape: {
          submenuData: ["Frame Shape"],
          frameshapeheading: [],
        },
      },
    },
  ]);

  const toggleMegaMenu = (index: number) => {
    const updatedStringsArray = stringsArray.map((item, i) => ({
      ...item,
      megaMenuOpen: i === index ? !item.megaMenuOpen : false,
    }));
    setStringsArray(updatedStringsArray);
    setRotateImage(!rotateImage);
  };

  const handleLanguageClick = (language: string) => {
    setSelectedLanguage((prevLanguage) =>
      prevLanguage === language ? null : language
    );
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuItemClick = () => {
    setShowMenu(false);
    const updatedStringsArray = stringsArray.map((item) => ({
      ...item,
      megaMenuOpen: false,
    }));
    setStringsArray(updatedStringsArray);
  };

  const handleClose = () => {
    const updatedStringsArray = stringsArray.map((item) => ({
      ...item,
      megaMenuOpen: false,
    }));
    setStringsArray(updatedStringsArray);
    setRotateImage(!rotateImage);
  };

  return (
    <div className="max-w-screen-2xl m-auto">
      <div className="flex mt-8 xs:flex-col sm:flex-row sm:justify-between xs:space-y-4 md:space-y-0 items-center xs:mx-4 md:mx-12">
        <Image
          src={Images.Logo}
          alt="/"
          height={68}
          width={215}
          className="xs:w-36 md:w-[215px]"
        />
        <div className="xs:space-x-3 sm:space-x-4 flex items-center">
          <div className="relative">
            <input
              className="xs:text-sm md:text-base bg-[#E5E5E4] z-index1 outline-none xs:w-[260px] md:w-56 h-10 p-4 rounded-[10px] flex items-center"
              style={{ paddingRight: "2.5rem" }}
            />
            <Image
              src={Images.Search}
              alt="/"
              height={18}
              width={18}
              className="absolute right-4 top-3 "
            />
          </div>
          <div className="relative">
            <Image
              src={Images.Bag}
              alt="/"
              height={21}
              width={19}
              className="xs:w-[16px] md:w-[18px]"
            />
            <p className="rounded-full xs:h-2 xs:w-2 md:h-3 md:w-3 bg-[#FF4307] absolute top-0 left-2.5"></p>
          </div>
        </div>
      </div>
      <div>
        <div className="relative justify-between flex  my-10 mx-12  xs:hidden lg:flex">
          {stringsArray.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => toggleMegaMenu(index)}
                className={`flex items-center font-normal text-xs text-black cursor-pointer ${
                  item.megaMenuOpen ? "text-PictonBlue" : ""
                }`}
              >
                {item.menu}
                <button>
                  {item.megaMenuOpen ? (
                    <Image
                      src={Images.DownArrow}
                      alt="/"
                      height={12}
                      width={12}
                      className={`ml-2 
                      ${
                        item.megaMenuOpen
                          ? "rotate-180 duration-300 transform"
                          : ""
                      }`}
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt="/"
                      height={12}
                      width={12}
                      className="ml-2"
                    />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center xs:hidden lg:flex">
          {stringsArray.map(
            (item, index) =>
              item.megaMenuOpen && (
                <div
                  key={index}
                  className="w-[700px] h-auto bg-[#F2F2F2] z-index1 absolute top-56 p-5 rounded-[10px] shadow-md"
                >
                  <div className="flex justify-between font-normal">
                    <div>
                      <h1 className="font-bold text-black">
                        {item.data?.gender.submenuData.map((gender, index) => (
                          <h1 key={index}>{gender}</h1>
                        ))}
                      </h1>
                      <ul>
                        {item.data?.gender.genderheading.map(
                          (gender, subIndex) => (
                            <li key={subIndex}>{gender}</li>
                          )
                        )}
                      </ul>
                    </div>
                    <div>
                      <h1 className="font-bold text-black">
                        {item.data?.brands.submenuData.map((brands, index) => (
                          <h1 key={index}>{brands}</h1>
                        ))}
                      </h1>
                      <ul>
                        {item.data?.brands.brandsheading.map(
                          (brands, subIndex) => (
                            <li key={subIndex}>{brands}</li>
                          )
                        )}
                      </ul>
                    </div>
                    <div>
                      <h1 className="font-bold text-black">
                        {item.data?.framecolor.submenuData.map(
                          (framecolor, index) => (
                            <h1 key={index}>{framecolor}</h1>
                          )
                        )}
                      </h1>
                      <ul>
                        {item.data?.framecolor.framecolorheading.map(
                          (framecolor, subIndex) => (
                            <li key={subIndex}>{framecolor}</li>
                          )
                        )}
                      </ul>
                    </div>
                    <div>
                      <h1 className="font-bold text-black">
                        {item.data?.framestyle.submenuData.map(
                          (framestyle, index) => (
                            <h1 key={index}>{framestyle}</h1>
                          )
                        )}
                      </h1>
                      <ul>
                        {item.data?.framestyle.framestyleheading.map(
                          (framestyle, subIndex) => (
                            <li key={subIndex}>{framestyle}</li>
                          )
                        )}
                      </ul>
                    </div>
                    <div>
                      <h1 className="font-bold text-black">
                        {item.data?.frameshape.submenuData.map(
                          (frameshape, index) => (
                            <h1 key={index}>{frameshape}</h1>
                          )
                        )}
                      </h1>
                      <ul>
                        {item.data?.frameshape.frameshapeheading.map(
                          (frameshape, subIndex) => (
                            <li key={subIndex}>{frameshape}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

"use client";

import { Images, Strings } from "@/constant";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface HeaderProps {
  setSearch: (search: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setSearch }) => {
  const router = useRouter();

  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(
    "English"
  );
  const [rotateImage, setRotateImage] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [cartQuantity, setCartQuantity] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [search, setSearchLocal] = useState("");
  const [showTrendingSearches, setShowTrendingSearches] = useState(false);
  const trendingSearches = [
    "Contact Lenses",
    "Eyeglasses for Kids",
    "Eyeglasses for Men",
    "Eyeglasses for Women",
    "Computer Glasses Women",
    "Computer Glasses Men",
    "Myopia Control Zesis Lenses",
    "Myopia Control Zeiss Lenses",
    "Myopia Control Essilor Lenses",
  ];
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
            "",
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
          brandsheading: [
            "",
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
            "Prada",
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
            "AVAIATOR",
            "BUTTERFLY",
            "CATEYE",
            "CLUBMASTER",
            "HEXAGON",
            "OVAL",
            "RECTANGLE",
            "ROUND",
            "SQUARE",
            "GEOMETRIC",
            "WAYFARER",
          ],
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
          brandsheading: [
            "Johnson & johnson",
            "  Bausch and lomb",
            "     Alcon",
            "  Cooper vision",
            "Seed",
            "   Celebration",
          ],
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
  let tQty = 0;
  const handleCartPage = () => {
    if (tQty <= 0) {
      router.push("/cartEmpty");
    } else {
      router.push("/cart");
    }
  };
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedSearch = localStorage.getItem("searchTerm");
    if (storedSearch) {
      setSearchLocal(storedSearch);
    }
  }, []);

  const handleChange = (e: any) => {
    const searchTerm = e.target.value;
    setSearchLocal(e.target.value);
    setSearch(e.target.value);
    if (searchTerm.trim() === "") {
      localStorage.removeItem("searchTerm");
      localStorage.removeItem("search");
    }
  };

  useEffect(() => {
    const savedSearchTerm = localStorage.getItem("searchTerm");
    if (savedSearchTerm) {
      setSearch(savedSearchTerm);
      setSearchLocal(savedSearchTerm);
    }
  }, []);

  const handleSearch = () => {
    if (search.trim() !== "") {
      localStorage.setItem("searchTerm", search);
      router.push(
        `/advanced-search?q=${encodeURIComponent(
          search.toLowerCase().replace(/\s+/g, "-")
        )}`
      );
    }
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
    setShowTrendingSearches(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleTrendingSearchClick = (term: string) => {
    setSearch(term);
    setSearchLocal(term);
    localStorage.setItem("searchTerm", term);
    router.push(
      `/advanced-search?q=${encodeURIComponent(
        term.toLowerCase().replace(/\s+/g, "-")
      )}`
    ),
      setShowTrendingSearches(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowTrendingSearches(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="max-w-screen-2xl m-auto">
      <div className="flex mt-8 xs:flex-col sm:flex-row sm:justify-between xs:space-y-4 md:space-y-0 items-center xs:mx-4 md:mx-12">
        <Link href={"/"}>
          <Image
            src={Images.Logo}
            alt="/"
            height={68}
            width={215}
            className="xs:w-36 md:w-[215px]"
          />
        </Link>
        <div className="xs:space-x-3 sm:space-x-4 flex items-center">
          <div className="relative" ref={dropdownRef}>
            <input
              className="xs:text-sm md:text-base text-black bg-[#E5E5E4] outline-none xs:w-[260px] md:w-56 h-10 p-4 rounded-[10px] flex items-center"
              style={{ paddingRight: "2.5rem" }}
            />

            <button
              disabled={search.trim() === ""}
              onClick={handleSearch}
              className="absolute right-4 top-3 transition-transform hover:scale-75 transform"
            >
              <Image src={Images.Search} alt="/" height={18} width={18} />
            </button>
          </div>
          <div className="relative" onClick={handleCartPage}>
            <button>
              <Image
                src={Images.Bag}
                alt="/"
                height={21}
                width={19}
                className="w-[2-4px]"
              />
            </button>
            <div className="rounded-full h-5 w-5 bg-[#FF4307] absolute top-0 right-[-7px] translate-x-0 translate-y-[-50%]">
              <span className="absolute text-[14px] top-[50%] right-[50%] text-white translate-x-[50%] translate-y-[-50%]">
                {0}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative justify-between flex  my-10 mx-12  xs:hidden lg:flex">
          {stringsArray.map((item, index) => (
            <div key={index}>
              <div
                onMouseEnter={() => toggleMegaMenu(index)}
                className={`flex items-center font-semibold text-xs  cursor-pointer ${
                  item.megaMenuOpen
                    ? "text-PictonBlue font-semibold"
                    : "text-black"
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
                  className="w-auto h-auto bg-[#F2F2F2] z-index1 absolute top-64 p-5 rounded-[10px] shadow-md"
                  onMouseLeave={() => toggleMegaMenu(index)}
                >
                  <div
                    className={`flex text-base ${
                      item.data?.gender.genderheading.length === 0 &&
                      item.data?.framestyle.framestyleheading.length === 0 &&
                      item.data?.frameshape.frameshapeheading.length === 0 &&
                      item.data?.framecolor.framecolorheading.length === 0
                        ? "gap-x-2"
                        : "gap-x-20"
                    } font-normal`}
                  >
                    {item.data?.gender.genderheading.length > 0 && (
                      <div>
                        <h1 className="font-bold text-black ">
                          {item.data?.gender.submenuData.map(
                            (gender, index) => (
                              <h1 key={index}>{gender}</h1>
                            )
                          )}
                        </h1>
                        <ul className="space-y-[-4px]">
                          {item.data?.gender.genderheading.map(
                            (gender, subIndex) => (
                              <li key={subIndex}>
                                <a
                                  href="/advanced-search"
                                  className="hover:text-PictonBlue cursor-pointer text-black font-medium text-xs"
                                >
                                  {gender}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                    {item.data?.brands.brandsheading.length > 0 && (
                      <div>
                        <h1 className="font-bold text-black">
                          {item.data?.brands.submenuData.map(
                            (brands, index) => (
                              <h1 key={index}>{brands}</h1>
                            )
                          )}
                        </h1>
                        <ul className="space-y-[-4px]">
                          {item.data?.brands.brandsheading.map(
                            (brands, subIndex) => (
                              <li key={subIndex}>
                                {" "}
                                <a
                                  href="/advanced-search"
                                  className="hover:text-PictonBlue cursor-pointer text-black font-medium text-xs"
                                >
                                  {brands}{" "}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                    {item.data?.framecolor.framecolorheading.length > 0 && (
                      <div>
                        <h1 className="font-bold text-black">
                          {item.data?.framecolor.submenuData.map(
                            (framecolor, index) => (
                              <h1 key={index}>{framecolor}</h1>
                            )
                          )}
                        </h1>
                        <ul className="space-y-[-4px]">
                          {item.data?.framecolor.framecolorheading.map(
                            (framecolor, subIndex) => (
                              <li key={subIndex}>
                                {" "}
                                <a
                                  href="/advanced-search"
                                  className="hover:text-PictonBlue cursor-pointer text-black font-medium text-xs"
                                >
                                  {framecolor}{" "}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                    {item.data?.framestyle.framestyleheading.length > 0 && (
                      <div>
                        <h1 className="font-bold text-black">
                          {item.data?.framestyle.submenuData.map(
                            (framestyle, index) => (
                              <h1 key={index}>{framestyle}</h1>
                            )
                          )}
                        </h1>
                        <ul className="space-y-[-4px]">
                          {item.data?.framestyle.framestyleheading.map(
                            (framestyle, subIndex) => (
                              <li key={subIndex}>
                                {" "}
                                <a
                                  href="/advanced-search"
                                  className="hover:text-PictonBlue cursor-pointer text-black font-medium text-xs"
                                >
                                  {framestyle}{" "}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                    {item.data?.frameshape.frameshapeheading.length > 0 && (
                      <div>
                        <h1 className="font-bold text-black">
                          {item.data?.frameshape.submenuData.map(
                            (frameshape, index) => (
                              <h1 key={index}> {frameshape}</h1>
                            )
                          )}
                        </h1>
                        <ul className="space-y-[-4px]">
                          {item.data?.frameshape.frameshapeheading.map(
                            (frameshape, subIndex) => (
                              <li key={subIndex}>
                                {" "}
                                <a
                                  href="/advanced-search"
                                  className="hover:text-PictonBlue cursor-pointer text-black font-medium text-xs"
                                >
                                  {frameshape}{" "}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
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

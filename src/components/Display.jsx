import React, { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { AiOutlineHistory } from "react-icons/ai";
import { FaEquals } from "react-icons/fa6";

const Display = ({ value, result, setIsOpen }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sayfa ilk açıldığında localStorage'den oku
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const themeChangeHandler = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
      localStorage.setItem("theme", "light"); // sadece güncelliyoruz
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="w-full h-[351px] px-[34px] pb-[34px] flex flex-col justify-between    ">
      <div className=" pt-[52px] flex items-center w-full ">
        <div className="w-full flex justify-end ">
          <div className="flex items-center justify-between w-[122px] h-[44px]  rounded-[40px] bg-[#a9dcfd] dark:bg-[#1B6A9C] outline-none">
            <div
              onClick={themeChangeHandler}
              className={`h-full w-full ${
                !isDarkMode && "rounded-[40px] bg-[#d8eeff] "
              }  flex items-center justify-center  cursor-pointer`}
            >
              <CiLight
                className={`w-[30px] h-[30px] text-gray-600 dark:text-gray-400 `}
              />
            </div>
            <div
              onClick={themeChangeHandler}
              className={`h-full w-full ${
                isDarkMode && "rounded-[40px] bg-[#003661] "
              } flex items-center justify-center cursor-pointer `}
            >
              <FaRegMoon className="  w-[25px] h-[25px] text-[#37373766] dark:text-gray-300" />
            </div>
          </div>
        </div>
        <div className="w-2/5 flex justify-end  ">
          <AiOutlineHistory
            onClick={() => setIsOpen(true)}
            className="w-[30px] h-[30px] text-gray-500 dark:text-gray-200  cursor-pointer"
          />
        </div>
      </div>
      <div className="">
        <div className="w-[355px] h-[35px] ">
          <p className="text-[#37373780] dark:text-gray-500 text-2xl flex items-center justify-end">
            {value === "" ? "0" : value}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <FaEquals className="dark:text-white w-[23px] h-[23px]" />
          <p className={`dark:text-white text-4xl font-semibold`}>
            {result === "" ? "0" : result}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Display;

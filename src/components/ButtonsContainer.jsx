import React from "react";

const ButtonsContainer = ({
  setValue,
  setResult,
  handleClick,
  calculate,
  clearHandler,
}) => {
  let buttons = [
    "AC",
    "(",
    ")",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "0",
    "00",
    "÷",
    "*",
    "-",
    "+",
    "=",
  ];

  return (
    <div className="rounded-[40px] bg-gradient-to-r from-white via-#F9F9F9 via-#F3F3F3  to-[#F9F9F9] relative">
      <div
        className=" shadow-[0_-10px_30px_rgba(0,0,0,0.1)] rounded-[40px] w-full flex justify-center p-5 gap-5 h-[507px] bg-[radial-gradient(70%_70%_at_0%_0%,_rgba(255,255,255,0.8)_0%,_rgba(255,255,255,0)_35%),linear-gradient(to_top_right,_#BBD1F2,_#A1C5FA,_#94D4FC)]
        dark:bg-gradient-to-tr dark:from-[#0A243D] dark:via-[#123A5A]  dark:to-[#184D69]
      "
      >
        <div className="flex flex-col gap-5  dark:text-white">
          <div className=" w-[260px] h-[70px] rounded-[40px]  bg-gradient-to-r from-[#d8e5f1]   to-[#b4e1fc]  dark:bg-gradient-to-r dark:from-[#0F1F2C]   dark:to-[#113144] ">
            <div className="flex items-center  gap-5">
              {buttons.slice(0, 3).map((button, i) => (
                <div
                  onClick={
                    button === "AC" ? clearHandler : () => handleClick(button)
                  }
                  key={i}
                  className="font-semibold text-2xl w-[70px] h-[70px]  rounded-full flex items-center justify-center  cursor-pointer "
                >
                  {button}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {buttons.slice(3, 15).map((button, i) => (
              <div
                onClick={() => handleClick(button)}
                key={i}
                className="font-semibold text-2xl w-[70px] h-[70px]  rounded-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200
                dark:bg-gradient-to-br dark:from-[#0E2A3F] dark:to-[#112c41] cursor-pointer "
              >
                {button}
              </div>
            ))}
          </div>
        </div>
        <div className=" bg-gradient-to-t from-[#c8e2f8]  to-[#b4e1fc] dark:bg-gradient-to-r dark:from-[#0F1F2C]   dark:to-[#113144] dark:text-white h-[430px] rounded-[40px]">
          <div className="flex flex-col gap-5">
            {buttons.slice(15, 20).map((button, i) => (
              <div
                onClick={button === "=" ? calculate : () => handleClick(button)}
                key={i}
                className={`${
                  button === "="
                    ? "rounded-full bg-[#d8e9f7] dark:bg-[#0f202e] "
                    : ""
                } w-[70px] h-[70px] flex items-center justify-center font-semibold text-3xl cursor-pointer `}
              >
                {button === "*" ? "×" : button}
              </div>
            ))}
          </div>
        </div>


        
      </div>
        <div className="flex items-center justify-center absolute bottom-4 left-[124px] w-[175px] h-[5px]  bg-[#6396C5] dark:bg-[#3D76AB] "></div>
    </div>
  );
};

export default ButtonsContainer;

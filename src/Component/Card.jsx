import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

function Card() {
  const { themeMode, toggleTheme } = useContext(ThemeContext);
  

  return (
    <>
      <div
        className={`${
          themeMode === "light" ? "bg-slate-300" : "bg-gray-700 text-white"
        } text-2xl p-5 text-center`}
      >
        This is container
      </div>
      <div className="flex justify-center items-center my-3">
        <button
          onClick={toggleTheme}
          className={`p-3 text-center bg-blue-700 cursor-pointer rounded active:bg-blue-600`}
        >
          {/* {themeMode==="light"? "dark" : "light"} */}
          Toggle Theme
        </button>
      </div>
    </>
  );
}

export default Card;

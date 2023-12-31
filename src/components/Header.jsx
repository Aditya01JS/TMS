import logo from "../assets/logo-mobile.svg";
import { useState } from "react";
import iconDown from "../assets/icon-chevron-down.svg";
import iconUp from "../assets/icon-chevron-up.svg";
import elipsis from "../assets/icon-vertical-ellipsis.svg";
import HeaderDropdown from "./HeaderDropdown";


function Header() {
    const [openDropdown, setOpendown]= useState(false);
  return (
    <div className="p-4 fixed left-0 bg-white dark:bg-black z-50 right-0">
      <header className=" flex justify-between dark:text-white items-center ">
        
        {/* Left Side */}

        <div className=" flex items-center space-x-2 md:space-x-4">
          <img src={logo} className="h-6 w-6" alt="logo" />
          <h3 className=" hidden md:inline-block font-bold font-sans md:text-4xl">
            Kanban
          </h3>
        
        <div>
          <h3 className="truncate max-w-[200px] md:text-2xl text-xl font-bold md:ml-20 font-sans">
            board name
          </h3>
          <img src={openDropdown ? iconUp : iconDown} alt="dropdown icon" className="w-3 ml-2 cursor-pointer md:hidden"
          onClick={()=> setOpendown(state => !state)} />
        </div>
        </div>
        {/* Right side */}
        
        <div className=" flex space-x-4 items-center md:space-x-6">
           <button className="btn">+ Add New Task</button>

           <button className="btn py-1 px-3 md:hidden">+</button>

           <img src={elipsis} alt="elipsis" className="cursor-pointer h-6" />
        </div>
      </header>

       {openDropdown && <HeaderDropdown  setOpenDropdown={setOpenDropdown}/>}

    </div>
  );
}

export default Header;

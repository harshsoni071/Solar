import React from 'react';
import logo from "../../assets/logo1.png";

function Header({title}) {
  return (
    <>
         <div className="text-center relative flex justify-center items-center bg-blue-600 text-[19px] py-3 text-white font-semibold">
          <div className="flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full absolute left-3 ">
            <img
              src={logo}
            //   width="300px"
              alt="logo"
              className="w-[100%] "
            />
          </div>
          <span>{title}</span>
        </div>
    </>
  )
}

export default Header

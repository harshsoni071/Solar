import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

function Invest() {
  return (
    <>
      <section className="w-[400px] min-h-[100vh] h-auto bg-[#eee] mx-auto relative">
        <Header title={'Invest'}/>

        <div className="bg-white mx-2 py-3 mt-12 ">
          <div className="flex gap-5 py-3 relative">
            <div className="rounded-[4px] w-[190px]  mt-[-60px] top-[-50px] ">
              <img
                src="src\assets\solarInvest.jpg"
                alt="image"
                className=" w-full rounded-[4px]"
              />
            </div>
            <div>
              <h2 className="text-[15px] mt-[-53px] ">TJ-123</h2>
              <h2 className="text-[15px] pt-5 text-red-500">$ 400</h2>
            </div>
          </div>

          <div className="flex justify-between px-3 pt-4 items-center">
            <div>
              <p className="text-sm text-gray-500">120 days</p>
              <span className="text-sm text-gray-500">Cycle</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">120 days</p>
              <span className="text-sm text-gray-500">Cycle</span>
            </div>
            <div>
              <button className=" border px-[35px] py-[3px] text-[15px] rounded-[5px] bg-blue-600 text-white hover:bg-black">
                <FontAwesomeIcon icon={faCartShopping} className="pe-2" />
                Buy
              </button>
            </div>
          </div>
        </div>  

        <div className="bg-white mx-2 py-3 mt-12 ">
          <div className="flex gap-5 py-3 relative">
            <div className="rounded-[4px] w-[190px]  mt-[-60px] top-[-50px] ">
              <img
                src="src\assets\solarInvest.jpg"
                alt="image"
                className=" w-full rounded-[4px]"
              />
            </div>
            <div>
              <h2 className="text-[15px] mt-[-53px] ">TJ-123</h2>
              <h2 className="text-[15px] pt-5 text-red-500">$ 400</h2>
            </div>
          </div>

          <div className="flex justify-between px-3 pt-4 items-center">
            <div>
              <p className="text-sm text-gray-500">120 days</p>
              <span className="text-sm text-gray-500">Cycle</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">120 days</p>
              <span className="text-sm text-gray-500">Cycle</span>
            </div>
            <div>
              <button className=" border px-[35px] py-[3px] text-[15px] rounded-[5px] bg-blue-600 text-white hover:bg-black">
                <FontAwesomeIcon icon={faCartShopping} className="pe-2" />
                Buy
              </button>
            </div>
          </div>
        </div>  

        <div className="bg-white mx-2 py-3 mt-12 ">
          <div className="flex gap-5 py-3 relative">
            <div className="rounded-[4px] w-[190px]  mt-[-60px] top-[-50px] ">
              <img
                src="src\assets\solarInvest.jpg"
                alt="image"
                className=" w-full rounded-[4px]"
              />
            </div>
            <div>
              <h2 className="text-[15px] mt-[-53px] ">TJ-123</h2>
              <h2 className="text-[15px] pt-5 text-red-500">$ 400</h2>
            </div>
          </div>

          <div className="flex justify-between px-3 pt-4 items-center">
            <div>
              <p className="text-sm text-gray-500">120 days</p>
              <span className="text-sm text-gray-500">Cycle</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">120 days</p>
              <span className="text-sm text-gray-500">Cycle</span>
            </div>
            <div>
              <button className=" border px-[35px] py-[3px] text-[15px] rounded-[5px] bg-blue-600 text-white hover:bg-black">
                <FontAwesomeIcon icon={faCartShopping} className="pe-2" />
                Buy
              </button>
            </div>
          </div>
        </div>  

        <Footer/>
      </section>
    </>
  );
}

export default Invest;

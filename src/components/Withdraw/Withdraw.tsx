import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function Withdraw() {
  return (
    <>
      <section className="w-[400px] min-h-[100vh] h-auto bg-white mx-auto relative">
        <Header title="My Wallet" />

        <div className="bg-blue-500 h-[20vh] pt-12">
          <h2 className="text-center text-white text-[14px]">
            Money in your Wallet
          </h2>
        </div>
        <div className="border mx-3 px-3 pt-4 pb-9 m-[-35px] bg-white relative">
          <h2 className="text-center font-semibold text-[17px]">
            Withdraw Money
          </h2>
          <form action="#" className="py-2">
            <div className="flex flex-col my-2">
              <label className="text-blue-600 font-semibold text-[14px]">
                Enter Amount ($)
              </label>
              <input
                type="text"
                placeholder="1000"
                className="border px-2 py-2 rounded-md my-2"
              />
            </div>
            <div className="flex flex-col my-2">
              <label className="text-blue-600 font-semibold text-[14px]">
                UPI ID
              </label>
              <input
                type="text"
                placeholder="Enter Your UPI ID"
                className="border px-2 py-2 rounded-md my-2"
              />
            </div>
          </form>
          <div>
            <div className="flex justify-between pb-2">
              <button className="text-blue-600 font-semibold border-[1px] border-blue-600 w-[100px] py-[3px] rounded-full hover:bg-blue-600 hover:text-white">
                1000
              </button>
              <button className="text-blue-600 font-semibold border-[1px] border-blue-600 w-[100px] py-[3px] rounded-full hover:bg-blue-600 hover:text-white">
                2000
              </button>
              <button className="text-blue-600 font-semibold border-[1px] border-blue-600 w-[100px] py-[3px] rounded-full hover:bg-blue-600 hover:text-white">
                3000
              </button>
            </div>
            <div className="flex justify-between pt-2">
              <button className="text-blue-600 font-semibold border-[1px] border-blue-600 w-[100px] py-[3px] rounded-full hover:bg-blue-600 hover:text-white">
                4000
              </button>
              <button className="text-blue-600 font-semibold border-[1px] border-blue-600 w-[100px] py-[3px] rounded-full hover:bg-blue-600 hover:text-white">
                5000
              </button>
              <button className="text-blue-600 font-semibold border-[1px] border-blue-600 w-[100px] py-[3px] rounded-full hover:bg-blue-600 hover:text-white">
                10000
              </button>
            </div>
          </div>
          <div className="absolute bottom-[-20px] left-24">
          <button className="bg-blue-600 text-white text-[13px] font-semibold py-[7px] px-9 rounded-full hover:text-blue-600 hover:bg-white hover:border-[1px] hover:border-blue-600">
            PROCEED To ADD
          </button>
        </div>
        </div>
        

        {/* <div className="p-4">
          <div className="pt-4">
            <p className="text-[20px] text-white font-semibold">Balance</p>
            <span className="text-[22px] text-white font-semibold">
              Rs 118.4
            </span>
          </div>

          <form className="py-6 space-y-5">
            <div>
              <input
                type="text"
                placeholder="Withdrow amount"
                className="w-[100%] py-3 px-2 rounded-md"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Withdrow password"
                className="w-[100%] py-3 px-2 rounded-md"
              />
            </div>
          </form>

          <p className="py-1 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            architecto rem repudiandae, porro numquam facilis!
          </p>

          <button className="w-[100%] my-5 bg-blue-800 text-white py-[11px] text-[18px] rounded-full hover:bg-white hover:text-black">
            Withdraw
          </button>
        </div>
        <div className="px-3 pt-4  bg-neutral-400 text-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            tempora.
          </p>
          <div className="text-center">
            <button className="w-[65%] my-5 bg-blue-800 text-white py-[10px] text-[17px] rounded-[10px] hover:bg-white hover:text-black">
              "9929393939" Number
            </button>
          </div>
        </div> */}
      </section>
    </>
  );
}

export default Withdraw;

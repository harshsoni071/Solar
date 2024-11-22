import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function Withdraw() {
  return (
    <>
      <section className="w-[400px] min-h-[100vh] h-auto bg-blue-400 mx-auto relative">
        <Header title="Withdraw" />
        <div className="p-4">
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
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Withdraw;

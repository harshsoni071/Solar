import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function Purchased() {
  return (
    <>
      <section className="w-[400px] min-h-[100vh] h-auto bg-[#eee] mx-auto relative">
        <Header title={"Purchased"} />

        <div className="p-4"> 
          <div className=" rounded-[5px] h-[180px] w-[100%]">
            <img
              src="src\assets\solarInvest.jpg"
              alt="image"
              className="rounded-[5px] w-[100%] h-full"
            />
          </div>

          <div>
            <h2 className="font-bold pt-3">My Investment:</h2>

            <div className="bg-white rounded-md pt-3 pb-4 my-3">
              <div className="flex py-2">
                <span className="w-[40%] ps-3 text-[14px]">SQR-480</span>
                <span className="pe-2 ps-3 text-[14px]">Invest 2023-11-09 11-44-22</span>
              </div>
              <div className="flex py-3">
                <div className="w-[40%] ps-3">
                  <img src="src\assets\solar1.png" alt="image" />
                </div>
                <div className="pe-2 ps-3">
                  <p className="text-[14px]">Recycle 2023-11-09 11-44-22</p>
                  <div className="flex justify-between text-[14px] pt-3">
                    <div className="flex flex-col">
                      <p>$4.17</p>
                      <p>Hourly</p>
                    </div>
                    <div className="flex flex-col">
                      <p>$100.08</p>
                      <p>Daily</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-md pt-3 pb-4 my-3">
              <div className="flex py-2">
                <span className="w-[40%] ps-3 text-[14px]">SQR-480</span>
                <span className="pe-2 ps-3 text-[14px]">Invest 2023-11-09 11-44-22</span>
              </div>
              <div className="flex py-3">
                <div className="w-[40%] ps-3">
                  <img src="src\assets\solar1.png" alt="image" />
                </div>
                <div className="pe-2 ps-3">
                  <p className="text-[14px]">Recycle 2023-11-09 11-44-22</p>
                  <div className="flex justify-between text-[14px] pt-3">
                    <div className="flex flex-col">
                      <p>$4.17</p>
                      <p>Hourly</p>
                    </div>
                    <div className="flex flex-col">
                      <p>$100.08</p>
                      <p>Daily</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-md pt-3 pb-4 my-3">
              <div className="flex py-2">
                <span className="w-[40%] ps-3 text-[14px]">SQR-480</span>
                <span className="pe-2 ps-3 text-[14px]">Invest 2023-11-09 11-44-22</span>
              </div>
              <div className="flex py-3">
                <div className="w-[40%] ps-3">
                  <img src="src\assets\solar1.png" alt="image" />
                </div>
                <div className="pe-2 ps-3">
                  <p className="text-[14px]">Recycle 2023-11-09 11-44-22</p>
                  <div className="flex justify-between text-[14px] pt-3">
                    <div className="flex flex-col">
                      <p>$4.17</p>
                      <p>Hourly</p>
                    </div>
                    <div className="flex flex-col">
                      <p>$100.08</p>
                      <p>Daily</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Purchased;

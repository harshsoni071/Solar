import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import solar1 from "../../assets/solar1.png";
import solar2 from "../../assets/solor2.jpg";
import wallet from "../../assets/wallet.png";
import payment from "../../assets/recharge.png";
import download from "../../assets/download.png";
import { Link } from "react-router-dom";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
// import logo from '../../assets/logo.jpeg';

function Home() {
  return (
    <>
      <section className="w-[400px] min-h-[100vh] h-auto bg-[#eee] mx-auto relative">
        <Header title={"Solar"}/>

        <div>
          <Carousel showThumbs={false}  infiniteLoop={true} autoPlay={true}>
            <div className="h-[200px]">
              <img src={solar1} className="object-cover h-48 w-96"/>
              {/* <p className="legend">Legend 1</p> */}
            </div>
            <div className="h-7">
            <img src={solar2} className=" object-cover h-48 w-96"/>
              {/* <p className="legend">Legend 2</p> */}
            </div>
            <div className="h-7">
              <img src="assets/3.jpeg" className="object-contain"/>
              {/* <p className="legend">Legend 3</p> */}
            </div>
          </Carousel>
        </div>

        <div className="px-3 py-4">
          <h2 className="text-[17px] py-3 font-semibold">Contect Us</h2>
          <div className="flex justify-around bg-white py-3 rounded-md">
            <Link to={""} className="flex flex-col">
              <img src={wallet} width="50px" />
              <span className=" text-[14px]">Withdrow</span>
            </Link>

            <Link to={""} className="flex flex-col">
              <img src={payment} width="50px" />
              <span className="pt-1 text-[14px]">Recharge</span>
            </Link>

            <Link to={""} className="flex flex-col">
              <img src={download} width="50px" />
              <span className="pt-1 text-[14px]">Download</span>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-[17px] py-3 px-3 font-semibold">About Us</h2>
          <p className="bg-white px-3 py-3 text-[15px]">
          Solar power companies in the chain marketing model are revolutionizing the renewable energy industry by offering innovative solar solutions while empowering a network of distributors to promote clean energy. These companies provide individuals with the opportunity to earn passive income by helping others switch to solar power. Through a network of distributors, they reach a wider audience and contribute to sustainable energy solutions.
          </p>
        </div>

        <Footer/>
      </section>
    </>
  );
}

export default Home;

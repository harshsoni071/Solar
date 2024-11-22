import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

function Home() {
  return (
    <>
      <section className="w-[400px] min-h-[100vh] h-auto bg-[#eee] mx-auto relative">
        <Header title={"Solar"} />

        <div>
          <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
            <div className="h-[200px]">
              <img src="src\assets\solar1.png" className="object-cover h-48 w-96" />
            </div>
            <div className="h-7">
              <img src="src\assets\solor2.jpg" className=" object-cover h-48 w-96" />
            </div>
            <div className="h-7">
              <img src="src\assets\solar3.jpg" className="object-contain" />
            </div>
          </Carousel>
        </div>

        <div className="px-3 py-4">
          <h2 className="text-[17px] py-3 font-semibold">Contect Us</h2>
          <div className="flex justify-around bg-white py-3 rounded-md">
            <Link to={"/withdraw"} className="flex flex-col">
              <img src="src\assets\wallet.png" width="45px" />
              <span className="pt-1 text-[13px]">Withdrow</span>
            </Link>

            <Link to={"/recharge"} className="flex flex-col">
              <img src="src\assets\recharge.png" width="45px" />
              <span className="pt-1 text-[13px]">Recharge</span>
            </Link>

            <Link to={"/ticket"} className="flex flex-col">
              <img src="src\assets\download.png" width="45px" />
              <span className="pt-1 text-[13px]">Download</span>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-[17px] py-3 px-3 font-semibold">About Us</h2>
          <div className="bg-white px-3 py-3 text-[15px]">
            <p>
              Solar power companies in the chain marketing model are
              revolutionizing the renewable energy industry by offering
              innovative solar solutions while empowering a network of
              distributors to promote clean energy. These companies provide
              individuals with the opportunity to earn passive income by helping
              others switch to solar power. Through a network of distributors,
              they reach a wider audience and contribute to sustainable energy
              solutions.
            </p><br/>
            <h2 className="font-bold pb-3">How it Works:</h2>

            <ol className="space-y-3">
              <li>
                1. Sign-Up Process:* Individuals interested in joining the company
                as distributors can sign up by purchasing a starter kit or
                becoming a part of the solar marketing network. This kit may
                include materials on solar products, sales training, and
                marketing tools.
              </li>
              <li>
                2. Promote Solar Products:* Distributors are then responsible
                for selling solar panels, solar batteries, inverters, and
                related solar technology to customers. They educate potential
                buyers on the benefits of solar energy, including long-term
                savings on electricity bills, environmental sustainability, and
                energy independence.
              </li>
              <li>
                3. Recruitment:* In addition to selling solar products,
                distributors are encouraged to recruit others into the network,
                building their own teams. Each new recruit (downline) becomes a
                part of the distributor’s network, and they earn commissions on
                the sales made by their recruits, creating a chain of sales and
                recruits.
              </li>
              <li>
                4. Commissions and Incentives:* Distributors earn commissions on
                both their direct sales and the sales made by their recruits.
                This incentivizes the growth of the distributor network. The
                company often offers bonuses, travel rewards, and leadership
                programs to motivate top performers.
              </li>
              <li>
                5. Training and Support:* Solar chain marketing companies
                typically provide continuous training, support, and marketing
                materials to help their distributors succeed. This includes
                training on how to sell solar products effectively, build a
                network, and manage customer relationships.
              </li>
            </ol><br/>

            <h2 className="pb-2 font-bold">Benefits of Solar Power Chain Marketing:</h2>

            <ul className="space-y-3 list-disc ps-2">
              <li>
                Earn Passive Income:* Distributors have the potential to earn
                not just from direct sales but also from the sales generated by
                their recruits, creating a passive income stream.
              </li>
              <li>
                Promote Clean Energy:* Distributors are promoting renewable
                energy and contributing to environmental sustainability, making
                this business model attractive for eco-conscious individuals.
              </li>
              <li>
                Low Initial Investment:* Compared to traditional businesses,
                joining a solar power MLM often requires a relatively low
                initial investment, making it accessible to many people.
              </li>
              <li>
                Flexibility:* Many distributors can work from home or
                remotely, which provides flexibility and the opportunity to
                manage their schedules.
              </li>
            </ul>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Home;

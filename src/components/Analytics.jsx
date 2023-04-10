import React from "react";
import Laptop from "../assets/laptop.jpeg";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold text-xl">
            Data Analytics Dashboard
          </p>
          <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl text-black py-4">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            maiores cum ipsa corporis sint a, quod ea vel inventore dignissimos,
            asperiores voluptatem odio, cumque eveniet ad similique blanditiis.
            Obcaecati, eveniet!
          </p>
          <button className="font-medium my-4 rounded-md bg-black text-[#00df9a] w-[200px] py-3 md:mx-0 mx-auto">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;

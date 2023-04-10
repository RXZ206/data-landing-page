import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-3">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 ">
          <h1 className="md:text-3xl lg:text-4xl text-2xl font-bold">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="py-2">Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4 flex flex-col">
          <form className="flex flex-col sm:flex-row items-center justify-between">
            <input
              placeholder="Enter Email"
              className="text-black rounded-md p-3 flex w-full"
              type="email"
            />
            <button className="ml-4 bg-[#00df9a] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black">
              Notify Me
            </button>
          </form>
          <p>
            We care about the protection of your data. Read our{" "}
            <a href="/" className="underline text-[#00df9a]">
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

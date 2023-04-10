import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="text-gray-300 bg-black py-16 px-4 max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8">
      <div>
        <h1 className="w-full font-bold text-3xl text-[#00df9a]">REACT.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum
          nihil optio ab a mollitia, sequi alias dignissimos consequuntur saepe.
        </p>
        <div className="my-6 flex md:w-[75%] justify-between">
          <FaDribbbleSquare size={30}></FaDribbbleSquare>
          <FaFacebookSquare size={30}></FaFacebookSquare>
          <FaGithubSquare size={30}></FaGithubSquare>
          <FaInstagramSquare size={30}></FaInstagramSquare>
          <FaTwitterSquare size={30}></FaTwitterSquare>
        </div>
      </div>
      <div className="px-4 lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="text-gray-400 font-medium">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="text-gray-400 font-medium">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="text-gray-400 font-medium">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="text-gray-400 font-medium">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

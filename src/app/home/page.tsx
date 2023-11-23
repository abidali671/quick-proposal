import Image from "next/image";
import React from "react";
import "../../styles/global.css";

const Home = () => {
  return (
    <div className="bg-gray-dark  min-h-screen  md:h-screen    relative">
      <div
        className="hero-overlay "
        style={{
          backgroundImage:
            "url('https://n.foxdsgn.com/twilo/wp-content/uploads/2022/04/Group-49.png')",
        }}
      ></div>
      <div className="warpper">
        <nav className="hero-nav">
          <Image
            alt="logo"
            width={110}
            height={110}
            src="https://n.foxdsgn.com/twilo/wp-content/uploads/2020/10/Group-52-1.png"
          />
          <ul className="hero-ul">
            <li>Home</li>
            <li>Pages</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Contact</li>
            <li>
              <button className="primary-btn">Get Started</button>
            </li>
          </ul>
        </nav>
        <div className="main-hero">
          <div className="hero-left">
            <h1 className="text-6xl font-bold leading-[65px]">
              Craft Compelling Proposals in{" "}
              <span className="text-orange-light">
                Minutes with Quick Proposal
              </span>
            </h1>
            <p className="text-[#618A88]">
              Quick Proposal is an AI-powered writing tool that helps you create
              winning Upwork and freelance job proposals in no time.
            </p>

            <div className="pt-5">
              <button className="primary-btn">Get Started</button>
            </div>
          </div>
          <div className="hero-right">
            <Image
              src="https://n.foxdsgn.com/twilo/wp-content/uploads/2022/08/Group-2325-2-768x711.png"
              alt="work-image"
              width="900"
              className="w-full  object-contain"
              height="900"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

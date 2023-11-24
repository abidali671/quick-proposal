import Image from "next/image";
import React from "react";
import "../../styles/global.css";

const Home = () => {
  return (
    <div>
      {/* hero section start*/}
      <div className="bg-gray-dark  min-h-screen  md:h-screen   relative">
        <div
          className="hero-overlay"
          style={{
            backgroundImage:
              "url('https://n.foxdsgn.com/twilo/wp-content/uploads/2022/04/Group-49.png')",
          }}
        ></div>
        <div className="wrapper">
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
              <h1 className="text-6xl font-bold leading-[66px] text-white">
                Craft Compelling Proposals in{" "}
                <span className="text-orange-light">
                  Minutes with Quick Proposal
                </span>
              </h1>
              <p className="text-[#618A88]">
                Quick Proposal is an AI-powered writing tool that helps you
                create winning Upwork and freelance job proposals in no time.
              </p>

              <div className="pt-5">
                <button className="primary-btn">Get Started</button>
              </div>
            </div>
            <div className="hero-right">
              <Image
                src="https://n.foxdsgn.com/twilo/wp-content/uploads/2022/08/Group-2325-2-768x711.png"
                alt="work-image"
                width="1000"
                className="w-full  object-contain"
                height="1000"
              />
            </div>
          </div>
        </div>
      </div>
      {/* hero section end*/}

      {/* Discover features start */}
      <div className="py-32  wrapper">
        <h6 className="font-bold text-green-light">STRUCTURE</h6>

        <div className="main-discover">
          <div className="discover-left">
            <h3 className="text-5xl font-bold leading-tight">
              Discover all
              <span className="text-orange-light"> our features</span>
            </h3>
            <p className="text-gray-light ">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus temporibus
              autem.
            </p>
            <div className="columns-2 w-11/12">
              <p className="font-medium">Trends Tracking </p>
              <br />
              <p className="font-medium">Loyalty Programs</p>
              <p className="font-medium"> Vendor Management </p>
              <br />
              <p className="font-medium"> Billing</p>
            </div>
            <button className="action-btn">
              All categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
          <div className="basis-5/12">
            <Image
              alt="image"
              height="600"
              width="600"
              src="https://n.foxdsgn.com/twilo/wp-content/uploads/2022/08/Group-2335.png"
            />
          </div>
        </div>

        <div className="flex pt-32 md:flex-nowrap flex-wrap gap-4">
          <div className="discover-card ">
            <h6 className="font-bold text-green-light">STRATEGY</h6>
            <h3 className="font-bold text-2xl">Build your experience</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
            <button className="action-btn">
              All categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
          <div className="discover-card ">
            <h6 className="font-bold text-green-light">ABOUT US</h6>
            <h3 className="font-bold text-2xl">Working process</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
            <button className="action-btn">
              All categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
          <div className="discover-card ">
            <h6 className="font-bold text-green-light">DASHBOARD</h6>
            <h3 className="font-bold text-2xl">Product features</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
            <button className="action-btn">
              All categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Discover features end */}
    </div>
  );
};

export default Home;

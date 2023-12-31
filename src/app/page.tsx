"use client";

import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import config from "@/utils/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import BenefitsImage from "@/assets/benefits_vector.svg";
import FeaturesImage from "@/assets/features_vector.svg";
import FeaturesSectionImage from "@/assets/feature_section_vector.svg";
import { useStore } from "@/lib/Context";

const Home = () => {
  const { user } = useStore();

  const getStartedLink = user ? "/dashboard" : "/register";
  return (
    <div>
      <div id="home" className="bg-gray-dark relative">
        <div
          className="hero-overlay"
          style={{
            backgroundImage:
              "url('https://n.foxdsgn.com/twilo/wp-content/uploads/2022/04/Group-49.png')",
          }}
        ></div>
        <div className="wrapper">
          <div className="main-hero">
            <div className="hero-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-snug md:leading-[60px] text-white">
                Craft Compelling Proposals in
                <span className="text-orange-light">
                  Minutes with Quick Proposal
                </span>
              </h1>
              <p className="text-[#618A88]">
                Quick Proposal is an AI-powered writing tool that helps you
                create winning Upwork and freelance job proposals in no time.
              </p>

              <div className="pt-5 w-32">
                <Link href={getStartedLink}>
                  <Button label="Get Started" />
                </Link>
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
      {/* Discover features start */}
      <div id="features" className="py-32  wrapper">
        <div className="main-discover">
          <div className="discover-left">
            <div>
              <h6 className="font-bold text-green-light">STRUCTURE</h6>
              <h3 className="text-3xl font-bold leading-tight">
                See the Features That Make{" "}
                <span className="text-orange-light">Quick Proposal</span> a
                Must-Have for{" "}
                <span className="text-orange-light">Freelancers</span>
              </h3>
            </div>
            <p className="text-gray-light text-sm">
              Forget proposal panic! Unleash the secret weapon of top
              freelancers: Quick Proposal. Explore features that boost your win
              rate, slash writing time, and make you a client magnet. Dive in
              and discover why savvy freelancers can&apos;t live without it.
            </p>
          </div>
          <div className="basis-5/12">
            <Image
              alt="image"
              height="600"
              width="600"
              src={FeaturesSectionImage}
            />
          </div>
        </div>
        <div className="main-discover">
          <div className="basis-5/12">
            <Image alt="image" height="600" width="600" src={BenefitsImage} />
          </div>
          <div className="discover-left">
            <h3 className="text-3xl font-bold leading-tight text-orange-light">
              Benefits
            </h3>
            <ul className="flex flex-col gap-2 text-gray-light text-sm">
              {config.benefitsList.map((item, index) => (
                <li key={index}>
                  <span className="font-semibold">{item.label}:</span>{" "}
                  {item.content}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="main-discover">
          <div className="discover-left">
            <h3 className="text-3xl font-bold leading-tight text-orange-light">
              Features
            </h3>
            <ul className="flex flex-col gap-2 text-gray-light text-sm">
              {config.featuresList.map((item, index) => (
                <li key={index}>
                  <span className="font-semibold">{item.label}:</span>{" "}
                  {item.content}
                </li>
              ))}
            </ul>
          </div>
          <div className="basis-5/12">
            <Image alt="image" height="600" width="600" src={FeaturesImage} />
          </div>
        </div>
      </div>
      {/* Discover features end */}

      {/* pricing section start */}
      <div
        id="pricing"
        className="wrapper py-24 bg-[url('https://n.foxdsgn.com/twilo/wp-content/uploads/2022/04/Frame-55.png')]  bg-center bg-contain"
      >
        <h6 className="text-green-light font-bold text-center tracking-widest	">
          PRICING PLANS
        </h6>
        <h3 className="text-3xl text-center font-bold">
          Explore Our{" "}
          <span className="text-orange-light">Affordable Plans Tailored </span>
          <br />
          to Meet Your Needs
        </h3>

        <div className="flex md:flex-row flex-col gap-7 justify-between py-10">
          <div className="pricing-card">
            <div className="pt-10 flex flex-col gap-4">
              <h6 className="text-green-light font-bold text-2xl">Starter</h6>
              <p>For small team just getting started.</p>
            </div>

            <div className="pt-10 flex flex-col gap-4">
              <h1 className="text-5xl font-bold font-sans">$50</h1>
              <ul className="pricing-list">
                <li className="list-disc ">Email ticketing</li>
                <li>Customer Management</li>
                <li>Mobile Apps</li>
                <li>Email Support</li>
              </ul>
              <div className="w-32">
                <Link href={getStartedLink}>
                  <Button label="Get Started" />
                </Link>
              </div>
            </div>
          </div>
          <div className="pricing-card">
            <div className="pt-10 flex flex-col gap-4">
              <h6 className="text-green-light font-bold text-2xl">Team</h6>
              <p>For small team just getting started.</p>
            </div>

            <div className="pt-10 flex flex-col gap-4">
              <h1 className="text-5xl font-bold font-sans">$150</h1>
              <ul className="pricing-list">
                <li className="list-disc text-lg">Email ticketing</li>
                <li>Customer Management</li>
                <li>Mobile Apps</li>
                <li>Email Support</li>
              </ul>
              <div className="w-32">
                <Link href={getStartedLink}>
                  <Button label="Get Started" />
                </Link>
              </div>
            </div>
          </div>
          <div className="pricing-card">
            <div className="pt-10 flex flex-col gap-4">
              <h6 className="text-green-light font-bold text-2xl">
                Enterprise
              </h6>
              <p>For small team just getting started.</p>
            </div>

            <div className="pt-10 flex flex-col gap-4">
              <h1 className="text-5xl font-bold font-sans">$250</h1>
              <ul className="pricing-list">
                <li className="list-disc text-lg">Email ticketing</li>
                <li>Customer Management</li>
                <li>Mobile Apps</li>
                <li>Email Support</li>
              </ul>
              <div className="w-32">
                <Link href={getStartedLink}>
                  <Button label="Get Started" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* pricing section end */}
      <ContactForm />
      <div id="testimonials" className="wrapper py-24">
        <h6 className="text-green-light font-bold text-center tracking-widest	">
          TESTIMONIALS
        </h6>
        <h3 className="text-3xl text-center font-bold">
          See What <span className="text-orange-light">Freelancers</span> Are
          Saying About
          <br />
          <span className="text-orange-light">Quick Proposal</span>
        </h3>

        {/* Testimonial Section */}
      </div>
      {/* More Projects */}
      <div className="wrapper">
        <div className="py-24 text-center gap-y-2 bg-gray-dark rounded-lg">
          <h3 className="text-3xl text-center font-bold text-white">
            Ready to Start Winning{" "}
            <span className="text-orange-light">More Projects </span>
          </h3>
          <p className="text-sm mb-10 text-gray-400">
            Sign up for Quick Proposal today and start creating winning
            proposals in minutes
          </p>
          <Link href={getStartedLink}>
            <Button
              className="mx-auto col-span-3 max-w-60"
              type="submit"
              label="Get Started For Free"
            />
          </Link>
        </div>
      </div>
      {/* More Projects end */}
      <Footer />
    </div>
  );
};

export default Home;

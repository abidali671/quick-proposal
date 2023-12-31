import { LogoLight } from "@/assets/icon";
import Link from "next/link";
import React from "react";
import FeedbackForm from "./FeedbackForm";

const Footer = () => {
  return (
    <div className="wrapper pt-32 pb-10">
      <div className="grid grid-cols-10 gap-5 px-5">
        <div className="col-span-10 lg:col-span-3 ">
          <LogoLight />
          <p className="py-4 text-sm text-gray-500">
            Quick Proposal is an AI-powered writing tool that helps you create
            winning Upwork and freelance job proposals in no time.
          </p>
        </div>
        <div className="col-span-10 md:col-span-5 lg:col-span-2">
          <h3 className="font-bold text-xl text-footer-link">Pages</h3>
          <ul className="flex flex-col gap-2  text-footer-link  py-7">
            <li>Home</li>
            <li>Pricing</li>
            <li>Contact </li>
            <li>App</li>
          </ul>
        </div>
        <div className="col-span-10 md:col-span-5 lg:col-span-2">
          <h3 className="font-bold text-xl text-footer-link">Contact info</h3>
          <ul className="footer-ul py-7 grid gap-2   sm:place-items-start    place-items-center  ">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4  "
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
              <Link href="https://www.facebook.com/abid.saeed.ali">
                <p>Facebook</p>
              </Link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>

              <Link href="https://www.instagram.com/abid_ali_671/">
                <p>Instagram</p>
              </Link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
              <Link href="https://www.linkedin.com/in/abid-ali-89ab4a1bb/">
                <p>Linkedin</p>
              </Link>
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <p>+92 3248218854</p>
            </li>
          </ul>
        </div>
        <div className="col-span-10 lg:col-span-3">
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="contacts flex flex-col justify-center text-center items-center gap-5 py-10 text-black">
        <h2 className="font-bold">
          Feel free to talk to us about your Projects
        </h2>
        <ul className="flex gap-5 cursor-pointer">
          <li>
            <Youtube />
          </li>
          <li>
            <Facebook />
          </li>
          <li>
            <Twitter />
          </li>
          <li>
            <Instagram />
          </li>
        </ul>
        <button className="btn btn-send items-center text-center border border-black">
          Contact Us!
        </button>
      </div>
      <footer className="text-center border-t border-line border-opacity-45 p-6  bg-light">
        <p className="mb-0 text-xs text-black">
          Viter Portfoliio 2025 - Developed by Zhanne Elijah Mariano
        </p>
      </footer>
    </>
  );
};

export default Footer;

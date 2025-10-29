import React from "react";
import { FaFacebookF, FaInstagram, FaDiscord, FaXTwitter, FaGithub } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#0a0b18] text-white text-center py-12">
      {/* Logo */}
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-5xl font-extrabold tracking-widest">JEYA</h1>
        <span className="text-5xl font-extrabold tracking-widest bg-cyan-400 text-[#0a0b18] px-4 ml-2 rounded">
          AYEJ
        </span>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 text-2xl mb-8">
        <a
          href="https://www.facebook.com/share/1A5cMcqxXQ/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          <FaFacebookF />
        </a>
        <a
          href="mailto:justinemariano494@gmail.com"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          <HiOutlineMail />
        </a>
        <a
          href="https://www.instagram.com/justt_jeyy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://discord.com/jyang"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          <FaDiscord />
        </a>
        <a
          href="https://twitter.com/jxxtine"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://github.com/JeyaMariano"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          <FaGithub />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400">
        All rights reserved ©2025
      </p>
    </footer>
  );
};

export default Footer;

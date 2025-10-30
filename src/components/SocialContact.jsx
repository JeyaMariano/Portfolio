import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaGithub, FaPhoneAlt } from "react-icons/fa";

const SocialContact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me!</h2>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {/* Gmail */}
        <a
          href="https://mail.google.com/mail/u/0/#inbox"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div className="p-4 rounded-full hover:bg-gray-700 transition">
            <FaEnvelope className="text-red-400 text-4xl" />
          </div>
          <span className="mt-2 text-white text-sm">Gmail</span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/16CVtjmFeu/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div className="p-4 rounded-full hover:bg-gray-700 transition">
            <FaFacebook className="text-blue-400 text-4xl" />
          </div>
          <span className="mt-2 text-white text-sm">Facebook</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/justt_jeyy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div className="p-4 rounded-full hover:bg-gray-700 transition">
            <FaInstagram className="text-pink-400 text-4xl" />
          </div>
          <span className="mt-2 text-white text-sm">Instagram</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/JeyaMariano"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div className="p-4 rounded-full hover:bg-gray-700 transition">
            <FaGithub className="text-gray-200 text-4xl" />
          </div>
          <span className="mt-2 text-white text-sm">GitHub</span>
        </a>
      </div>

      {/* Contact Numbers */}
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <div className="flex flex-col gap-3 items-center">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-blue-400 text-lg" />
            <span className="text-lg">0963 462 0599</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-blue-400 text-lg" />
            <span className="text-lg">0992 226 3994</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 mt-12 border-t border-gray-700 w-full">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">Justine Ann Mariano</span>. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default SocialContact;

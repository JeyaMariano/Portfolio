import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const SocialContact = () => {
  return (
    <div id="contact" className="min-h-screen bg-black flex flex-col items-center justify-center p-6" 
    style={{
      backgroundImage: "url('https://gifdb.com/images/high/black-background-tuning-tecdf32yo7hfezz8.gif')", // Ensure it's inside `public/`
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}>
      <h2 className="text-4xl font-bold text-white mb-6">Contact Me!</h2>

      <div className="flex space-x-6">
        {/* Gmail */}
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <div className="bg-transparent p-4 rounded-full hover:bg-gray-600 transition">
            <FaEnvelope className="text-red-400 text-3xl" />
          </div>
          <span className="text-white mt-2">Gmail</span>
        </a>

        {/* Facebook */}
        <a href="https://www.facebook.com/share/16CVtjmFeu/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <div className="bg-transparent p-4 rounded-full hover:bg-gray-600 transition">
            <FaFacebook className="text-blue-400 text-3xl" />
          </div>
          <span className="text-white mt-2">Facebook</span>
        </a>

        {/* Instagram */}
        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fjustt_jeyy%3Figsh%3DMXU4b2R4dnE5djI3Nw%253D%253D%26fbclid%3DIwZXh0bgNhZW0CMTAAAR1VHl7I-qepZQeBjUT_bQjB30keZrOuNYGy0oHEcFpvLt3E-HLOMlHl9r4_aem_vEz5MtDIIcFjBlXJdkZHAg&h=AT2qAX4NlhljThfkag0RndiBOJGTiaeH8aCiXHv6x6NSbcYzEa3hMjzrkVIlDhntbDG3Z2B0ZoCRby8HhQiBm7nUeOVjZ17df92nrAjVvr5COVXtx0fvsltqyjtYgufisPXPcg" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <div className="bg-transparent p-4 rounded-full hover:bg-gray-600 transition">
            <FaInstagram className="text-orange-300 text-3xl" />
          </div>
          <span className="text-white mt-2">Instagram</span>
        </a>


        {/* GitHub */}
        <a href="https://github.com/JeyaMariano" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <div className="bg-transparent p-4 rounded-full hover:bg-gray-600 transition"
          >
            <FaGithub className="text-white text-3xl" />
          </div>
          <span className="text-white mt-2">GitHub</span>
        </a>      
      </div>

      <div className="bg-black text-white p-6 rounded-lg max-w-md mx-auto">
<h2 className="text-xl font-bold mb-4 text-center">Get in Touch</h2>
<div className="flex items-center gap-3 mb-2">
  <FaPhoneAlt className="text-blue-500" />
  <span className="text-lg">09634620599</span>
</div>
<div className="flex items-center gap-3 mb-2">
  <FaPhoneAlt className="text-blue-500" />
  <span className="text-lg">09922263994</span>
</div>

</div>

      <footer className="bg-black text-white text-center py-4 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} Justine Ann Mariano. All Rights Reserved.
      </p>
    </footer>
    </div>
  );
};





export default SocialContact;

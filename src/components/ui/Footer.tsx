import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="  py-12">
      <div className="container mx-auto px-6">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8 max-sm:items-center">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Alishba Blogs</h3>
            <p className="text-lg">
              Alishba Blogs covers the latest celebrity gossip, trends, and entertainment news. Join us for exciting stories and updates!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" className="text-lg hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-lg hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-lg hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-lg hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl hover:text-purple-300 transition-all" />
              </a>
              <a href="https://github.com/Alishba-Anjum" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-3xl hover:text-purple-300 transition-all" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl hover:text-purple-300 transition-all" />
              </a>
              <a href="www.linkedin.com/in/alishba-ahmed-khan-93895a2ba" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl hover:text-purple-300 transition-all" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="mb-4">Get the latest gossip and updates straight to your inbox.</p>
            <form action="#" method="POST" className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 mb-3 sm:mb-0 sm:w-2/3 rounded-lg text-black"
              />
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-lg sm:w-1/3 ml-0 sm:ml-3 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t  pt-8 text-center">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} Alishba Blogs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

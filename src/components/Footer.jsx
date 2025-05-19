import { FaYoutube, FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-base-200 dark:bg-gray-900 text-base-content dark:text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">🎥 Quickazone Movies</h3>
          <p className="text-sm leading-relaxed">
            Discover, stream, and enjoy the best movies from around the world. Your ultimate movie
            destination — powered by passion and popcorn!
          </p>
        </div>

        {/* Top Genres */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Top Genres</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/genres/action" className="hover:underline">Action</a></li>
            <li><a href="/genres/drama" className="hover:underline">Drama</a></li>
            <li><a href="/genres/comedy" className="hover:underline">Comedy</a></li>
            <li><a href="/genres/horror" className="hover:underline">Horror</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Support</h4>
          <ul className="text-sm space-y-2">
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Follow Us</h4>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
              aria-label="Facebook"
            >
              <FaSquareFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Quickazone Movies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

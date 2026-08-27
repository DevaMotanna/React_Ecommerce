import { Heart } from "lucide-react";
import Container from "../common/Container";

const Footer = () => (
  <footer className="bg-gray-900 text-white border-t border-gray-800">
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        <div>
          <h3 className="text-xl font-bold mb-4">Shopify</h3>
          <p className="text-gray-400 mb-4">
            Your one-stop shop for quality products at great prices.
          </p>
          <div className="flex space-x-4">
            {/* <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer" /> */}
            {/* <Facebook className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-pink-400 cursor-pointer" /> */}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Customer Care</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Help
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4 text-sm">
            Get the latest updates and offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
        <p>
          Made with <Heart className="w-4 h-4 inline text-red-500 mx-1" /> for
          great shopping experience © 2026 Shopify. All rights reserved.
        </p>
      </div>
    </Container>
  </footer>
);

export default Footer;

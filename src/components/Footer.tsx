
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Safety Information
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Cancellation Options
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Covid-19 Response
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Disaster Relief
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Support Hosts
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Anti-Discrimination
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Hosting</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Try Hosting
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Protection for Hosts
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Hosting Resources
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Community Forum
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Learn about features
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Investors
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} StayScape, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary text-sm">
              Privacy
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary text-sm">
              Terms
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

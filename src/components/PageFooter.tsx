import React from 'react';
import Link from 'next/link';

const linkGroups = [
  {
    title: 'Account',
    links: [
      { name: 'Log In', href: '#' },
      { name: 'Sign Up', href: '#' },
      { name: 'Redeem a Gift Card', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#' },
      { name: 'Environmental Initiatives', href: '#' },
      { name: 'Factories', href: '#' },
      { name: 'DEI', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'International', href: '#' },
      { name: 'Accessibility', href: '#' },
    ],
  },
  {
    title: 'Get Help',
    links: [
      { name: 'Help Center', href: '#' },
      { name: 'Return Policy', href: '#' },
      { name: 'Shipping Info', href: '#' },
      { name: 'Bulk Orders', href: '#' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { name: 'Facebook', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'Affiliates', href: '#' },
      { name: 'Our Stores', href: '#' },
    ],
  },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Do Not Sell or Share My Personal Information', href: '#' },
  { name: 'CS Supply Chain Transparency', href: '#' },
  { name: 'Vendor Code of Conduct', href: '#' },
  { name: 'Sitemap Pages', href: '#' },
  { name: 'Sitemap Products', href: '#' },
];

const PageFooter = () => {
  return (
    <footer className="bg-neutral-50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Link Groups */}
          <div className="flex flex-col sm:flex-row gap-12 flex-1">
            {linkGroups.map((group) => (
              <div key={group.title} className="flex-1">
                <h3 className="font-bold text-gray-800 mb-4 text-sm">{group.title}</h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-gray-600 hover:text-gray-800 text-sm transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Email Signup */}
          <div className="lg:w-80">
            <form className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
                required
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-gray-700 text-white px-4 flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Legal Section */}
      <div className="border-t border-gray-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-800 text-xs transition-colors">
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && <span className="text-gray-400">•</span>}
                </React.Fragment>
              ))}
            </div>
            <div className="text-gray-600 text-xs">
              © 2023 All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;

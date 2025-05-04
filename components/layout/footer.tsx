import Link from 'next/link';
import { Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">zomato</h2>
            <div className="flex gap-2 items-center">
              <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 flex items-center gap-1">
                <Globe size={16} />
                <span>India</span>
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 flex items-center gap-1">
                <Globe size={16} />
                <span>English</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-3 text-gray-700">ABOUT ZOMATO</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="#">Who We Are</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Work With Us</Link></li>
                <li><Link href="#">Investor Relations</Link></li>
                <li><Link href="#">Report Fraud</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3 text-gray-700">ZOMAVERSE</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="#">Zomato</Link></li>
                <li><Link href="#">Blinkit</Link></li>
                <li><Link href="#">Feeding India</Link></li>
                <li><Link href="#">Hyperpure</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3 text-gray-700">FOR RESTAURANTS</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="#">Partner With Us</Link></li>
                <li><Link href="#">Apps For You</Link></li>
                <li><Link href="#">For Enterprises</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3 text-gray-700">LEARN MORE</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="#">Privacy</Link></li>
                <li><Link href="#">Security</Link></li>
                <li><Link href="#">Terms</Link></li>
                <li><Link href="#">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies.
            All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-500 hover:text-gray-700"><Facebook size={20} /></Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700"><Twitter size={20} /></Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700"><Instagram size={20} /></Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700"><Linkedin size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import { Shield, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-emerald-500 p-2 rounded-lg">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Mediqura</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Enterprise HIMS platform designed and developed by Mobimp Services Private Limited, based in Manipur, India.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#modules" className="hover:text-blue-500 transition">Core Modules</a></li>
              <li><a href="#features" className="hover:text-blue-500 transition">Features</a></li>
              <li><a href="#ecosystem" className="hover:text-blue-500 transition">Ecosystem</a></li>
              <li><a href="#benefits" className="hover:text-blue-500 transition">Benefits</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Careers</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Blog</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">News</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Compliance</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">HIPAA</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} Mobimp Services Private Limited. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-blue-500 transition">Status</a>
            <a href="#" className="hover:text-blue-500 transition">Sitemap</a>
            <a href="#" className="hover:text-blue-500 transition">Partners</a>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-500 mb-4">Certified & Compliant</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <div className="text-center">
              <div className="text-xs text-gray-500">NABH Compliant</div>
              <div className="font-bold text-gray-400">✓</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500">NABL Ready</div>
              <div className="font-bold text-gray-400">✓</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500">ISO Standards</div>
              <div className="font-bold text-gray-400">✓</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500">Data Secure</div>
              <div className="font-bold text-gray-400">✓</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

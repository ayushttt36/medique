import React from 'react';
import { ArrowRight, Zap, Database, Shield as ShieldIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Enterprise HIMS Solution
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Transform Your Healthcare
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent"> Operations</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Mediqura is an enterprise-grade Hospital Information Management Software designed to digitize clinical, administrative, and financial workflows. Built by Mobimp Services for the modern healthcare facility.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 py-8 border-t border-b border-gray-200">
              <div>
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Customizable</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-500">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">NABH</div>
                <div className="text-sm text-gray-600">Compliant</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <button className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-8 py-3 rounded-lg hover:shadow-xl transition font-semibold flex items-center gap-2">
                Get Demo <ArrowRight size={20} />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition font-semibold">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:flex justify-end">
            <div className="relative">
              {/* Floating Cards */}
              <div className="absolute top-0 right-0 bg-white rounded-xl shadow-xl p-6 w-72 border-l-4 border-blue-600">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="text-blue-600" size={24} />
                  <h3 className="font-semibold">Centralized Database</h3>
                </div>
                <p className="text-sm text-gray-600">Manage multiple branches from a single server</p>
              </div>

              <div className="absolute top-40 right-32 bg-white rounded-xl shadow-xl p-6 w-72 border-l-4 border-emerald-500">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldIcon className="text-emerald-500" size={24} />
                  <h3 className="font-semibold">RBAC Security</h3>
                </div>
                <p className="text-sm text-gray-600">Role-based access control for sensitive data</p>
              </div>

              <div className="absolute bottom-0 right-12 bg-white rounded-xl shadow-xl p-6 w-72 border-l-4 border-purple-500">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-purple-500" size={24} />
                  <h3 className="font-semibold">Fast & Responsive</h3>
                </div>
                <p className="text-sm text-gray-600">Built for speed with modern technology</p>
              </div>

              <div className="w-80 h-96 bg-gradient-to-br from-blue-400 to-emerald-300 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

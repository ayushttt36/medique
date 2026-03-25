import React from 'react';
import { Package, ShoppingCart, Smartphone, TrendingUp, ArrowRight } from 'lucide-react';

const ecosystemProducts = [
  {
    icon: CreditCard,
    title: 'InstaBill',
    description: 'Rapid POS billing system with integrated GST return filing capabilities for instant settlements',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Package,
    title: 'Inventosoft',
    description: 'Advanced warehouse and medical supply chain management for optimal inventory control',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Smartphone,
    title: 'Mobile Connectivity',
    description: 'SMS/Email alerts for appointments and reports, remote doctor access to patient charts',
    color: 'from-emerald-500 to-emerald-600'
  }
];

import { CreditCard } from 'lucide-react';

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ecosystem Integration
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mediqura as the "brain" of a comprehensive healthcare software ecosystem by Mobimp Services
          </p>
        </div>

        {/* Central Hub Concept */}
        <div className="mb-16">
          <div className="relative">
            {/* Center Circle - Mediqura */}
            <div className="flex justify-center mb-12">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="relative z-10 text-center">
                  <div className="bg-gradient-to-br from-blue-600 to-emerald-500 text-white rounded-full w-32 h-32 flex items-center justify-center">
                    <div>
                      <TrendingUp size={48} className="mx-auto mb-2" />
                      <div className="font-bold text-lg">Mediqura</div>
                      <div className="text-xs text-blue-100">Core HIMS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ecosystem Products Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {ecosystemProducts.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <div key={index} className="relative">
                    {/* Connecting line */}
                    <div className="hidden lg:block absolute top-0 left-1/2 w-0.5 h-24 bg-gradient-to-b from-gray-300 to-transparent transform -translate-x-1/2 -translate-y-24"></div>

                    {/* Product Card */}
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-8 border-t-4 border-gray-300 transition-all">
                      <div className={`inline-block bg-gradient-to-br ${product.color} p-4 rounded-lg mb-4`}>
                        <IconComponent className="text-white" size={32} />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {product.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-4">
                        {product.description}
                      </p>

                      <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition">
                        Learn More <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Additional Capabilities */}
        <div className="bg-white rounded-xl p-12 border-2 border-blue-100">
          <h3 className="text-2xl font-bold mb-8">Additional Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4 text-blue-600">Deployment Options</h4>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="text-gray-700">On-premise deployment for complete control</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="text-gray-700">Cloud-hosted solutions for flexibility</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="text-gray-700">Hybrid deployment models available</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-emerald-600">Support & Training</h4>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="text-gray-700">Dedicated local support teams</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="text-gray-700">24/7 technical assistance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="text-gray-700">On-site training and documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

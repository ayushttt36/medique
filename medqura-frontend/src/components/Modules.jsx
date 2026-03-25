import React from 'react';
import { Users, Stethoscope, Pill, BarChart3, ShoppingCart, CreditCard, Microscope, TrendingUp } from 'lucide-react';

const modules = [
  {
    icon: Users,
    title: 'OPD Management',
    description: 'Registration, unique UHID generation, appointment scheduling, and queue management.',
    color: 'from-blue-500 to-blue-600',
    features: ['UHID Generation', 'Appointments', 'Queue Management']
  },
  {
    icon: Stethoscope,
    title: 'IPD Management',
    description: 'Admission-Transfer-Discharge (ADT) workflows, bed/ward management, and nursing stations.',
    color: 'from-purple-500 to-purple-600',
    features: ['ADT Workflows', 'Bed Management', 'Nursing Stations']
  },
  {
    icon: TrendingUp,
    title: 'Electronic Medical Records',
    description: 'Digital prescriptions, clinical notes, patient history tracking, and vitals recording.',
    color: 'from-emerald-500 to-emerald-600',
    features: ['Digital Rx', 'Clinical Notes', 'Vitals Tracking']
  },
  {
    icon: Microscope,
    title: 'Diagnostics & LIMS',
    description: 'Lab test ordering, automated result entry, digital report generation, and radiology integration.',
    color: 'from-orange-500 to-orange-600',
    features: ['Lab Tests', 'Automated Results', 'Radiology']
  },
  {
    icon: Pill,
    title: 'Pharmacy & Inventory',
    description: 'GST-ready billing, stock tracking, expiry alerts, and purchase order management.',
    color: 'from-red-500 to-red-600',
    features: ['GST Billing', 'Stock Tracking', 'PO Management']
  },
  {
    icon: CreditCard,
    title: 'Financials & Billing',
    description: 'IPD/OPD billing, Tally integration, expense tracking, and insurance/TPA management.',
    color: 'from-indigo-500 to-indigo-600',
    features: ['IPD/OPD Billing', 'Tally Integration', 'Insurance Mgmt']
  }
];

export default function Modules() {
  return (
    <section id="modules" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Core Modules & Functionality
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mediqura handles the complete "Patient Journey" with comprehensive modules designed for healthcare facilities
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Color Header */}
                <div className={`h-32 bg-gradient-to-br ${module.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition">
                    <IconComponent size={120} className="absolute bottom-0 right-0" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`bg-gradient-to-br ${module.color} p-3 rounded-lg`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {module.description}
                  </p>

                  {/* Features Pills */}
                  <div className="flex flex-wrap gap-2">
                    {module.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Ready to see how these modules work together?</p>
          <button className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-8 py-3 rounded-lg hover:shadow-xl transition font-semibold">
            Request a Full Demonstration
          </button>
        </div>
      </div>
    </section>
  );
}

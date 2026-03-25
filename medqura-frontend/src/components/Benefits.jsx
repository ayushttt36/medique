import React from 'react';
import { TrendingUp, FileText, Zap, BarChart3, Users, Clock } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Reduces Revenue Leakage',
    description: 'Automated billing ensures every service from a syringe to a surgery is tracked and charged, maximizing revenue recovery'
  },
  {
    icon: FileText,
    title: 'Paperless Operations',
    description: 'Eliminates physical files through a comprehensive digital EMR system, reducing storage costs and improving accessibility'
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Decisions',
    description: 'Real-time Upper Management Reports (MIS) track bed occupancy, department profitability, and doctor performance'
  },
  {
    icon: Users,
    title: 'Enhanced Patient Care',
    description: 'Faster access to complete patient history, faster diagnosis, and improved clinical outcomes through EMR integration'
  },
  {
    icon: Clock,
    title: 'Operational Efficiency',
    description: 'Streamlined workflows reduce wait times, improve staff productivity, and enhance overall hospital operations'
  },
  {
    icon: Zap,
    title: 'Regulatory Compliance',
    description: 'Meet NABH and NABL standards effortlessly with built-in quality control and audit trail capabilities'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transform Your Hospital Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world benefits that drive efficiency, revenue, and patient satisfaction
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 hover:bg-white rounded-xl p-8 transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:shadow-xl"
              >
                <div className="mb-4">
                  <div className="inline-block bg-gradient-to-br from-blue-100 to-emerald-100 p-4 rounded-lg group-hover:scale-110 transition-transform">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Market Position */}
        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-12 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Market Position & Support</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">NE India</div>
              <p className="text-gray-700">Dominant presence in North East (Manipur, Assam)</p>
            </div>

            <div className="border-l border-r border-gray-300 text-center px-8">
              <div className="text-4xl font-bold text-emerald-600 mb-2">Multi-Model</div>
              <p className="text-gray-700">On-premise and cloud deployment options</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">₹2,500/day</div>
              <p className="text-gray-700">Customized pricing for enterprise installations</p>
            </div>
          </div>
        </div>

        {/* ROI Statistics */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-xl p-12">
          <h3 className="text-3xl font-bold mb-12 text-center">Expected ROI & Impact</h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">25-40%</div>
              <p className="text-blue-100">Revenue Recovery from Reduced Leakage</p>
            </div>

            <div className="border-l border-r border-blue-300">
              <div className="text-5xl font-bold mb-2">60%</div>
              <p className="text-blue-100">Reduction in Administrative Overhead</p>
            </div>

            <div>
              <div className="text-5xl font-bold mb-2">90%</div>
              <p className="text-blue-100">Patient Satisfaction Improvement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

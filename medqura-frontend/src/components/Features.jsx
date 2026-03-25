import React from 'react';
import { CheckCircle2, Lock, Zap, Globe, BarChart3, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Centralized Database',
    description: 'Manage multiple hospital branches or decentralized units from a single, unified server',
    benefits: ['Multi-branch support', 'Real-time synchronization', 'Data consistency']
  },
  {
    icon: RefreshCw,
    title: '100% Customizable',
    description: 'Fully adaptable to match your hospital\'s existing workflows without forcing changes',
    benefits: ['Workflow adaptation', 'Custom configurations', 'Legacy integration']
  },
  {
    icon: Lock,
    title: 'Security & RBAC',
    description: 'Role-based access control ensuring sensitive patient data is only accessible to authorized staff',
    benefits: ['Data encryption', 'Access control', 'Audit trails']
  },
  {
    icon: BarChart3,
    title: 'Compliance Ready',
    description: 'Built to assist hospitals in achieving NABH and NABL accreditation standards',
    benefits: ['Quality control logs', 'Data audit trails', 'Regulatory compliance']
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Designed for speed and reliability with modern cloud and on-premise deployment options',
    benefits: ['Fast response times', 'High availability', 'Scalability']
  },
  {
    icon: BarChart3,
    title: 'Advanced Reporting',
    description: 'Upper Management Reports (MIS) to track bed occupancy, profitability, and performance',
    benefits: ['Real-time analytics', 'Profitability tracking', 'Decision support']
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical Features & Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade capabilities built for modern healthcare delivery
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group">
                {/* Feature Card */}
                <div className="bg-gray-50 hover:bg-white rounded-xl p-8 transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:shadow-xl">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-block bg-gradient-to-br from-blue-100 to-emerald-100 p-4 rounded-lg group-hover:scale-110 transition-transform">
                      <Icon className="text-blue-600" size={32} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={18} />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Badges */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Compliance & Certifications</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { badge: 'NABH', label: 'Hospital Accreditation' },
              { badge: 'NABL', label: 'Lab Accreditation' },
              { badge: 'RBAC', label: 'Security Standards' },
              { badge: 'ISO', label: 'Quality Management' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-white rounded-lg p-6 inline-block mb-3 shadow-md">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{item.badge}</div>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

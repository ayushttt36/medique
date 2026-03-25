import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { demoAPI } from '../services/api';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hospital: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await demoAPI.create({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        hospital_name: formData.hospital,
        message: formData.message
      });

      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', hospital: '', message: '' });
      
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.message || 'Failed to submit demo request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="bg-gradient-to-br from-blue-600 via-emerald-500 to-teal-600 text-white rounded-2xl p-16 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Healthcare Facility?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare facilities across India that trust Mediqura for their daily operations
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold flex items-center gap-2 mx-auto">
            Schedule Your Demo <ArrowRight size={20} />
          </button>
        </div>

        {/* Contact & Form Section */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Contact Information */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-8">Contact Mobimp Services</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-100 p-4 rounded-lg h-fit">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Headquarters</h4>
                  <p className="text-gray-600">
                    Manipur, India<br/>
                    Serving hospitals across North East India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-emerald-100 p-4 rounded-lg h-fit">
                  <Phone className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Get in Touch</h4>
                  <p className="text-gray-600">
                    24/7 Support Available<br/>
                    Enterprise Sales Hotline
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-purple-100 p-4 rounded-lg h-fit">
                  <Mail className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Support</h4>
                  <p className="text-gray-600">
                    sales@mobimp.com<br/>
                    support@mobimp.com
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-600 hover:underline">Request RFP Template</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Download Case Studies</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Implementation Guide</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Training Resources</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Get a Free Demo</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@hospital.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+91 XXXX XXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hospital/Organization</label>
                <input
                  type="text"
                  name="hospital"
                  value={formData.hospital}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Hospital or Clinic Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white py-3 rounded-lg hover:shadow-lg transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Request Demo'}
              </button>

              {success && (
                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-lg text-sm">
                  ✅ Demo request submitted successfully! We will contact you shortly.
                </div>
              )}

              {error && (
                <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                  ❌ {error}
                </div>
              )}

              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Your information will never be shared.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

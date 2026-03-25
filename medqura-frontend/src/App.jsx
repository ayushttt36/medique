import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Modules from './components/Modules';
import Features from './components/Features';
import Ecosystem from './components/Ecosystem';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function MedQuraApp() {
  return (
    <div className="bg-white font-sans text-gray-900">
      {/* Header Navigation */}
      <Header />
cd c:\Users\ayush\OneDrive\Desktop\med
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mediqura.git
git push -u origin mainSECRET_KEY=your-random-secret-key-here
DEBUG=False
ALLOWED_HOSTS=your-project-name.railway.app
      {/* Hero Section */}
      <Hero />

      {/* Core Modules */}
      <Modules />

      {/* Technical Features */}
      <Features />

      {/* Ecosystem Integration */}
      <Ecosystem />

      {/* Benefits Section */}
      <Benefits />

      {/* Call to Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}

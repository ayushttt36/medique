import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="bg-gradient-to-br from-blue-600 to-emerald-500 p-2 rounded-lg">
              <Shield className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Mediqura
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('modules')} className="text-gray-700 hover:text-blue-600 font-medium transition">
              Modules
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 font-medium transition">
              Features
            </button>
            <button onClick={() => scrollToSection('ecosystem')} className="text-gray-700 hover:text-blue-600 font-medium transition">
              Ecosystem
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-gray-700 hover:text-blue-600 font-medium transition">
              Benefits
            </button>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition font-medium">
            Get Demo
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <button onClick={() => scrollToSection('modules')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Modules
            </button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Features
            </button>
            <button onClick={() => scrollToSection('ecosystem')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Ecosystem
            </button>
            <button onClick={() => scrollToSection('benefits')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Benefits
            </button>
            <button className="block w-full text-left px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded font-medium">
              Get Demo
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

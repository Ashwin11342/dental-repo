import React from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-serif font-bold text-stone-900 tracking-tight">
              SmileCraft<span className="text-emerald-600">.</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors font-medium">Home</a>
            <a href="#services" className="text-stone-600 hover:text-stone-900 transition-colors font-medium">Services</a>
            <a href="#about" className="text-stone-600 hover:text-stone-900 transition-colors font-medium">About</a>
            <a href="#testimonials" className="text-stone-600 hover:text-stone-900 transition-colors font-medium">Testimonials</a>
            <button className="bg-stone-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-stone-800 transition-all flex items-center gap-2">
              <Phone size={18} />
              Book Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-white border-b border-stone-200 transition-all duration-300 ease-in-out overflow-hidden",
        isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          <a href="#" className="block px-3 py-2 text-stone-600 font-medium">Home</a>
          <a href="#services" className="block px-3 py-2 text-stone-600 font-medium">Services</a>
          <a href="#about" className="block px-3 py-2 text-stone-600 font-medium">About</a>
          <button className="w-full mt-4 bg-stone-900 text-white px-6 py-3 rounded-full font-medium">
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
}

import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-serif font-bold text-white tracking-tight mb-6 block">
              SmileCraft<span className="text-emerald-500">.</span>
            </span>
            <p className="text-stone-400 leading-relaxed mb-6">
              Providing world-class dental care with a focus on patient comfort and advanced technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emerald-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-emerald-500 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-emerald-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Patient Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">General Dentistry</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Orthodontics</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Oral Surgery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-500" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-500" />
                <span>hello@smilecraft.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald-500 shrink-0 mt-1" />
                <span>123 Dental Way, Suite 100<br />Beverly Hills, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
          <p>© 2024 SmileCraft Dental Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import { motion } from 'motion/react';

export default function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900"
    >
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <ChatBot />
    </motion.div>
  );
}



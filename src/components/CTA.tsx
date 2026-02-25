import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="py-24 px-4 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-stone-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-500 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500 rounded-full blur-[120px]" 
          />
        </div>

        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif font-medium text-white mb-8 leading-tight"
          >
            Ready to transform <br className="hidden md:block" /> your smile?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-stone-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed"
          >
            Join thousands of happy patients who have discovered the SmileCraft difference. Your journey to a perfect smile starts with a single conversation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-stone-900 px-10 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all hover:scale-105 active:scale-95 shadow-lg">
              Book Your Visit
            </button>
            <button className="bg-transparent border border-stone-700 text-white px-10 py-4 rounded-full font-bold hover:bg-stone-800 transition-all">
              Contact Us
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

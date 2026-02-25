import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/office/800/800" 
                alt="Our Office" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -top-8 -right-8 w-48 h-48 bg-emerald-700 rounded-full flex items-center justify-center text-white text-center p-6 shadow-2xl z-10"
            >
              <p className="font-serif italic text-lg leading-tight">15+ Years of Excellence</p>
            </motion.div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-stone-100 rounded-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-emerald-700 uppercase mb-4">Our Philosophy</h2>
            <h3 className="text-4xl font-serif font-medium text-stone-900 mb-6 leading-tight">A different kind of dental experience</h3>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
              Founded by Dr. Julian Vance, SmileCraft was built on the belief that dental care should be as comfortable as it is effective. We've curated a space that feels more like a spa than a clinic, where your well-being is our primary focus.
            </p>
            
            <div className="space-y-5 mb-10">
              {[
                "State-of-the-art 3D imaging technology",
                "Eco-friendly and sustainable practices",
                "Personalized treatment plans for every patient",
                "Comfort amenities including noise-canceling headphones"
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-emerald-600 group-hover:bg-white transition-colors duration-300" />
                  </div>
                  <span className="text-stone-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <button className="group text-stone-900 font-bold flex items-center gap-2">
              <span className="border-b-2 border-emerald-600 pb-1 group-hover:text-emerald-700 group-hover:border-emerald-700 transition-all">
                Meet our dedicated team
              </span>
              <span className="text-emerald-600 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

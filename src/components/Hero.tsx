import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#fdfcf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-serif font-medium text-stone-900 leading-[1.1] mb-6">
              Crafting your <br />
              <span className="italic text-emerald-700">perfect smile</span> with care.
            </h1>
            <p className="text-lg text-stone-600 mb-10 max-w-lg leading-relaxed">
              Experience premium dental care in a boutique environment. We combine advanced technology with a gentle, human touch to give you the smile you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-700 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-200">
                Schedule Consultation
                <ArrowRight size={20} />
              </button>
              <button className="border border-stone-200 text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-stone-50 transition-all">
                View Our Results
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                    referrerPolicy="no-referrer"
                    alt="Patient"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-stone-900">Trusted by 2,000+ patients</p>
                <div className="flex text-amber-400">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/dentist/800/1000"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                alt="Modern Dental Office"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] border border-stone-100">
              <p className="text-stone-900 font-serif italic text-lg mb-2">"The most comfortable dental visit I've ever had."</p>
              <p className="text-stone-500 text-sm">— Sarah Jenkins</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

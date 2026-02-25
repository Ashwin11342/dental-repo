import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "James Wilson",
    role: "Patient since 2021",
    content: "The staff at SmileCraft are incredible. They made me feel so comfortable during my Invisalign treatment. Highly recommend!",
    image: "https://picsum.photos/seed/p1/100/100"
  },
  {
    name: "Elena Rodriguez",
    role: "Cosmetic Patient",
    content: "I've always been self-conscious about my smile. After my veneers, I can't stop smiling. It truly changed my life.",
    image: "https://picsum.photos/seed/p2/100/100"
  },
  {
    name: "David Chen",
    role: "General Dentistry",
    content: "Professional, clean, and efficient. The best dental experience I've had in years. The AI assistant is also super helpful!",
    image: "https://picsum.photos/seed/p3/100/100"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#fdfcf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-medium text-stone-900 mb-4">What our patients say</h2>
          <p className="text-stone-600">Real stories from real people who trust us with their smiles.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 relative"
            >
              <Quote className="absolute top-6 right-8 text-stone-100" size={48} />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-medium text-stone-900">{t.name}</h4>
                  <p className="text-xs text-stone-500">{t.role}</p>
                </div>
              </div>
              <p className="text-stone-600 italic leading-relaxed">"{t.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

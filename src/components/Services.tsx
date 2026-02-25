import { motion } from 'motion/react';
import { Shield, Sparkles, Heart, Zap, Smile, Activity } from 'lucide-react';

const services = [
  {
    title: "General Dentistry",
    description: "Comprehensive checkups, cleanings, and preventative care to keep your smile healthy.",
    icon: Shield,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with professional whitening, veneers, and aesthetic bonding.",
    icon: Sparkles,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Orthodontics",
    description: "Modern solutions like Invisalign and clear braces for perfectly aligned teeth.",
    icon: Smile,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Oral Surgery",
    description: "Expert care for implants, extractions, and complex restorative procedures.",
    icon: Activity,
    color: "bg-rose-50 text-rose-600"
  },
  {
    title: "Emergency Care",
    description: "Immediate attention for dental pain, trauma, or urgent repairs when you need it most.",
    icon: Zap,
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Pediatric Care",
    description: "Gentle, friendly dental experiences designed specifically for our youngest patients.",
    icon: Heart,
    color: "bg-pink-50 text-pink-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-emerald-700 uppercase mb-4">Our Expertise</h2>
          <p className="text-4xl font-serif font-medium text-stone-900 mb-6">Comprehensive care for every smile</p>
          <p className="text-stone-600 text-lg">We offer a wide range of specialized services using the latest technology to ensure the best outcomes for our patients.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl border border-stone-100 bg-stone-50/50 hover:bg-white hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-3">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed mb-6">{service.description}</p>
              <a href="#" className="text-stone-900 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <span className="text-emerald-600">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

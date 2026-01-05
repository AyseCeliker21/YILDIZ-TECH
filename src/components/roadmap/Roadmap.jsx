import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Keşif ve Analiz',
    desc: 'İhtiyaçlarınızı dinliyor, teknik fizibilite çalışması yapıyoruz.',
    icon: '01'
  },
  {
    title: 'Tasarım ve Mimari',
    desc: 'Projeniz için en uygun teknoloji yığınını ve mimariyi belirliyoruz.',
    icon: '02'
  },
  {
    title: 'Geliştirme ve Test',
    desc: 'Çevik yöntemlerle geliştirme yapıyor, her aşamada test ediyoruz.',
    icon: '03'
  },
  {
    title: 'Yayın ve Destek',
    desc: 'Sistemi canlıya alıyor ve sürdürülebilir destek sağlıyoruz.',
    icon: '04'
  }
];

const Roadmap = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold gradient-text">Çalışma Yol Haritamız</h2>
        <p className="mt-4 text-gray-400">Fikirden gerçeğe giden şeffaf ve ölçülebilir süreç.</p>
      </div>

      <div className="relative">
        {/* Central Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/0 via-brand-500/50 to-brand-500/0 -translate-x-1/2" />

        <div className="space-y-12 md:space-y-24">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="flex-1 md:text-right">
                <div className={`glass p-8 rounded-3xl ${i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} max-w-md`}>
                  <span className="text-brand-500 font-mono text-lg mb-2 block">{step.icon}</span>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-brand-500 text-white font-bold shadow-[0_0_20px_rgba(29,126,255,0.5)]">
                {i + 1}
              </div>

              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
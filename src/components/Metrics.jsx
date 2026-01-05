import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MetricItem = ({ label, value, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let totalMiliseconds = duration * 1000;
      let incrementTime = totalMiliseconds / end;

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="text-center p-6 glass rounded-2xl">
      <div className="text-4xl font-bold gradient-text mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

const Metrics = () => {
  const metrics = [
    { label: 'Tamamlanmış Proje', value: '15', suffix: '+' },
    { label: 'Gecikme Süresi', value: '5', suffix: 'ms Altı' },
    { label: 'Sistem İzleme', value: '24', suffix: '/7' },
    { label: 'Müşteri Memnuniyeti', value: '100', suffix: '%' },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <MetricItem key={i} {...m} />
        ))}
      </div>
    </section>
  );
};

export default Metrics;
import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, HardHat, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <ClipboardList size={40} className="text-brand-blue" />,
      title: 'Planejamento Estratégico',
      description:
        'Desenvolvemos planos detalhados, desde a concepção até a viabilidade, garantindo que cada etapa do projeto seja otimizada para eficiência e sucesso.',
    },
    {
      icon: <HardHat size={40} className="text-brand-blue" />,
      title: 'Execução de Precisão',
      description:
        'Nossa equipe de campo executa cada fase da construção com rigor técnico, seguindo os mais altos padrões de engenharia e gestão de obras.',
    },
    {
      icon: <ShieldCheck size={40} className="text-brand-blue" />,
      title: 'Qualidade e Segurança',
      description:
        'A segurança é nossa prioridade máxima. Implementamos um controle de qualidade rigoroso para assegurar a integridade estrutural e a durabilidade do projeto.',
    },
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="servicos" className="py-20 md:py-32 bg-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
            Nossas Capacidades Fundamentais
          </h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Focamos em três pilares essenciais que garantem a excelência em cada
            empreendimento que realizamos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-brand-light-gray p-8 rounded-xl shadow-soft transition-transform duration-300 hover:-translate-y-2"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                {service.title}
              </h3>
              <p className="text-brand-gray flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const features = [
    {
      icon: <Award className="h-10 w-10 text-brand-blue" />,
      title: 'Excelência Comprovada',
      description:
        'Nosso portfólio é a prova do nosso compromisso com a mais alta qualidade e durabilidade em cada projeto entregue.',
    },
    {
      icon: <Users className="h-10 w-10 text-brand-blue" />,
      title: 'Equipe Especializada',
      description:
        'Contamos com profissionais experientes e apaixonados, prontos para superar desafios e garantir resultados impecáveis.',
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-brand-blue" />,
      title: 'Inovação Constante',
      description:
        'Adotamos as mais recentes tecnologias e métodos construtivos para otimizar processos e entregar valor superior.',
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-brand-light-gray">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
            Se você pode imaginar, nós podemos construir
          </h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Na vite123x, combinamos visão, técnica e dedicação para transformar
            complexos desafios de engenharia em marcos de sucesso. Nossa missão
            é construir mais do que estruturas; construímos legados duradouros.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-brand-white p-8 rounded-xl shadow-soft text-center flex flex-col items-center"
              variants={itemVariants}
            >
              <div className="bg-blue-100 p-4 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-gray flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

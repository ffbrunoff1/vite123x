import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-brand-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-white via-blue-50 to-blue-100 opacity-50"></div>
      <div className="container mx-auto px-6 text-center md:text-left relative z-10">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-brand-dark leading-tight mb-4"
            variants={itemVariants}
          >
            Transformando seus sonhos em{' '}
            <span className="gradient-text">realidade concreta!</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-brand-gray max-w-2xl mx-auto md:mx-0 mb-8"
            variants={itemVariants}
          >
            Construindo o futuro, um projeto de cada vez. Com inovação e
            excelência, damos vida às suas ideias mais ambiciosas.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white font-bold rounded-lg shadow-intense hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Comece seu Próximo Projeto
              <ArrowRight className="ml-3 h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            className="mt-12 text-sm text-brand-gray"
            variants={itemVariants}
          >
            <p>Qualidade e confiança em cada tijolo.</p>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-brand-blue/10 rounded-tl-full -z-0"></div>
    </section>
  );
}

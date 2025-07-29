import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader, CheckCircle, AlertTriangle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-brand-light-gray">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Tem um projeto em mente? Adoraríamos ouvir sobre ele. Preencha o
            formulário abaixo e nossa equipe retornará em breve.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto bg-brand-white p-8 md:p-12 rounded-xl shadow-soft">
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-brand-dark mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-brand-light-gray rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:outline-none transition-shadow"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-brand-dark mb-2"
                >
                  Seu Melhor E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-brand-light-gray rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:outline-none transition-shadow"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-brand-dark mb-2"
                >
                  Sua Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-brand-light-gray rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:outline-none transition-shadow"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-4 bg-brand-blue text-white font-bold rounded-lg shadow-intense hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 disabled:bg-brand-gray disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader className="animate-spin mr-3" />
                  ) : (
                    <Send className="mr-3" />
                  )}
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </div>
            </div>
          </form>
          <div className="mt-6 h-6">
            {submitSuccess && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 flex items-center justify-center"
              >
                <CheckCircle className="mr-2" />
                Mensagem enviada com sucesso!
              </motion.p>
            )}
            {submitError && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-600 flex items-center justify-center"
              >
                <AlertTriangle className="mr-2" />
                Erro: {submitError}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

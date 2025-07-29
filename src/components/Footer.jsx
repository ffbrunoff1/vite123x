import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753747732074_0.png';

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Capacidades', href: '#servicos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <motion.footer
      className="bg-brand-dark text-brand-white"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#inicio" className="mb-4">
              <img
                src={logoUrl}
                alt="vite123x Logo"
                className="h-12 w-auto bg-white p-2 rounded-md"
              />
            </a>
            <p className="text-brand-gray max-w-xs">
              Construindo o futuro, um projeto de cada vez.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-brand-gray hover:text-brand-blue transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Nosso Endereço</h3>
            <div className="flex items-center justify-center md:justify-start text-brand-gray">
              <MapPin className="h-5 w-5 mr-3 text-brand-blue flex-shrink-0" />
              <span>padre lebret 801 g05 bloco 03</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-brand-gray text-sm">
          <p>
            &copy; {new Date().getFullYear()} vite123x. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

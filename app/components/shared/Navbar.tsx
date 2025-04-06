'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Folder, Mail } from 'lucide-react';

const navItems = [
  { name: 'Início', href: '#home', icon: <Home size={18} /> },
  { name: 'Sobre', href: '#about', icon: <User size={18} /> },
  { name: 'Projetos', href: '#projects', icon: <Folder size={18} /> },
  { name: 'Contato', href: '#contact', icon: <Mail size={18} /> },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState('Início');

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Ajuste o offset conforme a altura da sua navbar (80px no exemplo)
      const offset = 80;
      const targetPosition = targetElement.offsetTop - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Atualiza a seção ativa
      setActiveSection(
        targetId === 'home' ? 'Início' : 
        targetId.charAt(0).toUpperCase() + targetId.slice(1)
      );
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = 80; // Mesmo offset usado no clique
      const sections = ['home', 'about', 'projects', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const scrollPosition = window.scrollY + offset;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(
              section === 'home' ? 'Início' : 
              section.charAt(0).toUpperCase() + section.slice(1)
            );
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-white/80 backdrop-blur-md rounded-full p-1 shadow-sm border border-gray-100">
        <ul className="flex space-x-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition flex items-center gap-2 ${
                  activeSection === item.name
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.icon}
                <span className="hidden sm:inline">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
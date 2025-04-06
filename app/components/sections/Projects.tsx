'use client';

import { motion } from 'framer-motion';
import { Code, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export function ProjectsSection() {
  const [isClient, setIsClient] = useState(false);
  const projects = [
    {
      title: "Batuque",
      description: "Simulador de bateria virtual em realidade aumentada construído com Python, openCV e outras bibliotecas. Além disso, fui responsável por desenvolver a página da startup, feita em Vue.js.",
      tags: ["Python", "Tensorflow", "Postgres", "Vue.js", "git", "docker"],
      link: "https://batuqueofc.netlify.app/",
      repo: "https://github.com/hellsinho/Batuque",
      image: "/images/batuque.jpg"
    },
    {
      title: "InSignIA",
      description: "Aplicativo mobile de tradução em tempo real da Língua de Sinais Brasileira para português. Fui responsável por desenvolver o modelo de leitura de sinais e pela construção da página da aplicação.",
      tags: ["Python", "Next.js", "Flutter", "git"],
      link: "https://insigniaofc.netlify.app/",
      repo: "https://github.com/hellsinho/InSignIA",
      image: "/images/insignia.png"
    },
    {
      title: "AstroChat",
      description: "Sistema de criação de mapa astral e tarot utilizando IA.",
      tags: ["Next.js", "n8n", "IA", "git", "github"],
      link: "#",
      repo: "https://github.com/hellsinho/Astro",
      image: "/images/astro.png"
    }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="projects" className="min-h-screen relative overflow-hidden py-20 px-4 flex items-center">
      {/* Efeito de fundo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-purple-900/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-900/5 to-transparent"></div>
        
        {/* Efeito de partículas - agora apenas no client-side */}
        {isClient && [...Array(15)].map((_, i) => {
          const width = 100 + Math.random() * 200;
          const height = 100 + Math.random() * 200;
          const initialX = Math.random() * 100;
          const initialY = Math.random() * 100;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10"
              initial={{
                x: initialX,
                y: initialY,
                width,
                height,
                opacity: 0.1
              }}
              animate={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                transition: {
                  duration: Math.random() * 20 + 20,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }
              }}
            />
          );
        })}
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Projetos
            </span> Destacados
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Alguns dos meus trabalhos mais recentes e desafiadores
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 relative">
                <Image
                  src={project.image}
                  alt={`Captura de tela do projeto ${project.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex gap-2">
                    <a 
                      href={project.repo} 
                      className="text-gray-400 hover:text-white transition"
                      aria-label="Repositório"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.link} 
                      className="text-gray-400 hover:text-white transition"
                      aria-label="Ver projeto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-300 mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="inline-flex items-center text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-300"
                    >
                      <Code size={12} className="mr-1 text-purple-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Quer ver mais do meu trabalho?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 rounded-full font-medium bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg hover:shadow-xl transition"
          >
            Entre em Contato
          </a>
        </motion.div>
      </div>
    </section>
  );
}
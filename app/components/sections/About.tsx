'use client';

import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';

const techStacks = [
  { name: 'Java', icon: '☕' },
  { name: 'React', icon: '⚛️' },
  { name: 'Spring', icon: '🌱' },
  { name: 'Angular', icon: '🅰️' },
  { name: 'Python', icon: '🐍' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'Supabase', icon: '🔥' },
  { name: 'Numpy', icon: '🧮' },
  { name: 'Pandas', icon: '🐼' },
];

export function AboutSection() {
  const controls = useAnimation();
  const sliderRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const duplicatedStacks = [...techStacks, ...techStacks];
  const animationRef = useRef<number>;
  const lastTimeRef = useRef<number>(0);
  const speed = 50; // pixels por segundo
  const isPausedRef = useRef(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId: number;
    let lastTimestamp: number;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isPausedRef.current) {
        x.set(x.get() - (speed * deltaTime) / 1000);
        
        // Reset position when scrolled too far
        if (x.get() < -techStacks.length * 200) {
          x.set(0);
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [x]);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="about" className="min-h-screen py-24  flex flex-col justify-center bg-gray-50 relative overflow-hidden">
      {/* Conteúdo Principal */}
      <div className="max-w-6xl mx-auto w-full mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Textual (mantido igual) */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Formação & 
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Experiência Profissional

              </span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Engenharia da Computação</h3>
                  <p className="text-gray-600">UFRPE - Universidade Federal Rural de Pernambuco</p>
                  <p className="text-gray-500 text-sm mt-1">Formação prevista: 2026</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Batuque - Desenvolvedor Fullstack</h3>
                  <p className="text-gray-600">Python, Visão computacional, OpenCV, Tensorflow e Vue.js </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">InSignIA - Desenvolvedor Fullstack</h3>
                  <p className="text-gray-600">Python, OpenCV, Tensorflow, Next.js e Typescript</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Habilidades Complementares</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-medium flex items-center gap-2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">● Análise de Dados</span>
      
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">Python, Numpy, Pandas, Visão Computacional</p>
                </div>
                
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-medium flex items-center gap-2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">● Bancos de Dados</span>
                
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">PostgreSQL, MySQL, Supabase</p>
                </div>
                
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-medium flex items-center gap-2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">● Gestão de Projetos</span>
                    
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">Scrum, Kanban, XP, Metodologias Ágeis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Espaço para imagem/ilustração (opcional) */}
          <div className="hidden md:block">
            <div className="relative h-full min-h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-100 rounded-full opacity-20"></div>
                <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-100 rounded-full opacity-20"></div>
              </div>
              
              <div className="text-8xl" role="img" aria-label="Desenvolvedor trabalhando">
                👨‍💻
              </div>
            </div>
          </div>
        </div>
      </div>

          {/* Slider Horizontal Infinito */}
          <div className="w-full overflow-hidden py-8 bg-gradient-to-r from-purple-50 to-blue-50">

        <div className="relative w-full h-24 overflow-hidden">
          <motion.div
            ref={sliderRef}
            className="absolute flex items-center gap-8"
            style={{ x }}
          >
            {duplicatedStacks.map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className="flex items-center gap-4 px-6 py-3 bg-white rounded-full shadow-md border border-gray-100 whitespace-nowrap"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="font-medium text-gray-700">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
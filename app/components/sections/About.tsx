'use client';

import { useState } from 'react';

export function AboutSection() {
  const [loadedIcons, setLoadedIcons] = useState<Record<string, boolean>>({});

  const handleImageError = (tech: string) => {
    setLoadedIcons(prev => ({ ...prev, [tech]: false }));
  };

  const techIcons = [
    { tech: 'java', name: 'Java' },
    { tech: 'react', name: 'React' },
    { tech: 'python', name: 'Python' },
    { tech: 'postgres', name: 'PostgreSQL' },
    { tech: 'spring', name: 'Spring' },
    { tech: 'angular', name: 'Angular' },
    { tech: 'pandas', name: 'Pandas' },
    { tech: 'scrum', name: 'Scrum' }
  ];

  return (
    <section id="about" className="min-h-screen py-24 px-4 flex items-center bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Conteúdo Textual */}
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

          {/* Bloco de Formação */}
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
                <p className="text-gray-500 text-sm mt-1">Formação prevista: Dez/2024</p>
              </div>
            </div>

            {/* Bloco de Experiência */}
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Desenvolvedor Fullstack</h3>
                <p className="text-gray-600">Experiência com Java, React, Spring e Angular</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Java</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Spring</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">React</span>
                  <span className="px-3 py-1 text-sm bg-gradient-to-r from-purple-600 bg-gray-100 rounded-full  to-blue-500 bg-clip-text text-transparent">Angular</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divisor Visual */}
          <div className="border-t border-gray-200 my-8"></div>

          {/* Habilidades Complementares */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">Habilidades Complementares</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-medium flex items-center gap-2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">●</span>
                  <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Análise de Dados

                  </span>
                </h4>
                <p className="text-gray-600 text-sm mt-1">Python, Numpy, Pandas, Visão Computacional</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-medium flex items-center gap-2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">●</span>
                  <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Bancos de Dados

                  </span>
                </h4>
                <p className="text-gray-600 text-sm mt-1">PostgreSQL, MySQL, Supabase</p>
              </div>
              
              <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-medium flex items-center gap-2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">●</span>
                  <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">

                  Gestão de Projetos
                  </span>
                </h4>
                <p className="text-gray-600 text-sm mt-1">Scrum, Kanban, XP, Metodologias Ágeis</p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Alternativo (gráfico de habilidades) */}
        <div className="hidden md:block">
          <div className="relative h-full min-h-[400px] bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-100 rounded-full opacity-20"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-100 rounded-full opacity-20"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-xl font-semibold mb-6">Meu Stack Tecnológico</h3>
              
              {/* Gráfico de habilidades */}
              <div className="space-y-6">
                {[
                  { label: 'Frontend', value: 85, color: 'from-purple-500 to-purple-600' },
                  { label: 'Backend', value: 80, color: 'from-blue-500 to-blue-600' },
                  { label: 'Análise de Dados', value: 70, color: 'from-indigo-500 to-indigo-600' },
                  { label: 'Gestão de Projetos', value: 75, color: 'from-violet-500 to-violet-600' }
                ].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-700">{skill.label}</span>
                      <span className="text-xs text-gray-500">{skill.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Ícones de tecnologias */}
              <div className="mt-10 grid grid-cols-4 gap-4">
                {techIcons.map(({ tech, name }) => (
                  <div key={tech} className="p-3 bg-gray-50 rounded-lg flex flex-col items-center">
                    {loadedIcons[tech] !== false && (
                      <img 
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                        alt={name}
                        className="h-8 w-8 object-contain"
                        onError={() => handleImageError(tech)}
                      />
                    )}
                    <span className="text-xs mt-1 text-center">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
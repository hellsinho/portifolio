'use client';
import Image from 'next/image';
import { ArrowDown, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center px-4 sm:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-1 lg:order-none">
          <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-600 opacity-20 blur-xl"></div>
          

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl aspect-square"
          >
            <Image
              src="/images/helson.jpeg"
              alt="Helson - Desenvolvedor Fullstack"
              width={500} 
              height={500}
              className="object-cover w-full h-full"
              priority 
            />
          </motion.div>
        </div>

        <motion.div 
          className="text-right"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Olá, eu sou <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Helson Gonçalves
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg ml-auto">
            Desenvolvedor Web especializado em criar experiências digitais modernas e performáticas.
          </p>
          
          <div className="flex justify-end gap-4">
          <motion.a
            href="/documents/CV_helson.pdf"
            download="CV_helson.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-3 rounded-full font-medium bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg"
          >
            <Download size={18} className="inline-block" />
            <span>Baixar CV</span>
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-medium border-2 border-gray-300 text-white hover:border-gray-400 transition"
          >
            Contato
          </motion.a>
        </div>
        </motion.div>
      </div>

      <motion.a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ 
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1.5
        }}
        aria-label="Scroll para a próxima seção"
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </motion.a>
    </section>
  );
}
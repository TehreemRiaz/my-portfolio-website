'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 text-center z-10"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">T</span>
              </div>
            </div>
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 blur-lg animate-pulse"></div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I&apos;m{' '}
          <span className="gradient-text">Tehreem</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-4"
        >
          Data Engineer & Data Science Graduate
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about transforming raw data into meaningful insights. 
          I specialize in building robust data pipelines, creating compelling visualizations, 
          and developing machine learning solutions that drive business decisions.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300 pulse-glow"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-purple-500 px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-purple-500 transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center space-x-6"
        >
          {[
            { icon: Github, href: 'https://github.com/TehreemRiaz', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/tehreemriaz/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:tehreemriaz87@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 cursor-pointer"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
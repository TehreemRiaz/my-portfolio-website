'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, BookOpen, Code, Database } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { icon: Database, label: 'Data Projects', value: '15+' },
    { icon: Code, label: 'Programming Languages', value: '8+' },
    { icon: Award, label: 'Certifications', value: '5+' },
    { icon: BookOpen, label: 'Years of Study', value: '4+' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="sticky top-24"
          >
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 p-1">
                  <div className="w-full h-full rounded-2xl bg-gray-800 overflow-hidden">
                    <Image
                      src="/DP2.JPG"
                      alt="Profile Picture"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 opacity-20 blur-2xl"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Turning Data Into <span className="gradient-text">Insights</span>
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              As a Data Science graduate with a strong passion for data engineering, 
              I bridge the gap between raw data and actionable business insights. 
              My journey began with a fascination for uncovering patterns in data and 
              has grown into hands-on expertise in building scalable, end-to-end data solutions. 
              My academic background has provided me with solid foundations in data analysis, programming, big data technologies, and machine learning.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Through practical projects, I&apos;ve gained experience designing robust data pipelines, 
              crafting insightful visualizations, and developing models that address real-world challenges. I combine technical skills with a business-focused mindset to deliver data-driven solutions that are both impactful and scalable.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map(({ icon: Icon, label, value }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass-effect rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300"
                >
                  <Icon className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-sm text-gray-400">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
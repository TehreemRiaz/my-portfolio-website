'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 90 },
        { name: 'R', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'Scala', level: 70 },
      ],
    },
    {
      title: 'Data Engineering',
      skills: [
        { name: 'Apache Spark', level: 90 },
        { name: 'Apache Kafka', level: 85 },
        { name: 'Apache Airflow', level: 88 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 75 },
        { name: 'AWS/GCP', level: 82 },
      ],
    },
    {
      title: 'Data Science & ML',
      skills: [
        { name: 'Machine Learning', level: 92 },
        { name: 'Deep Learning', level: 85 },
        { name: 'Statistical Analysis', level: 90 },
        { name: 'Data Visualization', level: 88 },
        { name: 'NLP', level: 80 },
        { name: 'Computer Vision', level: 75 },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Pandas/NumPy', level: 95 },
        { name: 'TensorFlow/PyTorch', level: 85 },
        { name: 'Tableau/Power BI', level: 90 },
        { name: 'Git/GitHub', level: 88 },
        { name: 'Jupyter/VS Code', level: 92 },
        { name: 'MongoDB/PostgreSQL', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for modern data engineering and data science challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          ease: "easeOut"
                        }}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full relative"
                      >
                        <div className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
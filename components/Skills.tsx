'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Data Engineering',
      skills: [
        { name: 'Terraform' },
        { name: 'GCP' },
        { name: 'Dataflow' },
        { name: 'Dataproc' },
        { name: 'Cloud Storage' },
        { name: 'Cloud Run Functions' },
        { name: 'BigQuery' },
        { name: 'Looker Studio' },
        { name: 'PowerBI' },
        { name: 'Apache Spark' },
        { name: 'Apache Kafka' },
        { name: 'Apache Beam' },
        { name: 'Docker' },
      ],
    },
    {
      title: 'Data Science & ML',
      skills: [
        { name: 'Machine Learning' },
        { name: 'Deep Learning' },
        { name: 'Statistical Analysis' },
        { name: 'Data Visualization' },
        { name: 'RAGs' },
        { name: 'Pandas' },
        { name: 'NumPy' },
        { name: 'Matplotlib' },
        { name: 'Seaborn' },
        { name: 'TensorFlow' },
        { name: 'Scikit-learn' },
        { name: 'XGBoost' },
        { name: 'BeautifulSoup' },
        { name: 'Selenium' },
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python' },
        { name: 'SQL' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub' },
        { name: 'Jupyter Notebooks' },
        { name: 'VS Code' },
        { name: 'Jira' },
        { name: 'Windsurf' },
        { name: 'Docker' },
        { name: 'MongoDB' },

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
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)"
                    }}
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full px-4 py-2 backdrop-blur-sm hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-400/50 transition-all duration-300 cursor-default"
                  >
                    <span className="text-gray-300 font-medium text-sm whitespace-nowrap">
                      {skill.name}
                    </span>
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
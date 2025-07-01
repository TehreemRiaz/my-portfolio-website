'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Database, BarChart3, Brain, TrendingUp, Link } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'Real-Time Log Analytics Pipeline ',
      description: 'Ingested Apache logs using Cloud Storage. Used Apache Beam via DataFlow for processing (parsing logs, filtering errors). Stored processed data in BigQuery for analytics dashboards. Used Cloud Run functions to trigger pipeline on logs ingestion. Used Terraform to provision all infrastructure. ',
      tech: ['Apache Beam', 'Terraform', 'Cloud Run', 'BigQuery', 'Cloud Storage', 'DataFlow', 'Python'],
      icon: Database,
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      codeUrl: 'https://github.com/your-repo/real-time-log-analytics',
    },
    {
      title: 'Big Data Processing System with Hybrid Storage Architecture',
      description: 'Used Kafka for stream processing. For storage, used S3, MongoDB and Cassandra for different data types, Elastic Search for Full-text search capabilities Prometheus and Grafana for metrics collection and visualization ',
      tech: ['Kafka', 'S3', 'MongoDB', 'Cassandra', 'Elastic Search', 'Prometheus', 'Grafana', 'Python'],
      icon: Brain,
      gradient: 'from-green-500 to-teal-500',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Global Covid-19 Impact Dashboard',
      description: 'Ingested global COVID-19 data into BigQuery, performed analytics, and visualized key insights through an interactive Looker Studio dashboard showcasing cases, deaths, and vaccination trends.',
      tech: ['Looker Studio', 'BigQuery', 'SQL'],
      icon: BarChart3,
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Sales Forecasting Model',
      description: 'Created a time series forecasting model using LSTM networks to predict sales trends, improving forecast accuracy by 30%.',
      tech: ['TensorFlow', 'LSTM', 'Python', 'Time Series'],
      icon: TrendingUp,
      gradient: 'from-orange-500 to-red-500',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my expertise in data engineering, machine learning, and analytics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl glass-effect hover:scale-105 transition-all duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
              </div>

              <div className="relative z-10 p-8">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center mr-4`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-white transition-colors duration-300"
                  >
                    <Github size={16} />
                    <Link href={project.codeUrl} target="_blank"><span>Code</span></Link>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 bg-gradient-to-r ${project.gradient} px-4 py-2 rounded-lg text-white transition-all duration-300`}
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
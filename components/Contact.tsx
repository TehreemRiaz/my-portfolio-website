'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Library } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  // Initialize Formspree hook with your form ID
  const [state, handleFormspreeSubmit] = useForm("mvgrllpk");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFormspreeSubmit({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tehreemriaz87@gmail.com',
      href: 'mailto:tehreemriaz87@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 311 433 024',
      href: 'tel:+923114330247',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lahore, Pakistan',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/TehreemRiaz', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/tehreemriaz/', label: 'LinkedIn' },
    { icon: Library, href: 'https://www.kaggle.com/tehreemriaz', label: 'Kaggle' },
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next data project? Let&apos;s discuss how we can turn your data into actionable insights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Let&apos;s Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I&apos;m always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about the latest trends in data science and engineering.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 glass-effect rounded-xl hover:scale-105 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
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
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-effect rounded-2xl p-8"
          >
            {state.succeeded ? (
              <div className="text-center py-12">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 text-green-400 flex justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                <p className="text-gray-300">Your message has been sent successfully. I&apos;ll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or how we can collaborate..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={state.submitting}
                whileHover={{ scale: state.submitting ? 1 : 1.02 }}
                whileTap={{ scale: state.submitting ? 1 : 0.98 }}
                className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-lg text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 ${state.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <Send size={20} />
                <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
              
              {/* Formspree validation errors */}
              <div className="text-red-400 text-sm">
                <ValidationError errors={state.errors} field="name" prefix="Name" />
                <ValidationError errors={state.errors} field="email" prefix="Email" />
                <ValidationError errors={state.errors} field="subject" prefix="Subject" />
                <ValidationError errors={state.errors} field="message" prefix="Message" />
              </div>
            </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading text-center">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            <div className="order-2 lg:order-1">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-lg mb-6"
              >
                As a full-stack developer with a passion for creating exceptional user experiences, I combine technical expertise with creative problem-solving to deliver high-quality web applications.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-lg mb-6"
              >
                My journey in web development began over 5 years ago, and since then, I've worked on a variety of projects ranging from small business websites to complex enterprise applications. I specialize in React, Next.js, TypeScript, and Tailwind CSS, focusing on creating responsive, accessible, and performant web experiences.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and tech community events.
              </motion.p>
            </div>
            <div className="order-1 lg:order-2 rounded-xl overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="bg-secondary h-80 rounded-xl flex items-center justify-center"
              >
                <div className="text-6xl font-bold text-primary/10">Profile</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

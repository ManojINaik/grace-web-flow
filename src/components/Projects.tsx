
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'E-commerce Dashboard',
    description: 'A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order tracking features.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/example/repo'
  },
  {
    title: 'Blog Platform',
    description: 'A modern blog platform with rich text editing, SEO optimization, and social sharing capabilities.',
    tags: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Auth.js'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/example/repo'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team permissions, and integrations.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/example/repo'
  },
  {
    title: 'Weather Application',
    description: 'A weather forecast application with location-based services, historical data, and interactive maps.',
    tags: ['React', 'OpenWeather API', 'Framer Motion', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/example/repo'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-heading">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Here are some of my recent projects. Each one was carefully crafted to solve real-world problems while delivering exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/yourusername"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}

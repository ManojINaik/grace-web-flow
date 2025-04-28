
import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

const skills = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'CSS' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'GraphQL', category: 'API' },
  { name: 'REST API', category: 'API' },
  { name: 'Git', category: 'Tool' },
  { name: 'GitHub', category: 'Tool' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Jest', category: 'Testing' },
  { name: 'Webpack', category: 'Build Tool' },
  { name: 'Redux', category: 'State Management' },
  { name: 'Figma', category: 'Design' }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-heading">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            These are the technologies and tools I work with to bring ideas to life. I'm constantly learning and adding new skills to my repertoire.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  tags, 
  demoUrl, 
  repoUrl,
  imageUrl 
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group rounded-xl overflow-hidden border border-border bg-card shadow-lg"
    >
      <div className="h-48 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-primary/5 text-xl font-bold text-primary/20">
          {!imageUrl && title}
        </div>
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {demoUrl && (
            <a 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          )}
          
          {repoUrl && (
            <a 
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 border border-border hover:border-primary hover:text-primary rounded-lg text-sm font-medium transition-colors"
            >
              <Github className="mr-2 h-4 w-4" />
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

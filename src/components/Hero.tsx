
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <span className="text-primary font-medium">Hello, I'm</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">Web Developer &</span>
              <span className="block text-primary">UI/UX Designer</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              I create beautiful, functional, and user-friendly websites that help businesses grow and succeed in the digital world.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow-lg shadow-primary/20"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                Get in touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 py-3 border border-primary text-primary rounded-lg font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                View projects
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-80 lg:h-[450px] rounded-xl overflow-hidden hero-gradient"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* We'll use a placeholder for the hero image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl font-bold text-primary/10">Portfolio</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-foreground hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            <span className="mb-2">Scroll down</span>
            <ArrowDown className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}


import React from 'react';
import { motion } from 'framer-motion';

export interface SkillCardProps {
  name: string;
  icon?: string;
  category: string;
}

export default function SkillCard({ name, icon, category }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col items-center p-4 rounded-xl border border-border bg-card hover:border-primary transition-colors"
    >
      <div className="w-12 h-12 flex items-center justify-center mb-3">
        {icon ? (
          <img src={icon} alt={name} className="w-10 h-10 object-contain" />
        ) : (
          <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
            <span className="text-primary font-semibold">{name.charAt(0)}</span>
          </div>
        )}
      </div>
      <h4 className="font-medium">{name}</h4>
      <span className="text-xs text-muted-foreground mt-1">{category}</span>
    </motion.div>
  );
}

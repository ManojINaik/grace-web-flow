
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-primary">Portfolio</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-primary">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Theme Toggle and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-40 animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu();
                  document.querySelector(link.href)?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

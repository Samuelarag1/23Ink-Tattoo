import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre mí', href: '/#about' },
    { name: 'Galería', href: '/#gallery' },
    { name: 'Servicios', href: '/#services' },
    { name: 'Turnos', href: '/#booking' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contacto', href: '/#contact' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('/#')) {
      const elementId = href.slice(2);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold tracking-wider">
            23 INK TATTOOS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 text-sm tracking-wide"
              >
                {item.name}
              </button>
            ))}
            <a
              href="https://instagram.com/23.ink"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors duration-200"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-foreground/80 hover:text-foreground transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="https://instagram.com/23.ink"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 text-foreground/80 hover:text-foreground transition-colors duration-200"
              >
                <Instagram className="h-5 w-5 mr-2" />
                Instagram
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

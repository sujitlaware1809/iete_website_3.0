'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/team', label: 'Team' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0f172a]/60 backdrop-blur-md shadow-md' // ← glass-like on scroll
          : 'bg-transparent'                             // ← fully transparent at top
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white">
              IETE <span className="text-blue-400">SRM VDP</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-blue-400 relative',
                  pathname === item.href
                    ? 'text-blue-400'
                    : 'text-white/80'
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                  />
                )}
              </Link>
            ))}
            <Button 
              className="glow-button text-white font-semibold px-6"
              onClick={() => {
                if (window.location.pathname === '/') {
                  document.getElementById('join-section')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#join-section';
                }
              }}
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 rounded-lg mt-2 bg-[#0f172a]/60 backdrop-blur-md">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 text-base font-medium rounded-md transition-colors',
                    pathname === item.href
                      ? 'text-blue-400 bg-blue-400/10'
                      : 'text-white/80 hover:text-blue-400 hover:bg-white/5'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button 
                  className="w-full glow-button text-white font-semibold"
                  onClick={() => {
                    setIsOpen(false);
                    if (window.location.pathname === '/') {
                      document.getElementById('join-section')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#join-section';
                    }
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

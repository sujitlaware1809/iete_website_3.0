'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Zap } from 'lucide-react';

const footerSections = [
  {
    title: 'Quick Links',
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/events', label: 'Timeline' },
      { href: '/team', label: 'Team' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/blog', label: 'Sponsor' },
      { href: '/contact', label: 'Contact' },
      { href: '/join', label: 'Apply Now' },
      { href: '/chatbot', label: 'Support' },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="bg-black/50 backdrop-filter backdrop-blur-lg border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold">
                IETE <span className="text-blue-400">'25</span>
              </div>
            </div>
            <p className="text-white/60 mb-4 max-w-md">
              Empowering the next generation of electronics and telecommunications engineers through 
              innovation, collaboration, and technical excellence in open source development.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/60">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">SRM Institute, Vadapalani Campus, Chennai</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@iete-srm.edu</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 44 1234 5678</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm">
            © 2025 IETE Student Forum, SRM Institute. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="text-white/60 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
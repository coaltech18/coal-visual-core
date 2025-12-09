import { motion } from 'framer-motion';
import { Linkedin, Instagram, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Palette, href: '#', label: 'Behance' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative py-16 border-t border-border/20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-accent mb-4">
                CoAl Tech
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                CoAl Tech is a small, design-driven web agency building modern websites and SaaS dashboards for clients in India and worldwide.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-lg bg-card hover:bg-accent/10 transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-muted-foreground hover:text-accent transition-colors duration-300 animated-link"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>management@coaltech.in</p>
              <p>+91 78924 42633</p>
              <p className="text-sm leading-relaxed">
                #18, 9th Cross, Maruthi Nagar,<br />
                Ittamadu Main Road,<br />
                Bengaluru – 560085, India
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} CoAl Tech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-accent text-sm transition-colors animated-link">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent text-sm transition-colors animated-link">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    </footer>
  );
};

export default Footer;
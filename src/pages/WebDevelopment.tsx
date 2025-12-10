import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollToTop from '@/components/ScrollToTop';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Globe, FileText, Briefcase, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  const features = [
    'Responsive design',
    'SEO-ready basics',
    'Fast performance',
    'Custom UI design',
    'Analytics ready',
    'Mobile optimized'
  ];

  const types = [
    {
      icon: Globe,
      title: 'Multi-page Sites',
      description: 'Complete websites with multiple pages and sections'
    },
    {
      icon: FileText,
      title: 'One-page Landing',
      description: 'High-converting single-page sites for campaigns'
    },
    {
      icon: Briefcase,
      title: 'Portfolio Sites',
      description: 'Showcase your work and personal brand'
    },
    {
      icon: Layout,
      title: 'Small Business Sites',
      description: 'Professional websites for local businesses'
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <ScrollProgress />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent text-sm font-medium tracking-wide uppercase">Websites & Landing Pages</span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
                Websites & landing pages that feel <span className="text-accent">modern and convert better</span>.
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                We build clean, responsive websites for personal brands, founders, local businesses, and global clients. Every site is designed to look modern, feel fast, and convert visitors into customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Start a web project
                </Link>
                <Link to="/work" className="px-6 py-3 rounded-lg border border-border text-foreground hover:bg-accent/5 transition-colors">
                  View Portfolio
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">What You Get</h2>
                <p className="text-muted-foreground">Everything you need for a modern, high-performing website</p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-lg border border-border bg-card"
                >
                  <Check className="h-5 w-5 text-accent mb-3" />
                  <h3 className="font-medium text-foreground">{feature}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Sites */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">Types of Sites We Build</h2>
                <p className="text-muted-foreground">From simple landing pages to complex multi-page sites</p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {types.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-lg border border-border bg-card text-center"
                >
                  <type.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Build Your <span className="text-accent">Website?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss your project and create something amazing together.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Start a web project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default WebDevelopment;

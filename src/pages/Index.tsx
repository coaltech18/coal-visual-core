import ThreeBackground from '@/components/ThreeBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies.',
      href: '/services'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications.',
      href: '/services'
    },
    {
      icon: TrendingUp,
      title: 'Social Media Marketing',
      description: 'Strategic campaigns that drive engagement and growth.',
      href: '/services'
    }
  ];

  return (
    <div className="relative">
      <ThreeBackground />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Quick Services Preview */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent text-lg font-medium">What We Offer</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                  Our <span className="text-accent">Expertise</span>
                </h2>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="service-card group"
                >
                  <service.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Link to={service.href} className="inline-flex items-center text-accent hover:text-accent/80 transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/services" className="btn-primary">
                View All Services
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your <span className="text-accent">Digital Presence?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss your project and bring your vision to life with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Start Your Project
                </Link>
                <Link to="/work" className="px-8 py-4 rounded-xl border border-accent/30 text-accent hover:bg-accent/10 transition-all duration-300">
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
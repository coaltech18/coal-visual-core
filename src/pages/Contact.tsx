import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollToTop from '@/components/ScrollToTop';
import { motion } from 'framer-motion';

const Contact = () => {
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
              <span className="text-accent text-sm font-medium tracking-wide uppercase">Get In Touch</span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
                Let's <span className="text-accent">Connect</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to transform your digital presence? We'd love to hear about your project 
                and discuss how we can help bring your vision to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Contact Section */}
        <ContactSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;

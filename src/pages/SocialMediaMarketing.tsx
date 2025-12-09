import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Image, FileText, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const SocialMediaMarketing = () => {
  const features = [
    'Content-ready pages',
    'Visuals aligned with website design',
    'Landing pages for campaigns'
  ];

  return (
    <div className="min-h-screen bg-background">
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
              <span className="text-accent text-sm font-medium tracking-wide uppercase">Brand & Social Media Support</span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
                Brand & <span className="text-accent">social media support</span>.
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                We help brands with visuals, landing pages for campaigns, and content that aligns with your website design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Talk about your brand
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-lg border border-border bg-card text-center"
                >
                  <Check className="h-5 w-5 text-accent mx-auto mb-3" />
                  <h3 className="font-medium text-foreground">{feature}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Discuss Your <span className="text-accent">Brand?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's talk about how we can help with your brand and social media needs.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Talk about your brand
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SocialMediaMarketing;

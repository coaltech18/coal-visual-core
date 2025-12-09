import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Globe, ShoppingCart, LayoutDashboard, TrendingUp, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Websites & Landing Pages',
      description: 'Modern, responsive websites and high-converting landing pages for founders, personal brands, and businesses.',
      features: [
        'Responsive design',
        'SEO-ready basics',
        'Fast performance',
        'Custom UI design',
        'Analytics ready',
        'Mobile optimized'
      ],
      href: '/services/web-development'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Stores',
      description: 'Complete e-commerce solutions with product pages, seamless checkout, and inventory management.',
      features: [
        'Product catalog',
        'Shopping cart',
        'Payment integration',
        'Order management',
        'Inventory tracking',
        'Admin dashboard'
      ],
      href: '/services/web-development'
    },
    {
      icon: LayoutDashboard,
      title: 'Custom Software & SaaS Dashboards',
      description: 'Admin panels, multi-tenant dashboards, analytics views, and business tools built with React/TypeScript.',
      features: [
        'Admin panels',
        'Multi-tenant dashboards',
        'Analytics views',
        'Role-based access',
        'Real-time updates',
        'API integration'
      ],
      href: '/services/app-development'
    },
    {
      icon: TrendingUp,
      title: 'Social Media & Brand Support',
      description: 'Visual design, landing pages for campaigns, and brand-aligned content.',
      features: [
        'Content-ready pages',
        'Visuals aligned with website',
        'Campaign landing pages',
        'Brand consistency'
      ],
      href: '/services/social-media-marketing'
    }
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
              <span className="text-accent text-sm font-medium tracking-wide uppercase">Our Services</span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
                Digital Solutions That <span className="text-accent">Drive Results</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                CoAl Tech builds websites, landing pages, e-commerce stores and SaaS dashboards for global clients. From concept to launch, we provide comprehensive digital services that transform your business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Get <span className="text-accent">Started?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss your project and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Start Your Project
                </Link>
                <Link to="/work" className="px-6 py-3 rounded-lg border border-border text-foreground hover:bg-accent/5 transition-colors">
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

export default Services;

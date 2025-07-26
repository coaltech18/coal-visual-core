import ThreeBackground from '@/components/ThreeBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Code2, Smartphone, TrendingUp, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Next.js, and cutting-edge frameworks.',
      features: [
        'Responsive Design',
        'Performance Optimization',
        'SEO Ready',
        'Modern UI/UX',
        'E-commerce Solutions',
        'Content Management Systems'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      price: 'Starting at $2,500',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android.',
      features: [
        'Cross-Platform Development',
        'Native Performance',
        'User-Centric Design',
        'API Integration',
        'Push Notifications',
        'App Store Optimization'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
      price: 'Starting at $5,000',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: TrendingUp,
      title: 'Social Media Marketing',
      description: 'Strategic social media campaigns that build brand awareness, engage audiences, and drive conversions.',
      features: [
        'Content Strategy',
        'Brand Building',
        'Analytics & Insights',
        'Campaign Management',
        'Influencer Partnerships',
        'Social Commerce'
      ],
      technologies: ['Instagram', 'TikTok', 'LinkedIn', 'Facebook', 'Google Analytics', 'Hootsuite'],
      price: 'Starting at $1,500/month',
      color: 'from-green-500/20 to-emerald-500/20'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and target audience.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop a comprehensive plan tailored to your specific needs.'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Create stunning visual designs that align with your brand identity.'
    },
    {
      step: '04',
      title: 'Development',
      description: 'Build your solution using the latest technologies and best practices.'
    },
    {
      step: '05',
      title: 'Launch',
      description: 'Deploy your project and provide ongoing support and maintenance.'
    }
  ];

  return (
    <div className="relative">
      <ThreeBackground />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent text-lg font-medium">Our Services</span>
              <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
                Digital Solutions That <span className="text-accent">Drive Results</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From concept to launch, we provide comprehensive digital services 
                that transform your business and engage your audience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative p-8 rounded-2xl border border-border/20 bg-card/50 backdrop-blur-sm h-full">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-xl bg-accent/10 glow-subtle">
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
                            <Check className="h-4 w-4 text-accent mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded bg-muted/30 text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-lg font-bold text-accent">{service.price}</span>
                      <Link
                        to="/contact"
                        className="btn-primary"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent text-lg font-medium">Our Process</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                  How We <span className="text-accent">Work</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our proven methodology ensures successful project delivery every time.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent/20">
                    <span className="text-accent font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                  
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full">
                      <ArrowRight className="h-6 w-6 text-accent/30 mx-auto" />
                    </div>
                  )}
                </motion.div>
              ))}
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
                Ready to Get <span className="text-accent">Started?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss your project and create something amazing together.
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

export default Services;
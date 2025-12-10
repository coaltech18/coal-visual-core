import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollToTop from '@/components/ScrollToTop';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShoppingCart, LayoutDashboard, Zap, Check, ExternalLink, Palette, Code2, Users, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Design & Development',
      description: 'Modern, responsive sites for founders, personal brands and small businesses.',
      href: '/services/web-development'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Stores',
      description: 'Product pages, clean UX, seamless checkout (Shopify/custom front-end etc.).',
      href: '/services/web-development'
    },
    {
      icon: LayoutDashboard,
      title: 'SaaS Dashboards & Custom Software',
      description: 'Hybits Suite style dashboards, MatchPod admin, multi-tenant UI, analytics views.',
      href: '/services/app-development'
    },
    {
      icon: Zap,
      title: 'Landing Pages for Campaigns & Startups',
      description: 'High-converting single-page sites for launches and ads.',
      href: '/services/web-development'
    }
  ];

  const featuredProjects = [
    {
      name: 'Hybits CRM Suite',
      description: 'SaaS CRM platform',
      url: 'https://hybits.in',
      tag: 'SaaS / CRM'
    },
    {
      name: 'MatchPod',
      description: 'Roommate matching platform',
      url: 'https://matchpod.in',
      tag: 'Roommate Matching'
    },
    {
      name: 'Pruthviraj Dodamani',
      description: 'Personal portfolio site',
      url: 'https://pruthvirajdodamani.com',
      tag: 'Personal Brand'
    },
    {
      name: 'Animathon',
      description: 'Event / animation site',
      url: 'https://animathon.in',
      tag: 'Event Website'
    },
    {
      name: 'Skazka Beach Resort',
      description: 'Resort / hospitality site',
      url: 'https://skazkabeachresort.com',
      tag: 'Resort Website'
    },
    {
      name: 'DMen Wear',
      description: 'Fashion / e-commerce website',
      url: 'https://dmenwear.in',
      tag: 'E-commerce'
    }
  ];

  const whyItems = [
    {
      icon: Palette,
      title: 'Design-first approach',
      description: 'Custom UI, not just templates'
    },
    {
      icon: Code2,
      title: 'Developer + product mindset',
      description: 'Understands flows, not just visuals'
    },
    {
      icon: Rocket,
      title: 'Clean, modern code',
      description: 'React/TypeScript/Tailwind, scalable front-ends'
    },
    {
      icon: Users,
      title: 'Easy to work with',
      description: 'Clear communication, international friendly'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Requirements',
      description: 'Understanding your goals and project needs'
    },
    {
      step: '02',
      title: 'Wireframe & UI Design',
      description: 'Creating visual designs and user flows'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Building with modern technologies'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Deployment and ongoing maintenance'
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <ScrollProgress />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Modern, high-converting websites for{' '}
                  <motion.span
                    className="text-accent inline-block relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 200 }}
                  >
                    <span className="relative z-10">founders & startups</span>
                    <motion.span
                      className="absolute inset-0 bg-accent/20 blur-xl -z-10"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.span>
                  .
                </motion.h1>
                <motion.p
                  className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  CoAl Tech designs and builds clean, responsive websites, e-commerce stores, and SaaS dashboards for clients in India and abroad.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Link to="/work" className="btn-primary inline-flex items-center justify-center">
                    View Portfolio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-4 rounded-xl border border-border text-foreground hover:bg-accent/5 transition-all duration-300 hover:border-accent/30 hover:scale-105 inline-flex items-center justify-center"
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </motion.div>
              
              {/* Project Showcase */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:grid grid-cols-2 gap-4"
              >
                {[
                  { 
                    name: 'Hybits Suite', 
                    image: '/projects/hybits-suite-dashboard.png',
                    url: 'https://suite.hybits.in',
                    alt: 'Hybits Suite Business Management Platform Dashboard'
                  },
                  { 
                    name: 'MatchPod', 
                    image: '/projects/matchpod-hero.png',
                    url: 'https://matchpod.in',
                    alt: 'MatchPod Roommate Matching Platform'
                  },
                  { 
                    name: 'Animathon', 
                    image: '/projects/animathon-hero.png',
                    url: 'https://animathon.in',
                    alt: 'Animathon Animation Competition Platform'
                  },
                  { 
                    name: 'Hybits', 
                    image: '/projects/hybits-dishware.png',
                    url: 'https://hybits.in',
                    alt: 'Hybits Sterilised Dishware Service'
                  },
                ].map((project, index) => (
                  <motion.a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative rounded-xl overflow-hidden border border-border/20 bg-card/50 backdrop-blur-sm hover:border-accent/30 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -4 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          // Fallback if image doesn't exist yet
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `
                            <div class="w-full h-full bg-gradient-to-br from-accent/10 to-muted/20 flex items-center justify-center">
                              <span class="text-muted-foreground text-sm">${project.name}</span>
                            </div>
                          `;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-sm font-semibold text-foreground">{project.name}</p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
                <p className="text-muted-foreground text-lg">Comprehensive digital solutions for modern businesses</p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group p-6 rounded-lg border border-border/20 bg-card/50 backdrop-blur-sm hover:border-accent/30 hover:bg-card/80 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.div
                    className="relative z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <service.icon className="h-10 w-10 text-accent mb-4" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground relative z-10">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 relative z-10">{service.description}</p>
                  <Link to={service.href} className="inline-flex items-center text-sm text-accent hover:text-accent/80 transition-colors relative z-10 group/link">
                    Learn more
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Portfolio Preview */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
                <p className="text-muted-foreground text-lg">A selection of recent projects across SaaS, personal brands, resorts and e-commerce</p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group p-6 rounded-lg border border-border/20 bg-card/50 backdrop-blur-sm hover:border-accent/30 hover:bg-card/80 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-start justify-between mb-3 relative z-10">
                    <motion.span
                      className="text-xs px-2 py-1 rounded bg-accent/10 text-accent font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.tag}
                    </motion.span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground relative z-10 group-hover:text-accent transition-colors">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 relative z-10">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm text-accent hover:text-accent/80 transition-colors relative z-10 group/link"
                  >
                    Visit live site
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </motion.span>
                  </a>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/work" className="btn-primary">
                View full portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Why CoAl Tech */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why CoAl Tech</h2>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="group p-6 rounded-lg border border-border/20 bg-card/50 backdrop-blur-sm hover:border-accent/30 hover:bg-card/80 hover:shadow-lg transition-all duration-300 text-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.div
                    className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 group-hover:bg-accent/20 transition-colors"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="h-6 w-6 text-accent" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground relative z-10 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground relative z-10">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
                <p className="text-muted-foreground text-lg">How we work with you</p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="text-center group relative"
                >
                  <motion.div
                    className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent/20 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300 relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-accent font-bold text-sm relative z-10">{step.step}</span>
                    <motion.div
                      className="absolute inset-0 bg-accent/20 rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-border/20 -translate-x-1/2">
                      <motion.div
                        className="h-full bg-accent/30"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                        style={{ transformOrigin: 'left' }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to upgrade your website?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Let's discuss your project and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Get a Quote
                </Link>
                <Link to="/work" className="px-6 py-4 rounded-xl border border-border text-foreground hover:bg-accent/5 transition-colors">
                  View Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;

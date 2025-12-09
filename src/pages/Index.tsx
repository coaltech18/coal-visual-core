import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
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
    <div className="min-h-screen bg-background">
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Modern, high-converting websites for <span className="text-accent">founders & startups</span>.
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  CoAl Tech designs and builds clean, responsive websites, e-commerce stores, and SaaS dashboards for clients in India and abroad.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/work" className="btn-primary">
                    View Portfolio
                  </Link>
                  <Link to="/contact" className="px-6 py-4 rounded-xl border border-border text-foreground hover:bg-accent/5 transition-colors">
                    Get a Quote
                  </Link>
                </div>
              </motion.div>
              
              {/* UI Cards Composition */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-card border border-border/20 glow-subtle">
                    <div className="h-32 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg mb-3"></div>
                    <div className="h-2 bg-accent/20 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-muted/30 rounded w-1/2"></div>
                  </div>
                  <div className="p-6 rounded-xl bg-card border border-border/20 glow-subtle">
                    <div className="h-24 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg"></div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="p-6 rounded-xl bg-card border border-border/20 glow-subtle">
                    <div className="h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg mb-3"></div>
                    <div className="h-2 bg-accent/20 rounded w-2/3 mb-2"></div>
                    <div className="h-2 bg-muted/30 rounded w-1/2"></div>
                  </div>
                  <div className="p-6 rounded-xl bg-card border border-border/20 glow-subtle">
                    <div className="h-36 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg"></div>
                  </div>
                </div>
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
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <service.icon className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Link to={service.href} className="inline-flex items-center text-sm text-accent hover:text-accent/80 transition-colors">
                    Learn more
                    <ArrowRight className="ml-1 h-3 w-3" />
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
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs px-2 py-1 rounded bg-accent/10 text-accent font-medium">
                      {project.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm text-accent hover:text-accent/80 transition-colors"
                  >
                    Visit live site
                    <ExternalLink className="ml-1 h-3 w-3" />
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
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-lg border border-border bg-card text-center"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent/20">
                    <span className="text-accent font-bold text-sm">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
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
    </div>
  );
};

export default Index;

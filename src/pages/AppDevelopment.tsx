import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { LayoutDashboard, Check, ArrowRight, BarChart3, Users, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppDevelopment = () => {
  const features = [
    'React/TypeScript front-ends',
    'Role-based layouts and permissions',
    'Clean UI suitable for teams',
    'Multi-tenant dashboards',
    'Analytics views',
    'API integration'
  ];

  const examples = [
    {
      title: 'Hybits Suite',
      description: 'CRM platform with internal tools and management dashboards',
      type: 'SaaS / CRM'
    },
    {
      title: 'MatchPod Admin',
      description: 'Management panel for roommate matching platform',
      type: 'Admin Dashboard'
    }
  ];

  const capabilities = [
    {
      icon: LayoutDashboard,
      title: 'Admin Panels',
      description: 'Complete admin interfaces for managing your product or service'
    },
    {
      icon: Users,
      title: 'Multi-tenant Dashboards',
      description: 'Dashboards that support multiple organizations or teams'
    },
    {
      icon: BarChart3,
      title: 'Analytics Views',
      description: 'Data visualization and reporting interfaces'
    },
    {
      icon: Shield,
      title: 'Business Tools',
      description: 'Internal tools and workflows for your team'
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
              <span className="text-accent text-sm font-medium tracking-wide uppercase">Custom Software & SaaS Dashboards</span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
                Custom web apps & dashboards for your <span className="text-accent">product or internal team</span>.
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                We build admin panels, multi-tenant dashboards, analytics views, and business tools. Every interface is designed for clarity, efficiency, and scalability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Discuss a custom build
                </Link>
                <Link to="/work" className="px-6 py-3 rounded-lg border border-border text-foreground hover:bg-accent/5 transition-colors">
                  View Examples
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Examples */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">Recent Work</h2>
                <p className="text-muted-foreground">Examples of custom dashboards we've built</p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {examples.map((example, index) => (
                <motion.div
                  key={example.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-lg border border-border bg-card"
                >
                  <span className="text-xs px-2 py-1 rounded bg-accent/10 text-accent font-medium mb-4 inline-block">
                    {example.type}
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{example.title}</h3>
                  <p className="text-muted-foreground">{example.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">What We Build</h2>
                <p className="text-muted-foreground">Custom interfaces for your specific needs</p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-lg border border-border bg-card text-center"
                >
                  <capability.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">Technical Approach</h2>
                <p className="text-muted-foreground">Built with modern technologies</p>
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

        {/* CTA */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Build Your <span className="text-accent">Custom Dashboard?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss your requirements and create a solution that fits your needs.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Discuss a custom build
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

export default AppDevelopment;

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollToTop from '@/components/ScrollToTop';
import { motion } from 'framer-motion';
import { Code2, LayoutDashboard, ShoppingCart, Palette, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const skills = [
    'Web design & development (React, TypeScript)',
    'SaaS dashboards and admin panels',
    'E-commerce storefronts',
    'UI/UX for web products'
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
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent text-sm font-medium tracking-wide uppercase">About Us</span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
                Who We <span className="text-accent">Are</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A small, focused web agency based in Bengaluru, building modern digital solutions for clients worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  CoAl Tech is a small, focused agency based in Bengaluru. We're run by a developer/designer who builds modern React/TypeScript front-ends and cares deeply about UX and clean UI.
                </p>
                <p>
                  We've worked on projects like Hybits Suite (a comprehensive CRM platform), MatchPod (a roommate matching platform with admin dashboard), and multiple brand and resort websites. Each project is an opportunity to create something clean, functional, and beautiful.
                </p>
                <p>
                  Our approach is simple: understand the problem, design thoughtfully, build with modern tools, and deliver something that works well and looks great.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What We're Good At */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">What We're Good At</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">How We Work</h2>
                <p className="text-muted-foreground">Our simple, proven process</p>
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

        {/* CTA */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Let's Work <span className="text-accent">Together</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Ready to start your project? Get in touch and let's discuss how we can help.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Let's work together
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

export default About;

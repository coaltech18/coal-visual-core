import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, TrendingUp, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      gsap.from('.service-card-gsap', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Next.js, and cutting-edge frameworks.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Ready', 'Modern UI/UX'],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android.',
      features: ['Cross-Platform', 'Native Performance', 'User-Centric Design', 'API Integration'],
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: TrendingUp,
      title: 'Social Media Marketing',
      description: 'Strategic social media campaigns that build brand awareness, engage audiences, and drive conversions.',
      features: ['Content Strategy', 'Brand Building', 'Analytics & Insights', 'Campaign Management'],
      color: 'from-green-500/20 to-emerald-500/20'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="service-title"
          >
            <span className="text-accent text-lg font-medium">What We Do</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver comprehensive digital solutions that transform your ideas into reality
            </p>
          </motion.div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card-gsap group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative p-8">
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
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-accent font-medium group-hover:text-accent transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
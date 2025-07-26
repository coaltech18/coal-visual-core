import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, TrendingUp } from 'lucide-react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.from(titleRef.current.children, {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.5
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const services = [
    { icon: Code, name: 'Web Development' },
    { icon: Smartphone, name: 'App Development' },
    { icon: TrendingUp, name: 'Social Media Marketing' }
  ];

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div ref={titleRef}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
              Modern Tech Agency
            </span>
          </motion.div>
          
          <h1 className="hero-text mb-8">
            <div>Building the</div>
            <div className="text-accent">Future</div>
            <div>of Digital</div>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            We craft exceptional digital experiences through innovative web development, 
            cutting-edge app solutions, and strategic social media marketing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary group"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 rounded-xl border border-accent/30 text-accent hover:bg-accent/10 transition-all duration-300"
            >
              View Our Work
            </motion.button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.2 }}
              className="service-card group"
            >
              <service.icon className="h-12 w-12 text-accent mb-4 mx-auto animate-float" />
              <h3 className="text-lg font-semibold text-foreground">{service.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/5 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-20 w-8 h-8 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;
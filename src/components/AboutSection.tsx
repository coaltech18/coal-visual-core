import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      gsap.from('.stat-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Users, number: '50+', label: 'Happy Clients' },
    { icon: Award, number: '100+', label: 'Projects Delivered' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
    { icon: Globe, number: '15+', label: 'Countries Served' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="about-content">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent text-lg font-medium">About Us</span>
              <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
                Innovating <span className="text-accent">Tomorrow</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We are a team of passionate developers, designers, and marketers 
                dedicated to crafting exceptional digital experiences that drive 
                business growth and innovation.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our expertise spans across modern web technologies, mobile app development, 
                and strategic social media marketing. We believe in creating solutions 
                that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="btn-primary"
                >
                  Meet Our Team
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 rounded-xl border border-accent/30 text-accent hover:bg-accent/10 transition-all duration-300"
                >
                  Our Process
                </motion.button>
              </div>
            </motion.div>
          </div>
          
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card p-6 rounded-2xl bg-card/50 border border-border/20 text-center group hover:bg-card/80 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex p-3 rounded-xl bg-accent/10 mb-4 group-hover:glow-subtle transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-accent/10 to-accent/5 rounded-full animate-float" />
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-gradient-to-br from-accent/5 to-transparent rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default AboutSection;
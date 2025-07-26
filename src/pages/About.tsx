import ThreeBackground from '@/components/ThreeBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Globe, Target, Lightbulb, Heart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Happy Clients' },
    { icon: Award, number: '100+', label: 'Projects Delivered' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
    { icon: Globe, number: '15+', label: 'Countries Served' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes that drive your business forward.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions.'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships with our clients.'
    },
    {
      icon: Zap,
      title: 'Agile Approach',
      description: 'Fast delivery without compromising quality through agile methodologies.'
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'Visionary leader with 10+ years in tech innovation.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Development',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      description: 'Full-stack expert specializing in scalable architectures.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      description: 'Award-winning designer with a passion for user experience.'
    },
    {
      name: 'Emily Davis',
      role: 'Marketing Strategist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      description: 'Digital marketing maven with proven campaign success.'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started with a vision to revolutionize digital experiences.'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Landed our breakthrough project with a Fortune 500 company.'
    },
    {
      year: '2022',
      title: 'Team Expansion',
      description: 'Grew to 20+ talented professionals across multiple disciplines.'
    },
    {
      year: '2023',
      title: 'International Reach',
      description: 'Expanded services globally, serving clients in 15+ countries.'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Launched R&D division focusing on AI and emerging technologies.'
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
              <span className="text-accent text-lg font-medium">About Us</span>
              <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
                Innovating <span className="text-accent">Tomorrow</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We are a team of passionate developers, designers, and marketers 
                dedicated to crafting exceptional digital experiences that drive 
                business growth and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Our <span className="text-accent">Story</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded in 2020, CoAl Technologies emerged from a simple belief: 
                  that technology should empower businesses to achieve extraordinary results. 
                  What started as a small team of developers has grown into a full-service 
                  digital agency serving clients worldwide.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our expertise spans across modern web technologies, mobile app development, 
                  and strategic social media marketing. We believe in creating solutions 
                  that not only meet today's needs but anticipate tomorrow's challenges.
                </p>
                <Link to="/contact" className="btn-primary">
                  Join Our Journey
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="p-6 rounded-2xl bg-card/50 border border-border/20 text-center group hover:bg-card/80 transition-all duration-300"
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent text-lg font-medium">Our Values</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                  What Drives <span className="text-accent">Us</span>
                </h2>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-card/30 border border-border/20 hover:bg-card/50 transition-all duration-300"
                >
                  <div className="inline-flex p-4 rounded-xl bg-accent/10 mb-4">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent text-lg font-medium">Our Team</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                  Meet the <span className="text-accent">Experts</span>
                </h2>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent text-lg font-medium">Our Journey</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                  Company <span className="text-accent">Timeline</span>
                </h2>
              </motion.div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {timeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="text-accent font-bold text-2xl mb-2">{event.year}</div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                  
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg" />
                  
                  <div className="flex-1" />
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
                Ready to Work <span className="text-accent">Together?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how we can help transform your digital presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Get In Touch
                </Link>
                <Link to="/services" className="px-8 py-4 rounded-xl border border-accent/30 text-accent hover:bg-accent/10 transition-all duration-300">
                  Our Services
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

export default About;
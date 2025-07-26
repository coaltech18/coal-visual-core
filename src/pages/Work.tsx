import ThreeBackground from '@/components/ThreeBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Work = () => {
  const featuredProjects = [
    {
      title: 'TechFlow E-Commerce Platform',
      category: 'Web Development',
      description: 'A comprehensive e-commerce solution with AI-powered product recommendations, real-time inventory management, and seamless payment processing.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      metrics: ['300% increase in sales', '2.5s page load time', '99.9% uptime'],
      duration: '4 months',
      year: '2024'
    },
    {
      title: 'MediCare Mobile App',
      category: 'App Development',
      description: 'Healthcare management app with telemedicine features, appointment scheduling, and secure patient data management.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      tech: ['React Native', 'Firebase', 'Socket.io', 'HIPAA Compliance'],
      metrics: ['50k+ downloads', '4.8 App Store rating', '95% user retention'],
      duration: '6 months',
      year: '2024'
    },
    {
      title: 'GreenTech Social Campaign',
      category: 'Social Media Marketing',
      description: 'Multi-platform sustainability campaign that increased brand awareness and drove environmental engagement.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      tech: ['Instagram', 'TikTok', 'LinkedIn', 'Canva', 'Analytics'],
      metrics: ['2M+ impressions', '45% engagement rate', '25k new followers'],
      duration: '3 months',
      year: '2023'
    }
  ];

  const portfolioProjects = [
    {
      title: 'Financial Dashboard',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tech: ['Vue.js', 'D3.js', 'Python'],
      year: '2023'
    },
    {
      title: 'Food Delivery App',
      category: 'App Development',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
      tech: ['Flutter', 'Firebase', 'Maps API'],
      year: '2023'
    },
    {
      title: 'Fashion Brand Campaign',
      category: 'Social Media Marketing',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      tech: ['Instagram', 'Pinterest', 'Photoshop'],
      year: '2023'
    },
    {
      title: 'Real Estate Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      tech: ['Next.js', 'Prisma', 'PostgreSQL'],
      year: '2022'
    },
    {
      title: 'Fitness Tracking App',
      category: 'App Development',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      tech: ['React Native', 'HealthKit', 'ML'],
      year: '2022'
    },
    {
      title: 'Tech Startup Launch',
      category: 'Social Media Marketing',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      tech: ['LinkedIn', 'Twitter', 'PR Strategy'],
      year: '2022'
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
              <span className="text-accent text-lg font-medium">Our Portfolio</span>
              <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
                Projects That <span className="text-accent">Inspire</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how we've helped businesses transform their digital presence 
                with innovative solutions and creative strategies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent text-lg font-medium">Case Studies</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                  Featured <span className="text-accent">Projects</span>
                </h2>
              </motion.div>
            </div>

            <div className="space-y-24">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="relative group overflow-hidden rounded-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="p-2 bg-background/80 rounded-lg hover:bg-background transition-colors">
                          <ExternalLink className="h-4 w-4 text-accent" />
                        </button>
                        <button className="p-2 bg-background/80 rounded-lg hover:bg-background transition-colors">
                          <Github className="h-4 w-4 text-accent" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <span className="text-accent text-sm font-medium px-3 py-1 rounded-full bg-accent/10">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold mt-4 mb-4 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span className="text-sm text-muted-foreground">{project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-accent" />
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {project.metrics.map((metric) => (
                          <li key={metric} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-full bg-muted/30 text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="btn-primary"
                    >
                      View Case Study
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                  More <span className="text-accent">Projects</span>
                </h2>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border/20"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-2 bg-background/80 rounded-lg hover:bg-background transition-colors">
                        <ExternalLink className="h-4 w-4 text-accent" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-accent text-sm font-medium px-3 py-1 rounded-full bg-accent/10">
                        {project.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded bg-muted/30 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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
                Ready to Join Our <span className="text-accent">Success Stories?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's create your next breakthrough project together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Start Your Project
                </Link>
                <Link to="/services" className="px-8 py-4 rounded-xl border border-accent/30 text-accent hover:bg-accent/10 transition-all duration-300">
                  View Services
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

export default Work;
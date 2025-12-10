import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollToTop from '@/components/ScrollToTop';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Work = () => {
  const projects = [
    {
      name: 'Hybits CRM Suite',
      url: 'https://hybits.in',
      description: 'SaaS CRM platform with comprehensive management tools',
      tags: ['SaaS', 'CRM'],
      type: 'SaaS'
    },
    {
      name: 'MatchPod',
      url: 'https://matchpod.in',
      description: 'Roommate matching platform with admin dashboard',
      tags: ['Roommate Matching', 'Platform'],
      type: 'SaaS'
    },
    {
      name: 'Pruthviraj Dodamani',
      url: 'https://pruthvirajdodamani.com',
      description: 'Personal portfolio website',
      tags: ['Personal Brand', 'Portfolio'],
      type: 'Personal Brand'
    },
    {
      name: 'Animathon',
      url: 'https://animathon.in',
      description: 'Event website for animation festival',
      tags: ['Event', 'Website'],
      type: 'Event'
    },
    {
      name: 'Skazka Beach Resort',
      url: 'https://skazkabeachresort.com',
      description: 'Resort and hospitality website',
      tags: ['Resort', 'Hospitality'],
      type: 'Resort'
    },
    {
      name: 'DMen Wear',
      url: 'https://dmenwear.in',
      description: 'Fashion and e-commerce website',
      tags: ['E-commerce', 'Fashion'],
      type: 'E-commerce'
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
              <span className="text-accent text-sm font-medium tracking-wide uppercase">Our Portfolio</span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
                Recent <span className="text-accent">Projects</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A selection of recent projects across SaaS, personal brands, resorts and e-commerce. Every site is designed to look modern and feel fast.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
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
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="text-xs px-2 py-1 rounded bg-accent/10 text-accent font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-foreground relative z-10 group-hover:text-accent transition-colors">{project.name}</h3>
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Your <span className="text-accent">Project?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss your project and create something amazing together.
              </p>
              <Link to="/contact" className="btn-primary">
                Start your project
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

export default Work;

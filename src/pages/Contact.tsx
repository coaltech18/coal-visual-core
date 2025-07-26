import ThreeBackground from '@/components/ThreeBackground';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within 24 hours.',
      contact: 'hello@coal-technologies.com',
      link: 'mailto:hello@coal-technologies.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team during business hours.',
      contact: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come visit our office for an in-person consultation.',
      contact: '123 Tech Street, San Francisco, CA 94105',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'We\'re available during these hours to assist you.',
      contact: 'Mon-Fri: 9AM-6PM PST',
      link: '#'
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. Web development projects typically take 4-12 weeks, mobile apps 8-20 weeks, and marketing campaigns are ongoing with initial setup in 2-4 weeks.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer comprehensive maintenance and support packages for all our projects, including regular updates, security monitoring, and technical assistance.'
    },
    {
      question: 'What is your development process?',
      answer: 'We follow an agile methodology with regular client check-ins. Our process includes discovery, strategy, design, development, testing, and launch phases with clear milestones.'
    },
    {
      question: 'Can you work with existing systems?',
      answer: 'Absolutely! We specialize in integrating new solutions with existing systems and can help modernize legacy applications while maintaining business continuity.'
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
              <span className="text-accent text-lg font-medium">Get In Touch</span>
              <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
                Let's <span className="text-accent">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to transform your digital presence? We'd love to hear about your project 
                and discuss how we can help bring your vision to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-card/50 border border-border/20 hover:bg-card/80 transition-all duration-300 text-center block"
                  whileHover={{ y: -5 }}
                >
                  <div className="inline-flex p-4 rounded-xl bg-accent/10 mb-4 group-hover:glow-subtle transition-all duration-300">
                    <method.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                  <p className="text-accent font-medium">{method.contact}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <ContactSection />

        {/* FAQ Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent text-lg font-medium">FAQ</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                  Frequently Asked <span className="text-accent">Questions</span>
                </h2>
              </motion.div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-8 p-6 rounded-2xl bg-card/30 border border-border/20"
                >
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Location */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Visit Our <span className="text-accent">Office</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Located in the heart of San Francisco's tech district, our modern office 
                  space is designed for collaboration and innovation. We'd love to meet 
                  you in person to discuss your project over coffee.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-accent" />
                    <span className="text-foreground">123 Tech Street, San Francisco, CA 94105</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-accent" />
                    <span className="text-foreground">Monday - Friday: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-accent mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
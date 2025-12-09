import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Log form data to console (for now)
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      budget: '',
      projectType: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'management@coaltech.in' },
    { icon: Phone, label: 'Phone / WhatsApp', value: '+91 78924 42633' },
    { icon: MapPin, label: 'Address', value: '#18, 9th Cross, Maruthi Nagar, Ittamadu Main Road, Bengaluru – 560085, India' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="contact-content">
            <h3 className="text-3xl font-bold mb-8 text-foreground">
              Tell us about your project
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Tell us about your project and we'll get back with a simple plan, timeline and rough cost estimate.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  className="flex items-start space-x-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 rounded-xl bg-accent/10 group-hover:glow-subtle transition-all duration-300 flex-shrink-0">
                    <info.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-1">{info.label}</div>
                    <div className="text-muted-foreground text-sm leading-relaxed">{info.value}</div>
                  </div>
                </motion.div>
              ))}
              
              <div className="pt-4">
                <p className="text-sm text-muted-foreground">
                  Preferred contact: WhatsApp or email.
                </p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border/30 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border/30 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company / Brand
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border/30 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300"
                  placeholder="Your company or brand name"
                />
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border/30 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300"
                >
                  <option value="">Not sure yet</option>
                  <option value="<1000">&lt; $1,000</option>
                  <option value="1000-3000">$1,000 – $3,000</option>
                  <option value="3000+">$3,000+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'website', label: 'Website / Landing page' },
                    { value: 'ecommerce', label: 'E-commerce' },
                    { value: 'saas', label: 'SaaS dashboard / custom app' },
                    { value: 'other', label: 'Other' }
                  ].map((type) => (
                    <label key={type.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="projectType"
                        value={type.value}
                        checked={formData.projectType === type.value}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-accent focus:ring-accent"
                      />
                      <span className="text-foreground">{type.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message / Project Details <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border/30 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary group"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
